// co-ordinates of input direction
// snake veleocity
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
let speed = 5;
// prev render of the animaiton or frame
let prevRenderTime = 0;

// snake is an array of grids
let snakeArr = [{ x: 13, y: 15 }];
// food is a single element in a grid
let food = { x: 3, y: 10 };

let score = 0;

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

// COLLIDE

function isCollide(snake) {
    // collide with snake
    for (let i = 1; i < snakeArr.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }
    // collide with container wall
    if (
        snakeArr[0].x >= 18 ||
        (snakeArr[0].x <= 0 && snakeArr[0].y >= 18) ||
        snakeArr[0].y <= 0
    ) {
        return true;
    }

    return false;
}

function gameEngine() {
    // if snake colllides
    if (isCollide(snakeArr)) {
        gameOverSound.play();
        bgm.pause();

        direction = { x: 0, y: 0 };

        alert("Game Over! Press any key to try again");

        snakeArr = [{ x: 13, y: 15 }];

        bgm.play();
        score = 0;
    }

    // EAT FOOD
    // increment the score after head's coordinates match food's coordinate and reset the food
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        foodSound.play();
        score += 1;
        snakeArr.unshift({
            x: snakeArr[0].x + direction.x,
            y: snakeArr[0].y + direction.y,
        });

        let a = 2;
        let b = 16;

        // randomly generate new coordinate for food
        food = {
            x: Math.round(a + (b - a) * Math.random()),
            y: Math.round(a + (b - a) * Math.random()),
        };
    }

    // move the snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };
    }

    snakeArr[0].x += direction.x;
    snakeArr[0].y += direction.y;

    // updating snake variable
    container.innerHTML = "";

    // render snake
    snakeArr.forEach((e, index) => {
        // create a new element
        newSnakeElement = document.createElement("div");
        // set it's size
        newSnakeElement.style.gridRowStart = e.y;
        newSnakeElement.style.gridColumnStart = e.x;

        // set a classname for new element
        if (index === 0) {
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
    newFoodElement.style.gridColumnStart = food.x;
    newFoodElement.classList.add("food");
    container.appendChild(newFoodElement);
}

// FIXME:
window.requestAnimationFrame(main);

// key event handlers
window.addEventListener("keydown", (e) => {
    // start the game on any key press
    direction = { x: 0, y: 1 };
    moveSound.play();

    // key switch case
    switch (e.key) {
        case "ArrowUp":
            // console.log("up");

            direction.x = 0;
            direction.y = -1;
            break;

        case "ArrowDown":
            // console.log("down");

            direction.x = 0;
            direction.y = 1;
            break;

        case "ArrowLeft":
            // console.log("left");

            direction.x = -1;
            direction.y = 0;

            break;

        case "ArrowRight":
            // console.log("right");

            direction.x = 1;
            direction.y = 0;
            break;

        default:
            break;
    }
});
