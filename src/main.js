/* https://github.com/davenewt/p5-asteroids/blob/master/ship.js

  Colisão Line Line: https://editor.p5js.org/simontiger/sketches/S1kfupErZ

  Collide2D Methods: https://github.com/bmoren/p5.collide2D

  // To show some demo.
    car.update();
    cars.demo();
    car.show();   

    https://www.base64-image.de/

*/

let runDemo = false;
let cars = [];
let walls = [];
let ray;
let pista;
let spritesheet;
let colocacao = [];
let evolucao = [];
let vivos = 0;
let nGeracao = 0;

function setup() {

    createCanvas(windowWidth, windowHeight-4);

    pista = new Pista();

    for (let i = 0; i < 8; i++) {
        walls.push(new Wall());
    }

    firstGeneration();

}
function preload() {
    spritesheet = getSpriteFundo();
}


function draw() {

    start();

    image(spritesheet, 0, 0);

    for (const car of cars) {

        const carInputs = [];

        car.update();
        car.look(pista.walls);

        carInputs.push(car.rays[0].savedDistance);
        carInputs.push(car.rays[1].savedDistance);
        carInputs.push(car.rays[2].savedDistance);
        carInputs.push(car.rays[3].savedDistance);
        carInputs.push(car.rays[4].savedDistance);
        carInputs.push(car.rays[5].savedDistance);
        carInputs.push(car.rays[6].savedDistance);

        car.raciocinar(carInputs);
        car.demo(runDemo);
        car.show();

    }
    pista.show();

    if (vivos == 0) {
        
        nextGeneration();
    }

    text(`Vivos: ${vivos}`,100,100);

}
