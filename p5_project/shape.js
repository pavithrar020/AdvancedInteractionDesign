let chess;

function preload() {
  // Load model with normalise parameter set to true
  chess = loadModel('assets/chess.obj', true);
}

function setup() {
  createCanvas(100, 100, WEBGL);
  describe('Vertically rotating 3-d model with red, green and blue gradient.');
}

function draw() {
  background(200);
  scale(2); // Scaled to make model fit into canvas
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial(); // For effect
  model(chess);
  stroke (0);
  fill (200);
}