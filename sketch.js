var bird, ground;
function preload(){

}

function setup() {

  createCanvas(windowWidth,windowHeight);

  bird=createSprite(50,50,50,50);
  ground=createSprite(windowWidth-200, windowHeight-200, windowWidth/2+2000, 20);

}

function draw() {
  background(0); 

drawSprites();

}
