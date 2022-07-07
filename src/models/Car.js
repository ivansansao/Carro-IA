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
        this.luzes = true;
        this.lapCount = 0;

        for (let i = 0; i < 360; i += 18) {
            this.rays.push(new Ray(this.pos.copy(), 20, radians(i), this.showRays));

        }

        this.setColor();

        if (this.pos.x == -1) {
            this.pos = createVector(random(20, 1700), random(20, 800));
        }

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

        
        // // Increase account lap.
        // if (hit) {
        //     if (ranhuras.length % this.ranhurasColetadas.length == 0) {
        //         console.log('They are equals!');
        //         this.ranhurasColetadas = [];
        //         this.lapCount++;
        //         console.log(this.ranhurasColetadas);
        //     }            
        // }

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
        if (this.marca.toLowerCase().includes('c') || this.marca.toLowerCase().includes('x')) {
            // this.cor = 'hsl(216, 100%, 50%)'; // Azul
            this.cor = 'rgb(255,255,255)';
        } else {
            // this.cor = 'hsla(' + Math.floor(this.ia.mutated / 10 * 360) + ',100%,50%,0.3)';
            this.cor = 'hsla(' + Math.floor(this.ia.mutated / 10 * 360) + ',100%,50%,1)';
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

        if (this.aliveTime % pista.timeOutStopped == 0) {
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

        if (random() > 0.5) {
            this.luzes = !this.luzes;
        }
    }

    mutate(rate) {
        while (this.ia.mutated == 0) {
            this.ia.mutate(rate);
        }
        this.setColor();
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
            genetic.setFlag();
            if (pista.recordRanhuras > 0 && this.ranhurasColetadas.length == pista.recordRanhuras) {
                console.log(`Carro ${this.id} morreu em: km ${this.km} (x,y) ${this.pos.x},${this.pos.y}`);
            }

        }
    }

    show() {

        if (!showCarsDetais) {

            strokeWeight(2);
            fill(this.cor);
            stroke(255);
            circle(this.pos.x, this.pos.y,10);

            return false;
        }

        this.showInfoCar();

        if (this.batido) {
            // imageMode(CENTER);
            // image(pista.spriteRip, this.pos.x, this.pos.y);
            strokeWeight(1);
            fill(0, 0, 255);
            stroke(255);
            circle(this.pos.x, this.pos.y,5);
        } else {

            push();
            translate(this.pos.x, this.pos.y);
            rotate(this.heading);
            this.drawCar();
            pop();

            this.volanteAngle = '';
        }

    }

    showInfoCar() {

        if (showInfoCar) {

            let x = this.pos.x - 50;
            let y = this.pos.y - 90;

            stroke(0, 0, 255);
            fill(255, 255, 255);
            strokeWeight(1);
            rect(x, y, 120, 65, 4);
            line(this.pos.x, y + 50, this.pos.x, this.pos.y);

            textSize(10);
            fill(0, 0, 255);
            noStroke();
            strokeWeight(1);

            text(`Genes mutados: ${this.ia.mutated}`, x += 4, y += 12);
            text(`Ranhuras: ${this.ranhurasColetadas.length}`, x, y += 12);
            text(`km: ${this.km}`, x, y += 12);
            text(`Marca: ${this.marca}`, x, y += 12);
            text(`CRC RNA: ${crc32(this.ia.showWeights(true))}`, x, y += 12);
            // text(`Voltas: ${this.lapCount}`, x+50, y); // Não está funcionando ainda.

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


        // Corpo do carro.
        stroke(0);
        fill(this.cor);
        rect(-8, -10, 40, 20, 5);

        // Vidros.
        noStroke();
        fill(0);
        rect(-8, -10, 28, 20, 4);

        // Teto.
        fill(this.cor);
        rect(-2, -9, 14, 17, 4);

        // Ré.
        if (this.lastMarcha == -1) {

            stroke(255, 0, 0);
            strokeWeight(2);
            // fill('hsl(0, 100%, 50%)'); 
            fill(0);
            rect(-9, 2, 3, 6, 4);
            rect(-9, -8, 3, 6, 4);
        }

        if (luzes) {

            if (this.luzes) {

                // Faróis dianteiros acesos.
                strokeWeight(6);
                stroke(255);
                point(28, -6);
                point(28, 6);

                noStroke();

                // Feixo de luz perto.                
                fill(255, 255, 255, 40);
                rect(60, -20, -30, 40, 10);

                // Feixo de luz longe.                
                fill(241, 255, 176, 40);
                rect(80, -25, -50, 50, 10);

            } else {
                // Faróis dianteiros apagados.
                strokeWeight(6);
                stroke(80);
                point(28, -6);
                point(28, 6);

            }

            noStroke();

            // Feito de luz trazeiro.
            if (this.lastMarcha == -1) {
                fill(255, 0, 0, 100);
                rect(-2, -12, -11, 24, 8);
            }

        }

        // push()
        // fill(0);
        // strokeWeight(0);
        // rotate(radians(90));
        // textSize(8);
        // text(`${this.ranhurasColetadas.length}`, -2, 0);
        // text(`${this.km}`, -8, -8);
        // text(`${this.marca}`, -6, -18);
        // pop();

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
