class Wall {
    constructor() {
        this.a = createVector(random(width), random(height));
        this.b = createVector(random(width), random(height));
    }

    update() {

    }

    show() {
        stroke(200, 40, 100);
        line(this.a.x, this.a.y, this.b.x, this.b.y)
    }
}