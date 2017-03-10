var GRID_SIZE = 20;
var CANVAS_X = 1000;
var CANVAS_Y = 500;
var NUM_PLAYERS = 2;
var FRAME_RATE = 9;

var snakes = [];
var colors = ["red", "blue", "green", "orange"];
var board = [];
var gameOver = false;

function setup() {
    createCanvas(CANVAS_X, CANVAS_Y);
    frameRate(FRAME_RATE);

    for (var i = 0; i < NUM_PLAYERS; ++i) {
        snakes.push(new Snake(CANVAS_X / GRID_SIZE * (0.25 + i * 0.5 / (NUM_PLAYERS - 1)) - 1, CANVAS_Y / GRID_SIZE * 0.50 - 1, colors[i]));
        board.push(snakes[i].position);
    }

}

function draw() {
    background(150);

    var deadCount = 0;
    for (var i  = 0; i < NUM_PLAYERS; ++i) {
        snakes[i].update(board);
        snakes[i].checkStatus(board);
        snakes[i].show();
        board.push(snakes[i].position);
        if (snakes[i].dead) {
            deadCount++;
        }
    }

    if (deadCount === NUM_PLAYERS - 1) {
        gameOver = true;
        fill(255);

        for (var i = 0; i < NUM_PLAYERS; ++i) {
            if (!snakes[i].dead) {
                text("Player " + (i + 1) + " wins! Refresh (f5) to play again.", 20, 20);
            }                
        }

        exit();
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
