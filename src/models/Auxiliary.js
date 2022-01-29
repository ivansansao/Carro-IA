

function start() {

    background(68, 170, 0);
    handleKeyIsDown();

}

function linha() {
    stroke(0);
    line(-width, 0, width, 0);
    line(0, -height, 0, height);
}

function mx() {
    return mouseX.toFixed(0)
};
function my() {
    return mouseY.toFixed(0)
};

function lineX(a,b,c,d, strokeColor, dotted = false) {

    if (dotted) drawingContext.setLineDash([5, 5]);

    stroke(strokeColor);
    line(a,b,c,d);

    if (dotted) drawingContext.setLineDash([]);
}