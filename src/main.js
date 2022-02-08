/* 
  https://github.com/davenewt/p5-asteroids/blob/master/ship.js

  Colisão Line Line: https://editor.p5js.org/simontiger/sketches/S1kfupErZ

  Collide2D Methods: https://github.com/bmoren/p5.collide2D

  // To show some demo.
    car.update();
    cars.demo();
    car.show();   

    https://www.base64-image.de/

    [.WebGL-0x337c0274e300] GL_CONTEXT_LOST_KHR: Context has been lost.
    index.html:1 WebGL: CONTEXT_LOST_WEBGL: loseContext: context lost

    Rode um servidor facilmente com: python3 -m http.server
*/

let quantidade = 0;
let vivos = 0;
let runDemo = false;
let cars = [];
let walls = [];
let ray;
let pista;
let colocacao = [];
let evolucao = [];
let nGeracao = 0;
let foo;
let showBackground = true;
let showWalls = false;
let record = 0;
let carregarCarroSalvo = true;
let salvarMelhorCarro = true;

function setup() {

//   let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
//   canvas.parent('canvas-holder');
//   noStroke();

    createCanvas(windowWidth, windowHeight - 4);
    tf.setBackend('cpu');
    
    foo = new p5.Speech();
    foo.setVoice('Google português do Brasil');
    
    pista = new Pista();
    // monster = new Monster(1561, 120, -0.7,0,260);
    // monster2 = new Monster(1080, 18, 0.2, 0.1,2700);
    
    for (let i = 0; i < 8; i++) {
        walls.push(new Wall());
    }
    
    // firstGeneration();
    nextGeneration();

    clear()
    
}
// function preload() {
//     this.choicePista();
// }

function draw() {

    background(68, 170, 0);
    handleKeyIsDown();

    if (showBackground) {
        image(pista.spritesheet, 0, 0);
    }

    pista.show();

    for (const car of cars) {

        if (!car.batido) {
            
            const carInputs = [];
            
            car.update();
            car.look(pista.walls);
            
            // console.log(car.lastMarcha);
            
            carInputs.push(car.lastMarcha);
            carInputs.push(car.rays[0].savedDistance);
            carInputs.push(car.rays[1].savedDistance);
            carInputs.push(car.rays[2].savedDistance);
            carInputs.push(car.rays[3].savedDistance);
            carInputs.push(car.rays[4].savedDistance);
            carInputs.push(car.rays[5].savedDistance);
            carInputs.push(car.rays[6].savedDistance);
            carInputs.push(car.rays[7].savedDistance);
            carInputs.push(car.rays[8].savedDistance);
            carInputs.push(car.rays[9].savedDistance);
            carInputs.push(car.rays[10].savedDistance);
            carInputs.push(car.rays[11].savedDistance);
            carInputs.push(car.rays[12].savedDistance);
            carInputs.push(car.rays[13].savedDistance);
            carInputs.push(car.rays[14].savedDistance);
            carInputs.push(car.rays[15].savedDistance);
            carInputs.push(car.rays[16].savedDistance);
            carInputs.push(car.rays[17].savedDistance);
            carInputs.push(car.rays[18].savedDistance);
            carInputs.push(car.rays[19].savedDistance);
            
            car.raciocinar(carInputs);
            car.demo(runDemo);
            if (pista.selectedPista == 2) {
                car.verificaColisaoRanhura(pista.ranhuras);
            }
            car.show();

            // matarAtrasados();

            if (vivos == 1) {
                if (!car.batido) {
                    if (car.marca == 'c') {                        
                        car.aposentar();                      
                    }
                }
            }

            pista.monstersCollide(car);

            // monster.collide(car);
            // monster2.collide(car);
            
        }

    }

    pista.monstersUpdate();
    pista.monstersShow();

    // monster.update();
    // monster.show();
    // monster2.update();
    // monster2.show();

    if (vivos == 0) {

        // try {
        //     Trava o programa!!! Aff
        //     tf.dispose();
        //     tf.disposeVariables();
        // } catch (err) {
        //     console.log(err);
        // }

        nextGeneration();

    }
    noStroke();
    fill(255);
    textSize(10);
    text(`Vivos: ${vivos}. FC: ${frameCount} `, 100, 100);



}
