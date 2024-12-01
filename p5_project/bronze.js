// Global variables
let img1;
let gifimg;
let button1;
let sound;
let flowers = []; // Array to store flowers
let flowerImages = []; // Array to store flower images

// Preload function to load assets
function preload() {
  img1 = loadImage('assets/ganesa.png');
  gifimg = createImg('assets/ganesa.gif'); // Load the GIF
  sound = loadSound('assets/ganesa.wav'); // Load the sound
  // Load the images for the flowers
  flowerImages[0] = loadImage('assets/flower.png');
  flowerImages[1] = loadImage('assets/yellowflower.png');
  // Load the Himalayas image
  himalayasImage = loadImage('assets/himalayas.jpg');
  gifimg.hide();
}

// Setup function to initialize canvas and elements
function setup() {
  createCanvas(displayWidth, displayHeight);
  button1 = document.getElementById('playButton'); // Get the play button element
  button1.addEventListener('click', playSoundAndShowGif); // Add event listener to the button
}

// Draw function to display elements
function draw() {
  // Display the infographic image
  image(img1, 0, 0, img1.width / 6, img1.height / 6);

  // Update and display flowers
  for (let i = flowers.length - 1; i >= 0; i--) {
    flowers[i].update();
    flowers[i].display();
    if (flowers[i].offScreen()) {
      flowers.splice(i, 1);
    }
  }
}

// Function to play sound and show GIF
function playSoundAndShowGif() {
  sound.play(); // Play the sound

  // Set the position of the GIF next to the infographic image
  let imgX = 0;
  let imgY = 0;
  let imgWidth = img1.width / 6;
  let imgHeight = img1.height / 6;
  let gifX = imgX + imgWidth + 20;
  let gifY = imgY;
  let gifWidth = imgWidth;
  let gifHeight = imgHeight;
  gifimg.position(gifX, gifY);
  gifimg.size(gifWidth, gifHeight);
  gifimg.show();

  // Add flowers
  for (let i = 0; i < 20; i++) {
    let flowerIndex = int(random(flowerImages.length)); // Randomly select a flower image
    let flower = new Flower(random(width), random(height), random(1, 2), flowerImages[flowerIndex]);
    flowers.push(flower);
  }
}

// Flower class
class Flower {
  constructor(x, y, speed, image) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.image = image; // Flower image
    this.opacity = 100; // Initial opacity
  }

  update() {
    // Move the flower randomly within a range
    this.x += random(-1, 1);
    this.y += random(-1, 1);
    // Constrain the flower's position within the canvas
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
    this.opacity -= 0.5; // Decrease opacity slowly
  }

  display() {
    tint(255, this.opacity); // Set opacity
    image(this.image, this.x, this.y, 50, 50); // Display the flower
    noTint(); // Reset tint
  }

  offScreen() {
    return this.opacity <= 0; // Check if flower is fully transparent
  }
}
