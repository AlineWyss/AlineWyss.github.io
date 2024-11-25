let font;
let points1 = [];//Punkte für message1
let points2 = [];//Punkte für message2
let message1 = "Interaction Design";
let message2 = "ZHDK";
let framerate = 10;

function preload() { //ladet die Schriftart
  font = loadFont("Arial Rounded Bold.ttf");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);

  textFont(font);
  textSize(600);

  points1 = font.textToPoints(message1, width/12, height / 2, 180, {
    sampleFactor: 0.2,
    simplifyThreshold: 0
	});
	
	points2 = font.textToPoints(message2, width/4, height / 4*3, 300, {
    sampleFactor: 0.2,
    simplifyThreshold: 0
  });
}

function draw() {
  background(0);
	
	
  for (let pt of points1) {
    let angle = atan2(mouseY - pt.y, mouseX - pt.x);
    pt.x += cos(angle) *3;
    pt.y += sin(angle) *2;
	
    fill(255, 255, 0);
    ellipse(pt.x, pt.y, 5, 5);
  }
for (let pt of points2) {
    let angle = atan2(mouseY - pt.y, mouseX - pt.x);
    pt.x += cos(angle) *1;
    pt.y += sin(angle) *2;
	
    fill(255,50,0);
    ellipse(pt.x, pt.y, 5, 5);
  }
}
function mousePressed() {
  resetPoints();
}

function resetPoints() {
  points1 = font.textToPoints(message1, width/12, height / 2, 180, {
    sampleFactor: 0.2,
    simplifyThreshold: 0
  });
points2 = font.textToPoints(message2, width/4, height / 4*3, 300, {
    sampleFactor: 0.2,
    simplifyThreshold: 0
  });
}

