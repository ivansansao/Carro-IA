

function start() {

    background(255);   
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