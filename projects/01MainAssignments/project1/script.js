let font;
let points1 = []; 
let points2 = []; 
let originalPoints1 = [];
let originalPoints2 = [];
let message1 = "Interaction Design";
let message2 = "ZHDK";
let isMousePressed = false;

function preload() {
  font = loadFont("/fonts/Arial-Rounded-Bold.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  textFont(font);
  textSize(600);

  //message1
  points1 = font.textToPoints(message1, width / 23, height / 2, 180, {
    sampleFactor: 0.2,
    simplifyThreshold: 0,
  });

  //message2
  points2 = font.textToPoints(message2, width / 4, height / 4 * 3, 300, {
    sampleFactor: 0.2,
    simplifyThreshold: 0,
  });

  originalPoints1 = points1.map(pt => ({ ...pt }));
  originalPoints2 = points2.map(pt => ({ ...pt }));
}

function draw() {
  background(0);

  // message1
  for (let i = 0; i < points1.length; i++) {
    let pt = points1[i];

    if (isMousePressed) {
      pt.x += random(-20,20);
      pt.y += random(-20,20);
    } else {
      pt.x += (originalPoints1[i].x - pt.x) * 0.1;
      pt.y += (originalPoints1[i].y - pt.y) * 0.1;
    }

    let colorShift = isMousePressed ? [random(100, 255), random( 255), 0] : [255, 255, 0];
    fill(...colorShift);
    ellipse(pt.x, pt.y, 10, 10);
  }

  // message2
  for (let i = 0; i < points2.length; i++) {
    let pt = points2[i];

    if (isMousePressed) {
      pt.x += random(-8, 8);
      pt.y += random(-8, 8);
    } else {
      pt.x += (originalPoints2[i].x - pt.x) * 0.1;
      pt.y += (originalPoints2[i].y - pt.y) * 0.1;
    }

    let colorShift = isMousePressed ? [random(255), 50, random( 255)] : [255, 0, 0];
    fill(...colorShift);
    ellipse(pt.x, pt.y, 20, 20);
  }
}

function mousePressed() {
  isMousePressed = true;
}

function mouseReleased() {
  isMousePressed = false;

}
