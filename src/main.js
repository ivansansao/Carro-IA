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

let crc32=function(r){for(var a,o=[],c=0;c<256;c++){a=c;for(var f=0;f<8;f++)a=1&a?3988292384^a>>>1:a>>>1;o[c]=a}for(var n=-1,t=0;t<r.length;t++)n=n>>>8^o[255&(n^r.charCodeAt(t))];return(-1^n)>>>0};
let pesosForcados = undefined;
let maxCar = 999;
let genetic = null;
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
let showCarsDetais = true;
let showRanhuras = false;
let record = 0;
let carregarCarroSalvo = true;
let salvarMelhorCarro = true;
let timer = 0;
let timerOn = true;
let showBatidos = false;
let melhor = null;
let collideCars = false;
let showMousePoint = false;
let elitism = true;
let running = true;
let showInfoCar = false;
let showFlag = false;
let luzes = true;

function setup() {

    //   let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    //   canvas.parent('canvas-holder');
    //   noStroke();

    createCanvas(windowWidth, windowHeight - 4);
    tf.setBackend('cpu');

    foo = new p5.Speech();
    foo.setVoice('Google português do Brasil');

    genetic = new Genetic();

    pista = new Pista();
    // monster = new Monster(1561, 120, -0.7,0,260);
    // monster2 = new Monster(1080, 18, 0.2, 0.1,2700);

    for (let i = 0; i < 8; i++) {
        walls.push(new Wall());
    }

    // firstGeneration();
    genetic.nextGeneration();

    clear()

}

function draw() {

    background(pista.backcolor);
    handleKeyIsDown();

    if (timerOn) {
        timer++;
    }

    if (showBackground) {
        imageMode(CORNER);
        if (pista.spritesheet) {
            image(pista.spritesheet, 0, 0);
        }
    }

    pista.show();

    const wallsAndCars = [...pista.walls];

    if (collideCars) {

        for (const car of cars) {

            if (!car.batido && abs(car.km) > 100) {

                const ptd = p5.Vector.fromAngle(car.heading + 90).mult(10).add(car.pos);
                const pte = p5.Vector.fromAngle(car.heading - 90).mult(10).add(car.pos);
                wallsAndCars.push({ a: ptd, b: pte, id: car.id });


                const pdd = p5.Vector.fromAngle(car.heading + 0.25).mult(34).add(car.pos);
                const pde = p5.Vector.fromAngle(car.heading - 0.25).mult(34).add(car.pos);
                wallsAndCars.push({ a: pdd, b: pde, id: car.id });

                wallsAndCars.push({ a: ptd, b: pdd, id: car.id });
                wallsAndCars.push({ a: pte, b: pde, id: car.id });

            }
        }
    }

    for (const car of cars) {

        if (!car.batido) {

            const carInputs = [];

            car.update();
            car.look(wallsAndCars);

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
            car.verificaColisaoRanhura(pista.ranhuras);
            car.show();

            if (vivos == 1) {
                if (!car.batido) {
                    if (car.marca == 'c') {
                        if (car.km > 300) {
                            car.aposentar();
                        }
                    }
                }
            }

            pista.monstersCollide(car);

        } else if (showBatidos) {
            car.show();
        }

    }

    pista.monstersUpdate();
    pista.monstersShow();

    if (vivos <= maxCar) {

        if (vivos < 10 || getFrameRate() > 40) {
            
            addMoreCar();
            
        }
    }

    if (timer > pista.pistaTimeOut) {
        timer = 0;
        eliminarTodosCars();
    }

    if (vivos == 0) {
        timer = 0;

        genetic.nextGeneration();

    }

    if (timer % 100 == 0) {
        genetic.setFlag();
    }

    noStroke();
    fill(255);
    textSize(16);
    text(`Vivos: ${vivos}. FC: ${frameCount} Timer: ${timer} / ${pista.pistaTimeOut} Melhor: ${genetic.melhor.km} Pista: ${pista.selectedPista}`, 10, 20);

    ShowMousePoint()

}

function ShowMousePoint() {
    if (showMousePoint) {
        stroke(0)
        strokeWeight(1);
        fill(255);
        text(`(${mouseX},${mouseY})`, mouseX, mouseY);
    }
}

function addMoreCar() {
    const weights = genetic.melhor.ia.model.getWeights();
    const weightCopies = [];
    for (let i = 0; i < weights.length; i++) {
        weightCopies[i] = weights[i].clone();
    }

    let child = new Car('m2', true, true, false);
    // pista.anguloNascimento = radians(random(0, 360));
    child.ia.model.setWeights(weightCopies);
    child.mutate(Number(random(0.01,0.05).toFixed(15)));    
    cars.unshift(child);
    vivos++
}