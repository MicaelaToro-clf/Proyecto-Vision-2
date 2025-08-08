let imgs = [];
let angles = [];
let radius = 200;
let isPaused = false;

function preload() {
  const nombres = [
    "prueba uno.png",
    "prueba dos.png",
    "prueba tres.png",
    "prueba cuatro.png",
    "prueba cinco.png",
    "prueba seis.png",
    "prueba siete.png"
  ];

  for (let i = 0; i < nombres.length; i++) {
    imgs.push(loadImage(nombres[i]));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  for (let i = 0; i < imgs.length; i++) {
    angles[i] = TWO_PI * i / imgs.length;
  }
}

function draw() {
  background(245, 240, 220); // Fondo amarillo claro
  translate(width / 2, height / 2);

  for (let i = 0; i < imgs.length; i++) {
    let x = cos(angles[i]) * radius;
    let y = sin(angles[i]) * radius;
    image(imgs[i], x, y, 120, 120); // Tamaño levemente mayor

    if (!isPaused) {
      angles[i] += 0.015; // Giran un poco más rápido
    }
  }
}

function mousePressed() {
  isPaused = !isPaused;
}

function touchStarted() {
  isPaused = !isPaused;
}

function doubleClicked() {
  radius = random(150, 300);       // Cambia el tamaño del círculo
  shuffle(imgs, true);             // Reordena las imágenes
  shuffle(angles, true);           // Cambia posiciones relativas
}

