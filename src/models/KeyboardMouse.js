// As funções keyPressed e keyIsDown abaixo pertencem ao P5.js!

function keyPressed() {

    if (key == 'p') {
        console.log('Parei! Clique para continuar!');
        noLoop();
    } else if (key == 's') { // Mostrar sensores
        for (const car of cars) {
            car.showRays = !car.showRays;
        }
    } else if (key == 'm') { // Matar todos
        eliminarTodosCars();
    }
}

function handleKeyIsDown() {

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

    }
}

function mousePressed() {
    noLoop();
}

function mouseReleased() {
    loop();
}
