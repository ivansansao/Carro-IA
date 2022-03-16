let showBackground = true;
let selectedTrack = 1;

function keyPressed() {

    if (key == 'c') {
        selectedTrack++;
        try {
            spritesheet = eval(`getSpriteFundo${selectedTrack}()`);
        } catch (e) {
            selectedTrack = 1;
            spritesheet = getSpriteFundo1();
        }
    }

    if (key == 'r') {
        lastPoint = [];
        console.log('ÚLTIMO PONTO ZERADO!!');
    }
    if (key == 's') {

        console.clear();
        console.log(walls);
        imprimePontos(walls);

    }
    if (key == 'b') {

        showBackground = !showBackground;

    }
    if (key == 'd') {

        lastPoint = [];
        lastPoint.push(Number(walls[walls.length - 1].a));
        lastPoint.push(Number(walls[walls.length - 1].b));
        console.log(lastPoint);
        walls.pop();

    }
}
function mouseReleased() {

    if (lastPoint.length > 0) {

        console.log(lastPoint);

        const newPoint = { a: lastPoint[0].toFixed(0), b: lastPoint[1].toFixed(0), c: mouseX.toFixed(0), d: mouseY.toFixed(0), m: 0, t: 0 };

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

    spritesheet = getSpriteFundo4();
}

let lastPoint = [];

const walls = [];
function setup() {

    createCanvas(windowWidth * 0.98, windowHeight * 0.98);
    showAtalhos();

}

function draw() {

    background(255);
    if (showBackground) {
        image(spritesheet, 0, 0);
    }

    let i = 0;
    for (const wall of walls) {
        if (i == 0) {
            stroke(0, 0, 255);
        } else {
            stroke(255, 0, 0);
        }
        line(wall.a, wall.b, wall.c, wall.d);
        i++;
    }

}

function start() {
}

function showAtalhos() {
    console.log('c - Troca a pista\nr - Reseta o último ponto\nd- Deleta a última linha\ns- Mostra os pontos no console')
}

function imprimePontos(pontos) {

    let textPontos = '';

    for (const p of pontos) {
        textPontos += `    points.push({ a: ${p.a}, b: ${p.b}, c: ${p.c}, d: ${p.d}, m: ${p.m}, t: ${p.t} });\n`;
    }

    console.log(textPontos);

}
