function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("blue");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

    // https://p5js.org/reference/#/p5/circle
    // fill("black");
    // circle(550, 100, 100);
    // fill('red');
    // circle(550, 100, 80);
    // fill('black');
    // circle(550, 100, 60);
    // fill('red');
    // circle(550, 100, 40);
    // fill('black');
    // circle(550, 100, 20);


    // https://p5js.org/reference/#/p5/rect
    // fill('hotpink')
    // rect(445, 20, 55, 70);

    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    // point(110, 20);

    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/ellipse
    // fill('red');
    // ellipse(100, 200, 60, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve


drawCreature(900,500,'teal' ,250);
drawCreature(100,500,'purple', 45);
drawCreature(300,500,'yellow', 50);
drawCreature(500,500,'navy', 34);
drawCreature(700,500,'orange', 200);

    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
    // fill('red');
    // rect(100,50,100,50);
    // fill('black');
    // circle(100,100,25);
    // circle(200,100,25);
    // rect(120,85,15,5);
    // rect(160,85,15,5);
    // fill('white');
    // rect(110,60,30,20);
}
    function drawCreature(x,y, color) {
       fill(color);
        circle(x,y,150); //base face shape
        fill('white')
        circle(x-20,y-20,40);
        circle(x+20,y-20,40);
        
        fill('black');
        circle(x-20,y-20,20); //left eye
        circle(x+20,y-20,20); //right eye
        
       
    }

    function drawCreature(x,y, size) {
        let size=100
        let eyeball=size / 7.5;
        circle(x,y,size);
        fill('white');
        circle(x-eyeball,y-eyeball,eyeball);
        circle(x+eyeball,y-eyeball,eyeball);
        fill('black');
        circle(x-eyeball,y-eyeball,eyeball);
        circle(x+eyeball,y-eyeball,eyeball);

    }

