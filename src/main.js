/* https://github.com/davenewt/p5-asteroids/blob/master/ship.js

  Colisão Line Line: https://editor.p5js.org/simontiger/sketches/S1kfupErZ

  Collide2D Methods: https://github.com/bmoren/p5.collide2D

  // To show some demo.
    car.update();
    cars.demo();
    car.show();   

    https://www.base64-image.de/

*/

let quantidade = 200;
let vivos = 0;
let runDemo = false;
let cars = [];
let walls = [];
let ray;
let pista;
let spritesheet;
let colocacao = [];
let evolucao = [];
let nGeracao = 0;
let selectedPista = 1;
let foo;

function setup() {

    createCanvas(windowWidth, windowHeight - 4);

    foo = new p5.Speech();

    pista = new Pista();

    for (let i = 0; i < 8; i++) {
        walls.push(new Wall());
    }

    firstGeneration();

}

function choicePista() {
    if (selectedPista == 1) {
        spritesheet = getSpriteFundo1();
    } else if (selectedPista == 2) {        
        spritesheet = getSpriteFundo2();
    }
}

function preload() {
    this.choicePista();
}

function draw() {

    start();

    image(spritesheet, 0, 0);

    pista.show();

    for (const car of cars) {

        const carInputs = [];

        car.update();
        car.look(pista.walls);

        // console.log(car.lastMarcha);

        carInputs.push(car.lastMarcha);
        carInputs.push(car.rays[0].savedDistance);
        carInputs.push(car.rays[1].savedDistance);
        carInputs.push(car.rays[2].savedDistance);
        carInputs.push(car.rays[3].savedDistance);
        carInputs.push(car.rays[4].savedDistance);
        carInputs.push(car.rays[5].savedDistance);
        carInputs.push(car.rays[6].savedDistance);
        carInputs.push(car.rays[7].savedDistance);
        carInputs.push(car.rays[8].savedDistance);
        carInputs.push(car.rays[9].savedDistance);
        carInputs.push(car.rays[10].savedDistance);
        carInputs.push(car.rays[11].savedDistance);
        carInputs.push(car.rays[12].savedDistance);
        carInputs.push(car.rays[13].savedDistance);
        carInputs.push(car.rays[14].savedDistance);
        carInputs.push(car.rays[15].savedDistance);
        carInputs.push(car.rays[16].savedDistance);
        carInputs.push(car.rays[17].savedDistance);
        carInputs.push(car.rays[18].savedDistance);
        carInputs.push(car.rays[19].savedDistance);

        car.raciocinar(carInputs);
        car.demo(runDemo);
        if (selectedPista == 2) {
            car.verificaColisaoRanhura(pista.ranhuras);

        }
        car.show();

        if (car.km < -20) {
            car.aposentar();
        }

        matarKmBaixa();

        if (vivos == 1) {
            if (!car.batido) {
                if (car.marca == 'c') {
                    if (cars.length > 1) {
                        car.aposentar();
                    }
                }
            }
        }

    }
    

    if (vivos == 0) {

        nextGeneration();
    }
    noStroke();
    text(`Vivos: ${vivos}`, 100, 100);

}
