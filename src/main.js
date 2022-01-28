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

    for (let i = 0; i < 10; i++) {
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
        ray.pos.x = car.pos.x;
        ray.pos.y = car.pos.y;

        let newPos = car.pos.copy();
        let lat = p5.Vector.fromAngle(car.heading).mult(100);
        newPos.add(lat);

        ray.lookAt(newPos.x, newPos.y);


    }

    for (const wall of walls) {
        wall.update();
        wall.show();
    }


    const mx = mouseX.toFixed(0);
    const my = mouseY.toFixed(0);

    // ray.lookAt(mx, my);

    text(`${mx}, ${my} (mouse)`, mx, my);

    // Percorre todas as paredes para achar a parece mais perto.


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
    ray.show()

    if (menorHit) {

        // text(`${maisPerto}`,ray.pos.x,ray.pos.y);
        line(ray.pos.x, ray.pos.y, menorHit.x, menorHit.y);
        circle(menorHit.x, menorHit.y, 10);
    }

}
