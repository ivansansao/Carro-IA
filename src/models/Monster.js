class Monster {	
	constructor(a,b,  c,d, resetEm, r = 100, useMouse = false, stop = false) {
		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.r = r;
		this.pos = null;
		this.dir = null;
		this.count = null;
		this.resetEm = resetEm;
		this.ativo = true;
		this.useMouse = useMouse;
		this.stop = stop;
		this.resetPos();
	}
	resetPos() {
		this.pos = createVector(this.a, this.b);
		this.dir = createVector(this.c, this.d);
		this.count = 0;
		if (this.stop) {
			this.ativo = true;
		}
	
	}
	update() {

		if (!this.ativo) {
			return;
		}

		if (this.useMouse) {
			this.pos.x = mouseX;
			this.pos.y = mouseY;
		} else {
			this.pos.add(this.dir)
	
			if (this.count > this.resetEm ) {
				if (this.stop) {
					this.ativo = false;
				} else {
					this.resetPos();
				}
			}
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

		if (!this.ativo) {
			return;
		}

		const hit = collideCircleCircle(car.pos.x, car.pos.y,20, this.pos.x, this.pos.y, this.r);
		if (hit) {
			car.aposentar();
		}

	} 
}