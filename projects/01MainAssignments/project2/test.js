let spaceshipX;
let asteroids = [];
let gameOver = false;

function setup() {
  createCanvas(800, 600);
  spaceshipX = width / 2;
  for (let i = 0; i < 10; i++) {
    asteroids.push({ x: random(width), y: random(-600, -50), speed: random(2, 5) });
  }
}

function draw() {
  background(0);
  
  if (!gameOver) {
    // Zeichne das Raumschiff
    fill(0, 255, 0);
    triangle(spaceshipX, height - 30, spaceshipX - 20, height - 60, spaceshipX + 20, height - 60);

    // Bewege das Raumschiff
    if (keyIsDown(LEFT_ARROW) && spaceshipX > 20) {
      spaceshipX -= 5;
    }
    if (keyIsDown(RIGHT_ARROW) && spaceshipX < width - 20) {
      spaceshipX += 5;
    }

    // Zeichne und bewege die Asteroiden
    fill(255, 0, 0);
    for (let asteroid of asteroids) {
      ellipse(asteroid.x, asteroid.y, 40);
      asteroid.y += asteroid.speed;

      // Überprüfe Kollision
      if (dist(spaceshipX, height - 45, asteroid.x, asteroid.y) < 40) {
        gameOver = true;
      }

      // Respawn, wenn der Asteroid den Boden erreicht
      if (asteroid.y > height) {
        asteroid.y = random(-600, -50);
        asteroid.x = random(width);
      }
    }
  } else {
    // Game Over Bildschirm
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("GAME OVER", width / 2, height / 2);
  }
}
