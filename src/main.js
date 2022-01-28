/* https://github.com/davenewt/p5-asteroids/blob/master/ship.js

  Colisão Line Line: https://editor.p5js.org/simontiger/sketches/S1kfupErZ

  Collide2D Methods: https://github.com/bmoren/p5.collide2D

  // To show some demo.
    car.update();
    cars.demo();
    car.show();   

*/

let cars = [];
let walls = [];
let ray;

function setup() {

    createCanvas(windowWidth, windowHeight * 0.98);

    for (let i = 0; i < 5; i++) {
        walls.push(new Wall());
    }
    for (let i = 0; i < 1; i++) {
        cars.push(new Car());
    }

    ray = new Ray(createVector(width / 2, height / 2), 20);


}

function draw() {

    start();

    for (const car of cars) {

        car.update();
        car.show();

    }

    for (const wall of walls) {

        wall.update();
        wall.show();

        ray.lookAt(mouseX,mouseY);
        const hit = ray.cast(wall);
        
        if (hit) {
            line(ray.pos.x, ray.pos.y, hit.x, hit.y);
            circle(hit.x, hit.y, 10);
        }
        ray.show()
    }

}
