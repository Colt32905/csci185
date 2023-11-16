function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    let y=0;
    let w=50;
    let x=0;
    while (y<=600){
        console.log("y=", y, "y*2", 2*y, "x=", x);
        circle(x,200,w);
        x+=5;
        w+=5;
        y+=5;
    }

    

    drawGrid(canvasWidth, canvasHeight);
}
