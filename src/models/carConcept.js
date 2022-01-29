/*
Esse arquivo não faz parte do projeto mas está aqui pois é um projeto base para saber como construir o carrinho
sem complicações no projeto maior.
*/


function mousePressed() {
}

function keyPressed() {
    if (keyCode == RIGHT_ARROW) {
        car.setRotation(0.1);
    } else if (keyCode == LEFT_ARROW) {
        car.setRotation(-0.1);
    } else if (keyCode == UP_ARROW) {
        car.boost();
    }
}

function keyReleased() {
    car.setRotation(0);
}


let car = null;
function setup() {
    createCanvas(windowWidth, windowHeight*0.99);
    car = new Car();
}
function draw() {

    background(0,200);

    car.update();
    car.turn();
    car.render();


}
// https://github.com/davenewt/p5-asteroids/blob/master/ship.js
class Car {

    constructor() {
        this.pos = createVector(width / 2, height / 2);
        this.heading = 0;
        this.headingV = p5.Vector.fromAngle(radians(this.heading));
        this.rotation = 0;
        this.vel = createVector(0,0);
    }

    setRotation(a) {
        this.rotation = a;
    }

    boost() {
        var force = p5.Vector.fromAngle(this.heading);
        this.vel.add(force);
    }

    turn() {

        this.heading += this.rotation;
        this.headingV = p5.Vector.fromAngle(radians(this.heading));
        
    }
    update() {
       
        this.pos.add(this.vel);
        this.vel.mult(0.99); // Desacelera a cada update.
        noStroke();
        text(`${this.pos}`,50,50);
        
    }
    
    render() {
        
        strokeWeight(2);
        stroke(255);
        fill(0,200,0);
        push();
            translate(this.pos.x, this.pos.y);
            // line(-200,0,200,0);
            // line(0,-200,0,200);
            rotate(this.heading);
            rect(-20,-10,40,20);
            strokeWeight(8);
            point(20,0);
        pop();


    }

}