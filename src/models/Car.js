class Car {

    constructor() {

        this.pos = createVector(width * 0.5, height * 0.5);
        this.heading = random(0, PI * 2);
        this.rotation = 0;
        this.marcha = 0;
        this.cor = 'hsla(' + Math.floor(Math.random() * 360) + ',100%,50%,0.3)'
        this.volanteAngle = '';
        this.demoLado = '';
        this.rays = [];

        for (let i = -1.2;i<=1.4;i+=0.4) { // i<= 1.4
            this.rays.push(new Ray(this.pos.copy(), 20, i));
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

        this.heading += this.rotation * 0.3; // 0.3 é o quanto o veiculo esterce

        let irPara = p5.Vector.fromAngle(this.heading).mult(3).mult(this.marcha);

        this.pos.add(irPara);

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
 
            circle(dirRaio.x, dirRaio.y, 4);
            ray.lookAt(dirRaio.x, dirRaio.y);

        }

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

            if (menorHit) {
                
                stroke(140);
                line(ray.pos.x, ray.pos.y, menorHit.x, menorHit.y);
                fill(255, 0, 0);
                circle(menorHit.x, menorHit.y, 10);
            }

            if (menorHit) {
                noStroke();
                fill(0, 0, 255);
                text(`${maisPerto.toFixed(0)}`, menorHit.x + 6, menorHit.y + 2);
            }
        }
    }

    drawCar() {
        strokeWeight(2);
        stroke(0);

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
