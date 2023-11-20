let x = 100;
let y = 200;
let width = 50;
let fillColor = "white";

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function setup() {
    createCanvas(canvasWidth, canvasHeight);

     fill(fillColor);
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
}

function moveController(ev) {
    console.log(ev.code);}
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down

    // redraw circle:
console.log("ArrowUp")
    if (ev.code === "ArrowUp") {
        //Do something:
        y = y - 5;
    }
    else if (ev.code === "ArrowDown") {
        //Do something:
        y = y + 5;
    }

    else if (ev.code === "ArrowRight") {
        //Do something:
        x = x + 5;
    }

    else if (ev.code === "ArrowLeft") {
        //Do something:
        x = x - 5;
    }
    else if (ev.code === "Escape") {
        //Do something:
        width = width - 5;
    }

    else if (ev.code === "Space") {
        //Do something:
        width = width + 5;
    }

    else if  (ev.code==="KeyR"){
        //Do something:
        fillColor="red";
       }

       else if  (ev.code==="KeyB"){
        //Do something:
        fillColor="blue";
       }