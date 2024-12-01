let gifimg;

function preload() {
  //preload() runs once
  gifimg=createImg('assets/frogchess.gif');
}

function setup() {
 // put setup code here
  createCanvas(displayWidth, displayHeight);
  background(255,255,255);
}

function draw() {
  gifimg.position(300,400);
}