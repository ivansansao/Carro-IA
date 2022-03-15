class Car {

    constructor(marca = '?', inteligente = true, allowLazy = false, randomHeading = false) {

        this.pos = pista.localNascimento.copy();
        this.lastPos = createVector();
        this.heading = randomHeading ? random(360) : pista.anguloNascimento;
        this.rotation = 0;
        this.marcha = 0;
        this.lastMarcha = 0;
        this.cor = 'hsla(' + Math.floor(Math.random() * 360) + ',100%,50%,0.3)';
        this.volanteAngle = '';
        this.demoLado = '';
        this.rays = [];
        this.showSensorPoint = false;
        this.showSensorRanhura = false;
        this.ia = new RedeNeural();
        this.inteligente = inteligente;
        this.batido = false;
        this.showRays = false;
        this.km = 0;
        this.kmMax = 0;
        this.kmMin = 0;
        this.kmMMCount = 0;
        this.lastKm = 0;
        this.marca = marca;
        this.aliveTime = 0;
        this.updates = 0;
        this.showSensorValue = false;
        this.qtdReh = 0;
        this.ranhurasColetadas = [];
        this.allowLazy = allowLazy;
        this.id = Number(random(0, 9999).toFixed(0));

        for (let i = 0; i < 360; i += 18) {
            this.rays.push(new Ray(this.pos.copy(), 20, radians(i), this.showRays));

        }

        this.setColor();

    }

    raciocinar(inputs) {

        if (!this.batido && this.inteligente) {

            /*
            0 - 1a Marcha
            1 - Ré
            2 - Direita
            3 - Reto
            4 - Esquerda
            */


            let resposta = this.ia.pensar(inputs);
            let maiorI;
            let maiorR;


            if (resposta[0] > resposta[1]) {
                this.vaiPraFrente(); // Frente
            } else {
                this.vaiPraTras(); // Trás
            }

            maiorI = 0;
            maiorR = -Infinity;
            for (let i = 2; i < 5; i++) {
                if (resposta[i] > maiorR) {
                    maiorR = resposta[i]
                    maiorI = i
                }
            }

            if (maiorI == 2) {
                this.vaiPraDireita();
            } else if (maiorI == 3) {
                // Vai reto.
            } else if (maiorI == 4) {
                this.vaiPraEsquerda();
            }

            this.ia.selectedOutput = maiorI;

        }
    }

    verificaColisaoRanhura(ranhuras) {

        let hit;
        let cir = this.pos.copy();
        const irPara = p5.Vector.fromAngle(this.heading).mult(10);

        cir.add(irPara);

        if (this.showSensorRanhura) {
            circle(cir.x, cir.y, 10);
        }

        for (let i = 0; i < ranhuras.length; i++) {

            const r = ranhuras[i];

            if (r.t == 0) { // 0 Ranhuras que detectam qualquer direção.

                hit = collideLineCircle(r.a, r.b, r.c, r.d, cir.x, cir.y, 20);

                if (hit) {

                    if (!this.ranhurasColetadas.includes(i)) {
                        r.m = 1;
                        this.ranhurasColetadas.push(i);
                        ranhuras[i].w += 0.05;
                    }
                }
            } else if (r.t == -1) { // -1 Ranhuras que aceitam/detectam apenas ré.

                // Se está em um ângulo com traseira pra baixo!
                if (this.heading > 3.30 && this.heading < 4.5) {

                    if (this.lastMarcha == -1 && this.qtdReh > 5) {
                        hit = collideLineCircle(r.a, r.b, r.c, r.d, cir.x, cir.y, 20);

                        if (hit) {

                            if (!this.ranhurasColetadas.includes(i)) {
                                r.m = 1;
                                this.ranhurasColetadas.push(i);
                            }
                        }
                    }
                }
            }
        }

    }

    verificaEstagnacao() {

        this.kmMMCount++;

        if (this.km > this.kmMax) {
            this.kmMax = this.km;
            this.kmMMCount = 0;
        }

        if (this.km < this.kmMin) {
            this.kmMin = this.km;
            this.kmMMCount = 0;
        }

    }

    setColor() {
        if (this.marca == 'c') {
            this.cor = 'hsl(216, 100%, 50%)'; // Azul
            // } else if (this.marca == 'm') {
            //     this.cor = 'hsl(100, 100%, 70%)'; // Verde claro
        }
    }

    vaiPraFrente() {

        this.marcha = 1;
        this.lastMarcha = 1;

    }
    vaiPraTras() {

        this.marcha = -1;
        this.lastMarcha = -1;
        this.qtdReh++;
    }

    vaiPraDireita() {
        if (this.marcha > 0)
            this.rotation = 0.2;
        else if (this.marcha < 0)
            this.rotation = -0.2;

        this.volanteAngle = 'r';
    }
    vaiPraEsquerda() {
        if (this.marcha > 0)
            this.rotation = -0.2;
        else if (this.marcha < 0)
            this.rotation = 0.2;

        this.volanteAngle = 'l';
    }

    update() {

        if (this.batido) {
            return false;
        }

        this.heading += this.rotation * 0.3; // 0.3 é o quanto o veiculo esterce

        let irPara = p5.Vector.fromAngle(this.heading).mult(3).mult(this.marcha);

        this.pos.add(irPara);

        this.km += this.marcha;
        this.aliveTime++;

        this.marcha = 0;
        this.rotation = 0;

        if (this.inteligente) {
            this.verificaEstagnacao();
        }

        this.updateRays();

        pista.setMajorDistance(this.km);

        this.killLazier();

        if (this.aliveTime % 200 == 0) {
            this.onEachTime();
        }


    }

    onEachTime() {
        if (this.pos.x == this.lastPos.x && this.pos.y == this.lastPos.y) {
            this.aposentar();
        }

        if (this.km == this.lastKm) {
            this.aposentar();
        }
        this.lastPos.x = this.pos.x;
        this.lastPos.y = this.pos.y;
        this.lastKm = this.km;
    }

    killLazier() {

        if (!this.allowLazy) {
            const distance = pista.carMajorDistance - this.km;
            if (distance > 400) {
                this.aposentar();
            }
        }

    }

    getPontoAfrente(offset = 0) {

        const dirRaio = this.pos.copy();
        const lat = p5.Vector.fromAngle(this.heading + offset).mult(50);

        return dirRaio.add(lat);

    }

    updateRays() {

        for (ray of this.rays) {

            ray.pos.x = this.pos.x;
            ray.pos.y = this.pos.y;

            const dirRaio = this.getPontoAfrente(ray.defAngle);

            if (this.showSensorPoint) circle(dirRaio.x, dirRaio.y, 4);

            ray.lookAt(dirRaio.x, dirRaio.y);

        }

    }

    aposentar() {

        if (!this.batido) {
            vivos--;
            this.batido = true;

            if (pista) {
                const tmpMelhor = genetic.getMelhorCarro();
                if (tmpMelhor) {
                    pista.setFlag(tmpMelhor.pos.x, tmpMelhor.pos.y, tmpMelhor.km);
                }
            }
        }
    }

    show() {

        if (this.batido) {
            imageMode(CENTER);
            image(pista.spriteRip, this.pos.x, this.pos.y);
        } else {

            push();
            translate(this.pos.x, this.pos.y);
            rotate(this.heading);
            this.drawCar();
            pop();

            this.volanteAngle = '';
        }

    }

    look(walls) {

        if (this.batido) {
            return false;
        }

        // Percorre todas as paredes para achar a parece mais perto.

        for (ray of this.rays) {

            let maisPerto = Infinity;
            let menorHit = null;

            for (const wall of walls) {

                if (wall.id == this.id) {

                } else {

                    const hit = ray.cast(wall);

                    if (hit) {
                        const d = p5.Vector.dist(ray.pos, hit);
                        if (d < maisPerto) {
                            maisPerto = d;
                            menorHit = hit;
                        }
                    }
                }
            }

            ray.savedDistance = maisPerto;
            ray.show()

            if (menorHit && this.showRays) {

                fill(255, 0, 0);
                stroke(255, 0, 0);
                strokeWeight(1);
                lineX(ray.pos.x, ray.pos.y, menorHit.x, menorHit.y, 'hsl(0, 100%, 70%)');
                circle(menorHit.x, menorHit.y, 10);

                if (this.showSensorValue) {
                    noStroke();
                    fill(0, 0, 255);
                    text(`${maisPerto.toFixed(0)}`, menorHit.x + 6, menorHit.y + 2);
                }

            }

            if (ray.savedDistance < 10) {
                this.aposentar();
                break;
            }
        }
    }

    drawCar() {


        stroke(100);

        strokeWeight(2);

        fill(100);
        rect(-6, -12, 6, 4, 1); // Roda traseira
        rect(-6, 8, 6, 4, 1); // Roda traseira

        push();
        translate(23, -12);
        if (this.volanteAngle == 'l') rotate(-0.5);
        if (this.volanteAngle == 'r') rotate(0.5);
        rect(-3, 0, 6, 4, 1); // Roda dianteira
        pop();

        push();
        translate(23, 12);
        if (this.volanteAngle == 'l') rotate(-0.5);
        if (this.volanteAngle == 'r') rotate(0.5);
        rect(-3, -4, 6, 4, 1); // Roda dianteira direita
        pop();


        stroke(0);

        fill(this.cor);
        rect(-8, -10, 40, 20, 5);


        // Ré.
        if (this.lastMarcha == -1) {


            stroke(255, 0, 0);
            strokeWeight(2);
            // fill('hsl(0, 100%, 50%)'); 
            fill(0);
            rect(-9, 2, 3, 6, 4);
            rect(-9, -8, 3, 6, 4);
        }

        strokeWeight(6);
        stroke(255);
        point(28, -6);
        point(28, 6);

        push()
        fill(0);
        strokeWeight(0);
        rotate(radians(90));
        textSize(8);
        text(`${this.ranhurasColetadas.length}`, -2, 0);
        text(`${this.km}`, -8, -8);
        text(`${this.marca}`, -3, -18);

        pop();

    }

    demo(run) {

        if (!run) return

        let movimento = Number((Math.random() * (100 - 1)).toFixed(0));
        this.marcha = 1

        if (movimento > 30) {
            this.vaiPraFrente();
        }

        if (frameCount % 50 == 0) {

            const lado = Math.floor(random(0.0, 0.4) * 10)

            if (lado == 0) {
                this.demoLado = ''
            } else if (lado == 1) {
                this.demoLado = 'r'
            } else if (lado == 2) {
                this.demoLado = 'l'
            }
        }


        if (this.demoLado == 'r')
            this.vaiPraDireita();
        else if (this.demoLado == 'l')
            this.vaiPraEsquerda();

        if (this.pos.x > width)
            this.pos.x = 0;

        if (this.pos.x < 0)
            this.pos.x = width;

        if (this.pos.y > height)
            this.pos.y = 0;

        if (this.pos.y < 0)
            this.pos.y = height;
    }


}

function eliminarTodosCars() {
    // console.log('Eliminando todos os carros...');
    for (const car of cars) {
        car.aposentar();
    }
}
