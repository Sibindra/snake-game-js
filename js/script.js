// co-ordinates
let direction = { x: 0, y: 0 };

// element
const container=document.querySelector('.container');
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
// arr of snake co-ordinates
let snakeArr = [{ x: 13, y: 13 }];

// main
function main(currentTime) {
    // game loop
    window.requestAnimationFrame(main); //recursive such that the window gets reloaded in infinite loop

    // controlling fps by less than 2 per second
    if ((currentTime - prevRenderTime) / 1000 < 1/speed) {
        return;
    }

    prevRenderTime = currentTime;
    gameEngine();

    console.log(currentTime);
}

function gameEngine() {
    // updating snake variable

    container.innnerHTML = "";

    snakeArr.forEach((e, index) => {
        // create a new element 
        newSnakeElement = document.createElement('div');
        // set it's size
        newSnakeElement.style.gridRowStart = e.y;
        newSnakeElement.style.gridColumnStart = e.x;


        // set a classname for new element
        newSnakeElement.classList.add('food')

        // append as a child of container element
        container.appendChild(newSnakeElement);
        // console.log(newSnakeElement);
    });

    // render the snake and food
}

// window.requestAnimationFrame(main)
