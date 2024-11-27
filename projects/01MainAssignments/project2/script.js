
let ball;
let paddlePlayer;
let paddleComputer;

function preload() { //ladet die Schriftart
  font = loadFont("/fonts/Arial-Rounded-Bold.otf");
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	background(0);
	textSize(50);
	textAlign(CENTER, CENTER);
	//fill


 //Start Button
	rectMode(CENTER);
	stroke(100);
	strokeWeight(3);
	fill(0,150,150);
	rect(width/2,height/2,200,100);

	//Text
text ("START",windowWidth/2,windowHeight/2);
text.Size
//grösse,Farbe
}

function  draw() {
  
function ball(){
strokeWeight(3);
fill(0,255,70);
circle(width/2,height/2,40);
}

fill(255);
noStroke();
rect(20,windowHeight/2,20,200);

//Paddle2
fill(255);
noStroke();
rect(windowWidth-20,windowHeight/2,20,200);

}

function keyPressed(){
	if (keyCode === 32){ 
	
	}
	}