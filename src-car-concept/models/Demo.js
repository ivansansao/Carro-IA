class Demo {

    constructor() {
        this.gear = 1; // -1 Reverse, 1 Dinamic
        this.brake = false;
        this.speedUp = false;
        this.freeSpeedUp = false;
        this.side = '';
    }

    think() {

        let rand;

        rand = Number(random(0, 2).toFixed(0));
        if (rand == 0) {
            this.gear = -1;
        } else {
            this.gear = 1;
        }

        rand = Number(random(0, 4).toFixed(0))
        if (rand == 0) {
            this.brake = true;
        } else {
            this.brake = false;
        }

        rand = Number(random(0, 1).toFixed(0))
        if (rand == 0) {
            this.speedUp = false;
        } else {
            this.speedUp = true;
        }

        rand = Number(random(0, 1).toFixed(0))
        if (rand == 0) {
            this.freeSpeedUp = false;
        } else {
            this.freeSpeedUp = true;
        }

        rand = Number(random(0, 2).toFixed(0))
        if (rand == 0) {
            this.side = ''
        } else if (rand == 1) {
            this.side = 'r'
        } else if (rand == 2) {
            this.side = 'l'
        }
    }

}
