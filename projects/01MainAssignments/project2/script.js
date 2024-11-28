let buttons = [];
let font;

const messages = ["Na los!", "Klick mich!", "Hier bin ich!", "Siehst du mich nicht?", "Zu langsam!","Ich schlafe gleich ein!","Schneller!"];

function preload() {
  font = loadFont("/fonts/AmericanTypewriter.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  createNewButton();
}

function createNewButton() {
  let newButton = createButton(random(messages)); 
  newButton.size(random(100, 160), random(70, 100));
  newButton.position(random(width - 20), random(height- 20));
  newButton.mouseOver(() => moveAndSpawn(newButton));
  buttons.push(newButton);
}

function moveAndSpawn(button) {
  button.position(random(width - 20), random(height - 20));
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
  text("Klicke den Button!", width/2-450, 200);
}