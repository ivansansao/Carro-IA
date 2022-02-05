class Monster {	
	constructor(a,b,  c,d, resetEm) {
		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.r = 100;
		this.pos = null;
		this.dir = null;
		this.count = null;
		this.resetEm = resetEm;
		this.resetPos();
		this.ativo = true;
	}
	resetPos() {
		this.pos = createVector(this.a, this.b);
		this.dir = createVector(this.c, this.d);
		this.count = 0;
	
	}
	update() {

		if (!this.ativo) {
			return;
		}
		this.pos.add(this.dir)

		if (this.count > this.resetEm ) {
			this.resetPos();
		}
		this.count++;
	}
	show() {
		if (!this.ativo) {
			return;
		}

		stroke(255,255,0);
		strokeWeight(2);
		noFill();
		circle(this.pos.x, this.pos.y, this.r);
		strokeWeight(1);
		// text(`${this.pos.x} ${this.pos.y} ${this.count}`,this.pos.x, this.pos.y,);

	}
	collide(car) {

		const hit = collideCircleCircle(car.pos.x, car.pos.y,20, this.pos.x, this.pos.y, this.r);
		if (hit) {
			car.aposentar();
		}

	} 
}