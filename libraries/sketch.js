var myCanvas = null;
var canvasParent = null;


function setup(){
    myCanvas = createCanvas(1000,1000);
    canvasParent = select(" .canvas-wrapper");
    myCanvas.parent(canvasParent);
    background(150);

}

function draw(){

}