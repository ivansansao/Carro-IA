
function keyPressed() {

    if (key == 'r') {
        lastPoint = [];
        console.log('ÚLTIMO PONTO ZERADO!!');
    }
    if (key == 's') {

        console.clear();
        console.log(walls);

    }
    if (key == 'd') {

        lastPoint = [];
        lastPoint.push(Number(walls[walls.length-1].a));
        lastPoint.push(Number(walls[walls.length-1].b));
        console.log(lastPoint);
        walls.pop();

    }
}
function mouseReleased() {

    if (lastPoint.length > 0) {

        console.log(lastPoint);

        const newPoint = { a: lastPoint[0].toFixed(0), b: lastPoint[1].toFixed(0), c: mouseX.toFixed(0), d: mouseY.toFixed(0) };

        walls.push(newPoint);

        console.log(newPoint);

        lastPoint = [];
    } else {
        console.log('Ok, agora clica em outro lugar para começar!');
    }

    lastPoint.push(mouseX);
    lastPoint.push(mouseY);
}

function preload() {

    spritesheet = getSpriteFundo();
}

let lastPoint = [];

const walls = [];
function setup() {

    createCanvas(windowWidth * 0.98, windowHeight * 0.98);
    showAtalhos();

}

function draw() {

    background(255);
    image(spritesheet, 0, 0);

    for (const wall of walls) {
        line(wall.a, wall.b, wall.c, wall.d);
    }


}


function start() {
}

function showAtalhos() {
    console.log('r - Reseta o último ponto\nd- Deleta a última linha\ns- Mostra os pontos no console')
}