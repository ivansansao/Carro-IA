// As funções keyPressed e keyIsDown abaixo pertencem ao P5.js!

function keyPressed() {

    if (key == 'p') {
        console.log('Parei! Clique para continuar!');
        noLoop();
    } else if (key == 'l') { // Mostrar sensores
        showWalls = !showWalls;
    } else if (key == 'b') { // Mostrar sensores
        for (const monster of pista.monsters) {
            monster.ativo = !monster.ativo;
        }
    } else if (key == 's') { // Mostrar sensores
        for (const car of cars) {
            car.showRays = !car.showRays;
        }
    } else if (key == 'm') { // Matar todos
        eliminarTodosCars();
    } else if (key == 'g') { // Show Background 
        showBackground = !showBackground;
    } else if (key == 'c') { // Change pista.        
        pista.togglePista();
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
