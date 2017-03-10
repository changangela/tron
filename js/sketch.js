var GRID_SIZE = 20;
var CANVAS_X = 1000;
var CANVAS_Y = 500;
var NUM_PLAYERS = 4;

var snakes = [];
var colors = ["red", "blue", "green", "orange"];

function randomPosition() {
    var x = floor(random(width / GRID_SIZE));
    var y = floor(random(height / GRID_SIZE));
    return createVector(x, y);
}

function setup() {
    createCanvas(CANVAS_X, CANVAS_Y);
    frameRate(9);

    for (var i = 0; i < NUM_PLAYERS; ++i) {
        snakes.push(new Snake(CANVAS_X / GRID_SIZE * (0.25 + i * 0.5 / (NUM_PLAYERS - 1)) - 1, CANVAS_Y / GRID_SIZE * 0.50 - 1, colors[i]))
    }

}

function draw() {
    background(150);

    for (var i  = 0; i < NUM_PLAYERS; ++i) {
        snakes[i].update();
        snakes[i].checkStatus();
        snakes[i].show();
    }
}

function keyPressed() {
    if (key === 'W') {
        snakes[0].face(0, -1);
    } else if (key === 'S') {
        snakes[0].face(0, 1);
    } else if (key === 'A') {
        snakes[0].face(-1, 0);
    } else if (key === 'D') {
        snakes[0].face(1, 0);
    }
    
    if (keyCode === UP_ARROW) {
        snakes[1].face(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        snakes[1].face(0, 1);
    } else if (keyCode === LEFT_ARROW) {
        snakes[1].face(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
        snakes[1].face(1, 0);
    }
}
