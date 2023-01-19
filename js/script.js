// co-ordinates
let direction = { x: 0, y: 0 };

// game sounds
const bgm = new Audio("sounds/bgm.mp3");
const foodSound = new Audio("sounds/food.mp3");
const moveSound = new Audio("sounds/move.mp3");
const gameOverSound = new Audio("sounds/gameover.mp3");

// game vars
let speed = 15;
// prev render of the animaiton or frame
let prevRenderTime = 0;
// arr of snake co-ordinates
let snakeArr = [{ x: 13, y: 13 }];

// main
function main(currentTime) {
    // game loop
    window.requestAnimationFrame(main); //recursive such that the window gets reloaded in infinite loop

    // controlling fps by less than 2 per second
    if ((currentTime - prevRenderTime) / 1000 < 2) {
        return;
    }

    prevRenderTime = currentTime;
    // gameEngine();

    console.log(currentTime);
}

function gameEngine() {
    // updating snake variable
    // render the snake and food
}

// window.requestAnimationFrame(main)
