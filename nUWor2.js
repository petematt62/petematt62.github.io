/**
 * Created by Matt
 * Started 6/14/2014
 * Continued 3/22/2015
 */

//globals
var squareSize = 40;
var circleSize = 40;
var canvas;
var context;
var w;
var h;
var x;
var y;
var demoOn = false;


//Starting the window load stuff
window.onload = function(){

    var button = document.getElementById("diceButton");
    button.onclick = diceForOperationHandler;

     var button = document.getElementById("intButton");
    button.onclick = showAllIntegersHandler;

    var button = document.getElementById("demoButton");
    button.onclick = demoHandler;


    //extras  initial view of the game.
        // note that "var" is not needed, as it will reset the variables to locals here

    canvas = document.getElementById("twoCanvas");
    context = canvas.getContext("2d");
    w = canvas.width * (175/600);  //175
    h = canvas.height * (75/400);  //75
    x = Math.floor(canvas.width / 2);  //300
    y = Math.floor(canvas.height / 2);  //200

  //  drawPositiveIntegerRegion(context,w,h,x,y);

    var container = document.querySelector("#twoCanvas");
    container.addEventListener("click", getClickPosition, false);

    //allows for multiple canvas objects
    // initialize the two canvases
   var arrayOfCanvasElements = document.getElementsByTagName("canvas");
    for (var i = 0; i < arrayOfCanvasElements.length; i++) {
        var aCanvas = arrayOfCanvasElements[i];
        var aContext = aCanvas.getContext("2d");
        drawPositiveIntegerRegion(aContext,w,h,x,y);
        if (i == 0) {
         aContext.font = "bold 1em times new roman";
         aContext.fillText("Click Here",(x-w)+(x-w)/10,h+(x-w)/1.1);         
         aContext.fillText("Click Here",(x-w)+2.2*(x-w),h-0.3*(x-w));         
        }    
    }
};
// End of the window load function(s)

//Demo stuff
function demoHandler() {
    if (demoOn == false) {
        demoOn = true;
        demo();
    }else {
        demoOn = false;
        resetCanvas();
        drawPositiveIntegerRegion(context,w,h,x,y);
    }
}
    
    function demo() { 
        canvas = document.getElementById("nextCanvas");
        context = canvas.getContext("2d");
        window.setTimeout(drawAllIntegerRegion(context,w,h,x,y), 500);
        window.setTimeout(resetCanvas, 2000);
    }
    
    function resetCanvas(){
        canvas = document.getElementById("nextCanvas");
        context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
// end of the demo stuff    

// Use areas in the canvas as buttons
// here is where the game is selected and set up to play...................
function getClickPosition(e) {
    var playIt = null;
    var parentPosition = getPosition(e.currentTarget);
    var xPosition = e.clientX - parentPosition.x;
    var yPosition = e.clientY - parentPosition.y;
    console.log(xPosition, yPosition, x, y, x-w, y-h, w, h)
    playIt = isPointInsideRect(xPosition, yPosition,x-w,y-h,w,h);
    if(playIt != null){
        setUpGame(playIt);
    }
}

function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;
      
    while (element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return { x: xPosition, y: yPosition };
}

function isPointInsideRect(pointX,pointY,rectX,rectY,rectWidth,rectHeight){
    return  (rectX <= pointX) && (rectX + rectWidth >= pointX) &&
                 (rectY <= pointY) && (rectY + rectHeight >= pointY);
}
// there is a bug in here..it doesn't work in the top of the rectangle
// fix fix fix
// end of determining if the click is in the I+ or outside it
// this is jQuery
function setUpGame(logic){
    $('.arrows').remove(); //removes the elements from the DOM
    if (logic == true) {
        $('h1').text('One human player mode'); //changes text in the h1 element
        getOnePlayerName();
        console.log("what one") //logs to the console so I can see if it is selected
    }else{
        $('h1').text('Two human players mode');
        getTwoPlayersNames();
        console.log("what two")
    }
}
// need to implement..lets make players objects 
function getOnePlayerName(){
    g=true;
}
// need to implememnt..make an object called player
function getTwoPlayersNames(){
    g=true;
}


function showAllIntegersHandler() {
    drawAllIntegerRegion(context,w,h,x,y);
    drawPositiveIntegerRegion(context,w,h,x,y);
}


function diceForOperationHandler() {
    drawAllIntegerRegion(context,w,h,x,y);
    drawPositiveIntegerRegion(context,w,h,x,y);
    drawAllRationalRegion(context,w,h,x,y);
    drawPositiveRationalRegion(context,w,h,x,y);
    drawPositiveRealRegion(context,w,h,x,y);
    drawAllRealRegion(context,w,h,x,y);
}

function drawAllIntegerRegion(context,w,h,x,y) {
    // All Integer Number Region
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(x, 0);
    context.lineTo(x, h);
    context.lineTo(x-w, h);
    context.lineTo(x-w, y);
    context.lineTo(0, y);
    context.closePath();
    context.lineWidth = 5;
    context.stroke();
// The label inside
    context.fillStyle = "#3e606f";
    context.font = "bold 3em times new roman";
    context.textAlign = "left";
    context.fillText("I",x/4,y/4);
}

function drawPositiveIntegerRegion(context,w,h,x,y) {
// +I Number Region
    context.lineWidth = 1;
    context.strokeRect(x-w, h, w, y-h);
// The label inside
    context.fillStyle = "#3e606f";
    context.font = "bold 3em times new roman";
    context.textAlign = "left";
    context.fillText("+I",(x-w)+w/2,h+(x-w)/2);
}

function drawAllRationalRegion(context,w,h,x,y) {
    // All Rational Number Region
    context.beginPath();
    context.moveTo(2*x,0);
    context.lineTo(x,0);
    context.lineTo(x,h);
    context.lineTo(x+w,h);
    context.lineTo(x+w,y);
    context.lineTo(2*x,y);
    context.closePath();
    context.lineWidth=5;
    context.stroke();
// The label inside
    context.fillStyle = "#3e606f";
    context.font = "bold 3em times new roman";
    context.textAlign = "left";
    context.fillText("R",x+x*(3/4),y/4);
}

function drawPositiveRationalRegion(context,w,h,x,y) {
// +R Number Region
    context.lineWidth=1;
    context.strokeRect(x,h,w,y-h);
    // The label inside
    context.fillStyle = "#3e606f";
    context.font = "bold 3em times new roman";
    context.textAlign = "left";
    context.fillText("+R",x+w*(1/4),h+(y-h)/2);
}

function drawPositiveRealRegion(context,w,h,x,y) {
// +Real Number Region
    context.lineWidth = 1;
    context.strokeRect(x-w, y+1, 2*w, y-h);
    // The label inside
    context.fillStyle = "#3e606f";
    context.font = "bold 3em times new roman";
    context.textAlign = "left";
    context.fillText("+l",x-w+2*w*(1/4),y+(y-h)/2);
    context.fillText("R",x-w+2*w*(1/4)+36,y+(y-h)/2);
}

function drawAllRealRegion(context,w,h,x,y) {
// All Real Number Region
    context.beginPath();
    context.moveTo(x+w,y);
    context.lineTo(2*x,y);
    context.lineTo(2*x,2*y);
    context.lineTo(0,2*y);
    context.lineTo(0,y);
    context.lineTo(x-w,y);
    context.lineTo(x-w,2*y-h);
    context.lineTo(x+w,2*y-h);
    context.closePath();
    context.lineWidth=5;
    context.stroke();
    // The label inside
    context.fillStyle = "#3e606f";
    context.font = "bold 3em times new roman";
    context.textAlign = "left";
    context.fillText("l",(x-w)+2*w*(5/16),y+y*(7/8));
    context.fillText("R",(x-w)+2*w*(5/16)+9,y+y*(7/8));
}


