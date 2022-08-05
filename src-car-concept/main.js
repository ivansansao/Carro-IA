let world = new World();

function handleKeyIsDown(car) {

    if (keyIsDown(UP_ARROW)) {
        car.speedUp();
    } else if (keyIsDown(DOWN_ARROW)) {
        car.break();
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


}

function keyPressed() {


}
function setup() {

    createCanvas(windowWidth, windowHeight-4);

    for (let i = 0; i < 10; i++) {
        world.cars.push(new Car());
    }

}

function draw() {

    background(200,200,200,255);

    for (const car of world.cars) {

        handleKeyIsDown(car);
        car.demo(true);
        car.update();
        car.show();

    }

}