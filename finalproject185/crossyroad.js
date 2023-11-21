const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

// feel free to change these values as you like!
const c1 = {
    x: 100,
    y: 100,
    width: 200,
    speed: 5,
    color: 'red'
};

const c2 = {
    x: 1200,
    y: 500,
    width: 200,
    speed: -5,
    color: 'cyan'
};
const player={
    x:100, 
    y:200,
    width: 50,
    fillColor:"red"
};


// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


// animation loop:
function draw() {
    // clear the canvas:
    clear();
    if (c1.x > canvasWidth) {
        c1.x = 0;
    } else {
        c1.x += c1.speed;
    }

    if (c2.x < 0) {
        c2.x = canvasWidth;
    } else {
        c2.x += c2.speed;
    }

    // move the car:
    c1.x += c1.speed;
    c2.x += c2.speed;
    // redraw the car:
    let intersects=checkIntersection(c1,player);
    console.log(intersects)
    if(intersects){
        player.fillColor="hotpink";
    }
    else{
        player.fillColor="red";
    }
    drawCar(c1.x, c1.y, c1.width, c1.color);
    // drawCar(c2.x, c2.y, c2.width, c2.color);
    // draw the grid (optional -- feel free to remove this line):
   
    fill(player.fillColor);
    circle(player.x, player.y, player.width);
    drawGrid(canvasWidth, canvasHeight);

}


// this function's job is to draw a car based on the 
// parameters the user passes in (x, y, size, fillColor, and wheelColor)
function drawCar(x, y, size, fillColor, wheelColor = 'black') {
    strokeWeight(0);

    // body
    fill(fillColor);
    rect(x - size / 4, y - (size / 5 + size / 7), size / 2, size / 7); // top
    rect(x - size / 2, y - size / 5, size, size / 5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}





function moveController(ev) {
    console.log(ev.code);

    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down

    // redraw circle:
    console.log("ArrowUp")
    if (ev.code === "ArrowUp") {
        //Do something:
        player.y = player.y - 5;
    }
    else if (ev.code === "ArrowDown") {
        //Do something:
        player.y = player.y + 5;
    }

    else if (ev.code === "ArrowRight") {
        //Do something:
        player.x = player.x + 5;
    }

    else if (ev.code === "ArrowLeft") {
        //Do something:
        player.x = player.x - 5;
    }
    else if (ev.code === "Escape") {
        //Do something:
        player.width = player.width - 5;
    }

    else if (ev.code === "Space") {
        //Do something:
        player.width = player.width + 5;
    }

    else if (ev.code === "KeyR") {
        //Do something:
        player.fillColor = "red";
    }

    else if (ev.code === "KeyB") {
        //Do something:
        player.fillColor = "blue";
    }
}
document.addEventListener("keydown",moveController);


function checkIntersection(circle1, circle2) {
    const distance = dist(circle1.x, circle1.y, circle2.x, circle2.y);
    if (distance <= (circle1.width/2 + circle2.width/2)) {
        return true;
    } else {
        return false;
    }
}