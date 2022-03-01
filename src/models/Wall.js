class Wall {
    constructor(a, b) {
        this.a = a || createVector(random(width), random(height));
        this.b = b || createVector(random(width), random(height));
        this.id = 0;
    }

    update() {

    }

    show() {
        stroke(200, 40, 100);
        strokeWeight(1);
        line(this.a.x, this.a.y, this.b.x, this.b.y)
    }
}