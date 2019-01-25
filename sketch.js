var pencilPoints = [];
var pencilPointsL = 0;

function setup() {
    createCanvas(1500, 900);
    background(255);
}

function draw() {
    background(255);
    if (mouseIsPressed) {
        addPencilPoint();
    }
    color(0);
    drawWithPencil();
}

function drawWithPencil() {
    noFill();
    beginShape();
    for (let pPoint of pencilPoints) {
        vertex(pPoint.x, pPoint.y);
    }
    endShape();
}

function addPencilPoint() {
    pencilPoints[pencilPointsL++] = { 'x': mouseX, 'y': mouseY };
}