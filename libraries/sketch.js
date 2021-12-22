var myCanvas = null;
var canvasParent = null;
var toolBox = null;

function setup(){
    myCanvas = createCanvas(1000,1000);
    canvasParent = select(" .canvas-wrapper");
    myCanvas.parent(canvasParent);
    background(150);
    
    toolBox = new ToolManager();
    toolBox.addTool(new DrawTool());

}

function draw(){

}