// https://github.com/davenewt/p5-asteroids/blob/master/ship.js

let cars = [];

function setup() {

    createCanvas(windowWidth, windowHeight * 0.98);

    for (let i = 0; i < 1; i++) {
        cars.push(new Car());
    }

}

function draw() {

    background(255);

    for (let i = 0; i < cars.length; i++) {
        if (keyIsDown(UP_ARROW)) {
            cars[i].vaiPraFrente();
        } else if (keyIsDown(DOWN_ARROW)) {
            cars[i].vaiPraTras();
        }
        if (keyIsDown(RIGHT_ARROW)) {
            cars[i].vaiPraDireita();
        } else if (keyIsDown(LEFT_ARROW)) {
            cars[i].vaiPraEsquerda();
        }
        cars[i].update();
        // cars[i].demo();
        cars[i].show();
    }

}




