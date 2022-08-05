class Car {

    constructor(marca = '?', inteligente = true, allowLazy = false, randomHeading = false) {

        this.pos = createVector(100, 100);
        this.lastPos = createVector();
        this.heading = randomHeading ? random(360) : 0;
        this.rotation = 0;
        this.marcha = 0;
        this.lastMarcha = 0;
        this.cor = 'hsla(' + Math.floor(Math.random() * 360) + ',100%,50%,0.8)';
        this.volanteAngle = '';
        this.demoLado = '';
        this.inteligente = inteligente;
        this.batido = false;
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
        this.showInfo = false;
        this.speed = 0;
        this.gear = 1; // -1 Reverse, 1 Dinamic
        this.breaking = false;
        this.speedingUp = false;

        if (this.pos.x == -1) {
            this.pos = createVector(random(20, 1700), random(20, 800));
        }

    }

    speedUp() {
        this.speed += 0.04;
        if (this.speed > 2) {
            this.speed = 1;
        }
        this.breaking = false;
    }

    break() {
        this.speed -= 0.04;
        if (this.speed < 0) {
            this.speed = 0;
        }
        this.breaking = true;

    }

    vaiPraDireita() {
        
        if (this.speed > 0) {

            if (this.gear == 1)
                this.rotation = 0.1; // this.speed * 0.4
            else if (this.gear == -1)
                this.rotation = -0.1;

        }
        this.volanteAngle = 'r';
    }
    vaiPraEsquerda() {
        if (this.speed > 0) {

            if (this.gear == 1)
                this.rotation = -0.1;
            else if (this.gear == -1)
                this.rotation = 0.1;

        }
        this.volanteAngle = 'l';
    }

    engageDinamic() {
        if (this.speed == 0) {
            this.gear = 1;
        }
        this.breaking = false;
    }

    engageReverse() {
        if (this.speed == 0) {
            this.gear = -1;
        }
        this.breaking = false;
    }

    update() {

        if (this.batido) {
            return false;
        }

        this.heading += this.rotation * 0.3;

        let irPara = p5.Vector.fromAngle(this.heading).mult(3).mult(this.gear == -1 ? -this.speed : this.speed);

        this.pos.add(irPara);

        this.km += this.marcha;
        this.aliveTime++;

        this.marcha = 0;
        this.rotation = 0;

        if (this.speed > 0) {
            this.speed -= 0.005;
            if (this.speed < 0) {
                this.speed = 0;
            }
        }

        this.speed = Number(this.speed.toFixed(3));

    }

    show() {

        this.showInfoCar();

        if (this.batido) {
            // imageMode(CENTER);
            // image(pista.spriteRip, this.pos.x, this.pos.y);
            strokeWeight(1);
            fill(0, 0, 255);
            stroke(255);
            circle(this.pos.x, this.pos.y, 5);
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

        if (this.showInfo) {

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

            text(`km: ${this.km}`, x, y += 12);
            text(`Gear: ${this.gear}`, x, y += 12);
            text(`Speed: ${this.speed}`, x, y += 12);

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
        if (this.breaking) {

            stroke(255, 0, 0);
            strokeWeight(2);
            fill(0);
            rect(-9, 2, 3, 6, 4);
            rect(-9, -8, 3, 6, 4);

            // Faixa
            // fill(255, 0, 0, 100);
            // rect(-2, -12, -11, 24, 8);            

        } else if (this.gear == -1) {

            stroke(255, 255, 0);
            strokeWeight(2);
            fill(0);
            rect(-9, 2, 3, 6, 4);
            rect(-9, -8, 3, 6, 4);
        }



        if (this.luzes) {

            // Faróis dianteiros acesos.
            // strokeWeight(6);
            // stroke(255);
            // point(28, -6);
            // point(28, 6);

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


    }

    demo(run) {

        if (!run) return

        if (this.speed == 0) {
            const rand = Number(random(0,2).toFixed(0));
            if (rand == 0) {
                this.gear = -1;
            } else if (rand == 1) {
                this.gear = 1;
            }

        }

        if (frameCount % 50 == 0) {

            const rand = Number(random(0,2).toFixed(0))

            if (rand == 0) {
                this.speedingUp = true;
            } else if (rand == 1) {
                this.speedingUp = false;
            }
        }

        if (this.speedingUp) {
            this.speedUp();
        }
        if (frameCount % 50 == 0) {

            const rand = Number(random(0,2).toFixed(0))

            if (rand == 0) {
                this.breaking = true;
            } else if (rand == 1) {
                this.breaking = false;
            }
        }

        if (this.breaking) {
            this.break();
        }

        if (frameCount % 50 == 0) {

            const lado = Number(random(0,2).toFixed(0))

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
