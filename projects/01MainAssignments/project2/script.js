let buttons = [];
let font;

const messages = ["Na los!", "Klick mich!", "Hier bin ich!", "Siehst du mich nicht?", "Zu langsam!","Ich schlafe gleich ein!","Schneller!"];

function preload() {
  font = loadFont("/fonts/AmericanTypewriter.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  createNewButton();
  textAlign(CENTER,CENTER);
}

function createNewButton() {
  let newButton = createButton(random(messages)); 
  newButton.size(random(100, 160), random(70, 100));
  newButton.position(random(width ), random(height));
  newButton.mouseOver(() => moveAndSpawn(newButton));
  newButton.style('border', 'none');
  newButton.style('border-radius', '20px');
  newButton.style('background-color', 'white');
  newButton.style('font-size', '18px');
  buttons.push(newButton);
}

function moveAndSpawn(button) {
  button.position(random(width), random(height ));
  createNewButton();
}

function keyPressed() {
  while (buttons.length > 1) {
    let removedButton = buttons.pop();
    removedButton.remove();
  }
}

function draw() {
  background(0);
  fill(255);
  textFont(font);
  textSize(100);
  text("Klicke den Button!", width/2, height/2);
  //text("Klicke den Button");
}