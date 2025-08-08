let tiles = [];
let shapes = [];
let isPaused = false;
let img1, img2, img3, img4;

function preload() {
  img1 = loadImage('prueba cuatro.png');
  img2 = loadImage('prueba uno.png');
  img3 = loadImage('prueba dos.png');
  img4 = loadImage('prueba tres.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  generateTiles();
  generateShapes();
}

function draw() {
  background(255, 255, 230); // Amarillo muy suave

  // Dibujar figuras
  noStroke();
  for (let s of shapes) {
    fill(s.color);
    if (s.type === 'circle') {
      ellipse(s.x, s.y, s.size);
    } else if (s.type === 'rect') {
      rect(s.x - s.size/2, s.y - s.size/2, s.size, s.size);
    }
  }

  // Dibujar imágenes
  for (let t of tiles) {
    push();
    translate(t.x, t.y);
    rotate(t.angle);
    image(t.img, 0, 0, t.size, t.size);
    pop();

    if (!isPaused) {
      t.angle += t.rotationSpeed;
    }
  }
}

function generateTiles() {
  tiles = [];
  let gridSize = 150;
  let margin = 80;
  let images = [img1, img2, img3, img4];

  for (let x = margin; x < width - margin; x += gridSize) {
    for (let y = margin; y < height - margin; y += gridSize) {
      tiles.push({
        x: x,
        y: y,
        size: 120, // un poco más grande
        angle: random(TWO_PI),
        rotationSpeed: random(-0.05, 0.05), // un poco más rápido
        img: random(images)
      });
    }
  }
}

function generateShapes() {
  shapes = [];
  for (let i = 0; i < 20; i++) {
    shapes.push({
      x: random(width),
      y: random(height),
      size: random(20, 60),
      type: random(['circle', 'rect']),
      color: color(random(255), random(255), random(255), 150)
    });
  }
}

function mousePressed() {
  isPaused = !isPaused;
}

function touchStarted() {
  isPaused = !isPaused;
}

function doubleClicked() {
  generateTiles();
  generateShapes();
}

