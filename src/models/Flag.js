class Flag {
    
    constructor() {
        this.pos = createVector();
        this.visible = false;
        this.text = '';
    }
    setPos(x, y) {
        this.pos.x = x;
        this.pos.y = y;
    }
    setVisible(visible) {
        this.visible = visible;
    } 
    setText(text) {
        this.text = text;
    }
    update() {

    }
    show() {

        if (!showFlag) {
            return;
        }

        if (this.visible) {
            const x = this.pos.x;
            const y = this.pos.y;

            textSize(14);            
            strokeWeight(2);
            stroke(255);
            fill(0);
            text(this.text,x+12,y-30+5)    
                        
            strokeWeight(2);
            stroke(255,0,0);
            line(x,y,x,y-30);

            strokeWeight(5);
            stroke(200,80,100);
            fill(255);
            circle(x,y-30,10);

        }

    }

}
