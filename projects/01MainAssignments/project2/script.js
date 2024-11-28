let buttons = [];
let font;

const messages = ["Na los!", "Klick mich!", "Hier bin ich!", "Siehst du mich nicht?", "Zu langsam!","Ich schlafe gleich ein!"];

function preload() {
  font = loadFont("/fonts/Arial-Rounded-Bold.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  createNewButton();
}

function createNewButton() {
  let newButton = createButton(random(messages)); 
  newButton.size(random(80, 120), random(40, 60));
  newButton.position(random(width - 50), random(height - 20));
  newButton.mouseOver(() => moveAndSpawn(newButton));
  buttons.push(newButton);
}

function moveAndSpawn(button) {
  button.position(random(width - 50), random(height - 50));
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
  textSize(50);
  text("Klicke den Button!", 50, 100);
}