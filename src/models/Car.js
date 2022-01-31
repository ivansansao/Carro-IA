class Car {

    constructor(marca = '?') {

        // this.pos = createVector(width * 0.5, height * 0.5);
        this.pos = createVector(1600, random(110, 170));
        this.heading = 110; random(0, PI * 2);
        this.rotation = 0;
        this.marcha = 0;
        this.cor = 'hsla(' + Math.floor(Math.random() * 360) + ',100%,50%,0.3)'
        this.volanteAngle = '';
        this.demoLado = '';
        this.rays = [];
        this.showSensorPoint = false;
        this.ia = new RedeNeural();
        this.inteligente = true;
        this.batido = false;
        this.showRays = false;
        this.km = 0;
        this.marca = marca;

        for (let i = -1.2; i <= 1.4; i += 0.4) { // i<= 1.4
            this.rays.push(new Ray(this.pos.copy(), 20, i, this.showRays));
        }

    }

    raciocinar(inputs) {

        if (!this.batido && this.inteligente) {

            let resposta = this.ia.pensar(inputs);
            let maiorI = 0;
            let maiorR = 0;

            for (let i = 0; i < 4; i++) {
                if (resposta[i] > maiorR) {
                    maiorR = resposta[i];
                    maiorI = i
                }
            }
            this.marcha = 1
            // if (resposta[0] > resposta[1]) {
            //     this.marcha = 1; // Frente
            // } else {
            //     this.marcha = -1; // Trás
            // }
            if (resposta[0] > resposta[1]) {
                this.vaiPraDireita();
            } else {
                this.vaiPraEsquerda();
            }

            this.ia.selectedOutput = maiorI;

        }
    }

    vaiPraFrente() {
        this.marcha = 1;
    }
    vaiPraTras() {
        this.marcha = -1;
    }

    vaiPraDireita() {
        if (this.marcha > 0)
            this.rotation = 0.1;
        else if (this.marcha < 0)
            this.rotation = -0.1;

        this.volanteAngle = 'r';
    }
    vaiPraEsquerda() {
        if (this.marcha > 0)
            this.rotation = -0.1;
        else if (this.marcha < 0)
            this.rotation = 0.1;

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
        this.marcha = 0;
        this.rotation = 0;
         

        // Raios.
        this.updateRays();

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
        vivos--;
        this.batido = true;
    }

    show() {

        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.heading);
        this.drawCar();
        pop();

        this.volanteAngle = '';

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

                const hit = ray.cast(wall);

                if (hit) {
                    const d = p5.Vector.dist(ray.pos, hit);
                    if (d < maisPerto) {
                        maisPerto = d;
                        menorHit = hit;
                    }
                }
            }

            ray.savedDistance = maisPerto;
            ray.show()

            if (menorHit && this.showRays) {

                lineX(ray.pos.x, ray.pos.y, menorHit.x, menorHit.y, 'hsl(270, 100%, 70%)');
                fill(255, 0, 0);
                circle(menorHit.x, menorHit.y, 10);

                noStroke();
                fill(0, 0, 255);
                text(`${maisPerto.toFixed(0)}`, menorHit.x + 6, menorHit.y + 2);

            }

            if (ray.savedDistance < 10) {
                this.aposentar();
                break;
            }
        }
    }

    drawCar() {
        stroke(0);
        
        push()
        strokeWeight(0);
        rotate(radians(90));
        textSize(8);
        text(`${this.km}`,-8,-8);
        text(`${this.marca}`,-3,-18);
        pop();

        strokeWeight(2);
        
        fill(0);
        rect(-6, -15, 6, 4, 1); // Roda traseira
        rect(-6, 11, 6, 4, 1); // Roda traseira

        push();
        translate(23, -12);
        if (this.volanteAngle == 'l') rotate(-0.3);
        if (this.volanteAngle == 'r') rotate(0.3);
        rect(-3, -2, 6, 4, 1); // Roda dianteira
        pop();

        push();
        translate(23, 12);
        if (this.volanteAngle == 'l') rotate(-0.3);
        if (this.volanteAngle == 'r') rotate(0.3);
        rect(-3, -2, 6, 4, 1); // Roda dianteira        
        pop();

        fill(this.cor);
        rect(-8, -10, 40, 20, 5);

        strokeWeight(6);
        stroke(255);
        point(28, -6);
        point(28, 6);
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
function calcColocacao() {
    colocacao = [];
    for (let car of cars) {
        colocacao.push(car);
    }
    if (colocacao.length > 0) {
        colocacao.sort(function (a, b) { return b.km - a.km });
    }

}
