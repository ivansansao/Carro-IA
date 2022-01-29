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

function setup() {

    createCanvas(windowWidth * 0.98, windowHeight * 0.98);

    pista = new Pista();

    for (let i = 0; i < 8; i++) {
        walls.push(new Wall());
    }
    for (let i = 0; i < (runDemo == true ? 4 : 1); i++) {
        cars.push(new Car());
    }

}
function preload() {
    // spritesheet = loadImage('https://i.imgur.com/1G0VVKZ.png');
    spritesheet = getSpriteFundo();
}


function draw() {

    start();

    image(spritesheet, 0, 0);

    for (const car of cars) {

        car.update();
        car.look(pista.walls);
        car.demo(runDemo);
        car.show();

    }
    pista.show();

}
