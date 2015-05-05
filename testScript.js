/*
Author: Matt Peterson
Copyright: 2015
All rights reserved
*/

//globals;
var canvas;
var context;
var w;
var h;
var x;
var y;
var demoOn = false;
var isitFirst = true;
//var scaleFactor = 1.0;

window.onload = function(){

 handleResizeOnLoad();
 window.addEventListener("resize", handleResizeOnFly, false);
 
    var theOne = document.querySelector("#leftCanvas");
    theOne.addEventListener("click", handleClick, false);

};

function setCanvaswhxy() {
	w = canvas.width * (175/600);  //175 GLOABAL
    h = canvas.height * (75/400);  //75 GLOABAL
    x = Math.floor(canvas.width / 2);  //300 GLOBAL
    y = Math.floor(canvas.height / 2);  //200 GLOBAL
}

function getContext(whatcanvas){
    canvas = document.getElementById(whatcanvas);      //global scope
    context = canvas.getContext("2d");                 //global scope
}

function writeMessage3em(messagein,xin,hin) {
    context.font = "bold 3em times new roman";
    context.textAlign = "left";
    context.fillStyle = "#3e606f";
    context.fillText(messagein,xin,hin);         
}

function handleClick() {
 	// click on the left (player one) window to get a login screen
 	// needs more dev to add a text box overlaying right canvas for instructions
 	addElement1();
 	doResize(0.75);
}

function modDomOnePlayer(pickSide,theWords) { 
	// adds a thin column paragraph on the right side of the screen ONLY in the portrait,
	// smallest screen.  Use this as the show help option in this screen size.
var theLeftDiv = document.getElementById(pickSide);
var aHelpPara = document.createElement("p");
aHelpPara.setAttribute("id", "aHelpPara");
aHelpPara.setAttribute("class", "dynaHelpPara");
	var someNewContent = document.createTextNode(theWords); 
    aHelpPara.appendChild(someNewContent);
    theLeftDiv.appendChild(aHelpPara); //add the input to the newly created div. 
}

 function addElement1() { 

	var jjDiv = document.createElement("div");
    jjDiv.setAttribute("id", "aNewDiv");
    jjDiv.setAttribute("class", "dynadiv");

  
	var newF = document.createElement("form"); 
    newF.setAttribute("id", "anewForm");
    newF.setAttribute("class", "dynaform");


    var newI = document.createElement("Input"); 
    newI.setAttribute("value", "Enter User Name");
    newI.setAttribute("id", "anewInput");
    newI.setAttribute("class", "dynainput");
    jjDiv.appendChild(newI); //add the input to the newly created div. 

    newI = document.createElement("Input");
    newI.setAttribute("type", "Password"); 
    newI.setAttribute("value", "Enter Password");
    newI.setAttribute("id", "anewInput2");
    newI.setAttribute("class", "dynainput");
     jjDiv.appendChild(newI); //add the input to the newly created div. 

//........................................................................
// this div holds the select header and the select drop down

	var hDiv = document.createElement("div");
    hDiv.setAttribute("class", "dynadivmopa");

	var hhDiv = document.createElement("div");
    hhDiv.setAttribute("class", "dynadivmode");

	 var ssHead = document.createElement("h2");
	 ssHead.setAttribute("id", "aWonky");
     ssHead.setAttribute("class", "dynaheads");
     	ssHead.innerHTML = "Game Mode";
	
	var bbSelect = document.createElement("select");
 	bbSelect.setAttribute("id", "aNewSelect");
 	bbSelect.setAttribute("class", "dynaselect");
 	
 	var newO = document.createElement("option");
 	newO.setAttribute("value", "Just Starting");
 	newO.innerHTML = "Just Starting";
 	bbSelect.appendChild(newO);

 	newO = document.createElement("option");
 	newO.setAttribute("value", "Some SKill");
 	newO.innerHTML = "Some Skill";
 	bbSelect.appendChild(newO);

 	newO = document.createElement("option");
 	newO.setAttribute("value", "Usually Awesome");
 	newO.innerHTML = "Usually Awesome";
 	bbSelect.appendChild(newO);

	hhDiv.appendChild(ssHead); //add the text node to the newly created div. 
 	hhDiv.appendChild(bbSelect);
 		hDiv.appendChild(hhDiv);

//........................................................................

    var newp = document.createElement("p");
    newp.setAttribute("id", "anewPara");
    newp.setAttribute("class", "dynapara");
		newContent = document.createTextNode("Hi there and greetings!"); 
    newp.appendChild(newContent);
	 	hDiv.appendChild(newp);	
	jjDiv.appendChild(hDiv); //add the paragraph to the newly created div. 

//........................................................................

	var currentC = document.getElementById("dyna1"); 
	currentC.appendChild(jjDiv);	
}


function doResizeSimple(scaleFactor){	

	        // resize the canvas
	        canvas.width=scaleFactor*703;
	        canvas.height=scaleFactor*433;
    }


function doResize(scaleFactor){	

	        // save the canvas content as imageURL
	        var data=canvas.toDataURL();

	        // resize the canvas
	        canvas.width=scaleFactor*703;
	        canvas.height=scaleFactor*433;

	        // scale and redraw the canvas content
	        var img=new Image();
	        img.onload=function(){
	            context.drawImage(img,0,0,img.width,img.height,0,0,canvas.width,canvas.height);
	        }

	        img.src=data;
    }

    function handleResizeOnFly() {	

		var wWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

		if (wWidth <= 1110){
				getContext("leftCanvas");
				setCanvaswhxy();
				writeMessage3em("Please do not resize during game.",x/100,y/3);
			doResize(0.625);
			getContext("rightCanvas");
			doResizeSimple(0.625);
		} else if (wWidth > 1110 && wWidth <= 1480){
				getContext("leftCanvas");
				setCanvaswhxy();
				writeMessage3em("Please do not resize during game.",x/100,y/3);
			doResize(0.75);
			getContext("rightCanvas");
			doResizeSimple(0.75);
		} else if (wWidth > 1480){
				getContext("leftCanvas");
				setCanvaswhxy();
				writeMessage3em("Please do not resize during game.",x/100,y/3);
			doResize(1.0);
			getContext("rightCanvas");
			doResizeSimple(1.0);
		} else {
			getContext("leftCanvas");
    			x = Math.floor(canvas.width / 2); 
			    y = Math.floor(canvas.height / 2);  
    			writeMessage3em("ERROR: Please Refresh",x/3,y/3);
		}		
	}

function handleResizeOnLoad() {	

		var wWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

		if (wWidth <= 1110){
			getContext("leftCanvas");
			doResizeSimple(0.625);
			getContext("rightCanvas");
			doResizeSimple(0.625);
			 var theSide = "theleft";
			 var helpMessage = "Dynamically created help message."
			modDomOnePlayer(theSide, helpMessage);
			 var theSide = "theright";
			 var helpMessage = "Another created help message."
			modDomOnePlayer(theSide, helpMessage);
				// Here it is used on the resize, but this shold be used when a player clicks "show help"
		} else if (wWidth > 1110 && wWidth <= 1480){
			getContext("leftCanvas");
			doResizeSimple(0.75);
			getContext("rightCanvas");
			doResizeSimple(0.75);
		} else if (wWidth > 1480){
			getContext("leftCanvas");
			doResizeSimple(1.0);
			getContext("rightCanvas");
			doResizeSimple(1.0);
		} else {
			getContext("leftCanvas");
    			x = Math.floor(canvas.width / 2); 
			    y = Math.floor(canvas.height / 2);  
    			writeMessage3em("ERROR: Please Refresh",x/3,y/3);
		}
	}