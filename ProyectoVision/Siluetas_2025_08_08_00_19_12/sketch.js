let imagenes = [];
let elementos = [];
let cantidadPorImagen = 5;
let vibracion = 3;
let escala = 0.3;
let velocidadMaxima = 5;
let enMovimiento = true; // control de estado

function preload() {
  imagenes[0] = loadImage('prueba dos.png');
  imagenes[1] = loadImage('prueba tres.png');
  imagenes[2] = loadImage('prueba cinco.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  for (let i = 0; i < imagenes.length; i++) {
    for (let j = 0; j < cantidadPorImagen; j++) {
      let x = random(width);
      let y = random(height);
      let vx = random(-velocidadMaxima, velocidadMaxima);
      let vy = random(-velocidadMaxima, velocidadMaxima);
      elementos.push(new ElementoVisual(imagenes[i], x, y, vx, vy));
    }
  }
}

function draw() {
  background(255);

  for (let elemento of elementos) {
    if (enMovimiento) {
      elemento.mover();
    }
    elemento.mostrar();
  }
}

// Alternar movimiento al hacer clic o tocar
function mousePressed() {
  enMovimiento = !enMovimiento;
  enMovimiento ? loop() : noLoop();
}

function touchStarted() {
  enMovimiento = !enMovimiento;
  enMovimiento ? loop() : noLoop();
}

// Clase para cada imagen
class ElementoVisual {
  constructor(img, x, y, vx, vy) {
    this.img = img;
    this.pos = createVector(x, y);
    this.vel = createVector(vx, vy);
    this.angulo = random(TWO_PI); // ángulo inicial aleatorio
    this.velRotacion = random(-0.05, 0.05); // velocidad de rotación
  }

  mover() {
    this.pos.add(this.vel);
    this.angulo += this.velRotacion;

    if (this.pos.x < 0 || this.pos.x > width) this.vel.x *= -1;
    if (this.pos.y < 0 || this.pos.y > height) this.vel.y *= -1;
  }

  mostrar() {
    let vibX = random(-vibracion, vibracion);
    let vibY = random(-vibracion, vibracion);

    push();
    translate(this.pos.x + vibX, this.pos.y + vibY);
    rotate(this.angulo);
    scale(escala);
    image(this.img, 0, 0);
    pop();
  }
}



