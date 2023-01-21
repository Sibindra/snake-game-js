// co-ordinates
let direction = { x: 0, y: 0 };

// element
const container = document.querySelector(".container");
// console.log(container);

// game sounds
const bgm = new Audio("sounds/bgm.mp3");
const foodSound = new Audio("sounds/food.mp3");
const moveSound = new Audio("sounds/move.mp3");
const gameOverSound = new Audio("sounds/gameover.mp3");

// game vars
let speed = 15;
// prev render of the animaiton or frame
let prevRenderTime = 0;

// snake is an array of grids
let snakeArr = [{ x: 13, y: 13 }];
// food is a single element in a grid
let food = { x: 15, y: 3 };

// main
function main(currentTime) {
    // game loop
    window.requestAnimationFrame(main); //recursive such that the window gets reloaded in infinite loop

    // controlling fps by less than 2 per second
    if ((currentTime - prevRenderTime) / 1000 < 1 / speed) {
        return;
    }

    prevRenderTime = currentTime;
    gameEngine();

    // console.log(currentTime);
}

function gameEngine() {
    // updating snake variable

    container.innnerHTML = "";

    // render snake
    snakeArr.forEach((e, index) => {
        // create a new element
        newSnakeElement = document.createElement("div");
        // set it's size
        newSnakeElement.style.gridRowStart = e.y;
        newSnakeElement.style.gridColumnStart = e.x;

        // set a classname for new element
        if ((index = 0)) {
            newSnakeElement.classList.add("head");
        } else {
            newSnakeElement.classList.add("snake");
        }

        // append as a child of container element
        container.appendChild(newSnakeElement);
        // console.log(newSnakeElement);
    });

    // render food
    newFoodElement = document.createElement("div");
    newFoodElement.style.gridRowStart = food.y;
    newFoodElement.style.gridColumnStart = food.y;
    newFoodElement.classList.add("food");
    container.appendChild(newFoodElement);
}

window.requestAnimationFrame(main);

// key event handlers
window.addEventListener("keydown", (event) => {
    // start the game on any key press
    inputDirection = { x: 1, y: 0 };
    moveSound.play();

    // key switch case
    switch (event.key) {
        case "ArrowUp":
            console.log("up");

            inputDirection.x = 0;
            inputDirection.y = -1;
            break;

        case "ArrowDown":
            console.log("down");

            inputDirection.x = 0;
            inputDirection.y = 1;
            break;

        case "ArrowLeft":
            console.log("left");

            inputDirection.x = -1;
            inputDirection.y = 0;

            break;

        case "ArrowRight":
            console.log("right");

            inputDirection.x = 1;
            inputDirection.y = 0;
            break;

        default:
            break;
    }
});
