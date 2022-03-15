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

function showRanhurasNormalized() {
    const pontos = pista.ranhuras;

    // console.table(pontos);

    // Normaliza.

    for (let p of pontos) {
        if (abs(p.a - p.c) < 20) {
            p.c = p.a;
        }
        if (abs(p.b - p.d) < 20) {
            p.d = p.b;
        }
    }


    let textPontos = '';

    for (const p of pontos) {
        textPontos += `    points.push({ a: ${p.a}, b: ${p.b}, c: ${p.c}, d: ${p.d}, m: ${p.m}, t: ${p.t} });\n`;
    }

    // console.table(pontos);

    console.log(textPontos);

}

function myRelu(v) {
    if (v > 0) {
        return 1
    }
    return 0;
}
