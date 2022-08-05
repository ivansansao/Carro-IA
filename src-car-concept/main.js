let world = new World();

function handleKeyIsDown(car) {

    if (keyIsDown(UP_ARROW)) {
        car.speedUp();
    } else if (keyIsDown(DOWN_ARROW)) {
        car.freeSpeedUp();
    }
    if (keyIsDown(RIGHT_ARROW)) {
        car.vaiPraDireita();
    } else if (keyIsDown(LEFT_ARROW)) {
        car.vaiPraEsquerda();
    }

    if (keyIsDown(82)) { // r
        car.engageReverse();
    }
    if (keyIsDown(68)) { // d
        car.engageDinamic();
    }
    if (keyIsDown(66)) { // b
        car.brake();
    }

}

function keyPressed() {

    if (key == 'e') {
        world.demo = !world.demo;
    }
    if (key == 'i') {
        for (const car of world.cars) {
            car.showInfo = !car.showInfo;
        }

    }
    if (key == 't') {
        world.showTrails = !world.showTrails;
    }

}
function setup() {

    createCanvas(windowWidth, windowHeight-4);

    for (let i = 0; i < 10; i++) {
        world.cars.push(new Car());
    }
    for (const car of world.cars) {
        car.randomizePos();
    }

}

function draw() {

    background(200,200,200);

    if (world.showTrails) {
        for (const car of world.cars) {
            car.drawTrail();
        }
    }

    for (const car of world.cars) {

        handleKeyIsDown(car);

        car.runDemo(world.demo);
        car.update();
        car.show();

        if (!world.demo) {
            break;
        }

    }

}