//global variables go here

var rabbitHole;
var rabbitholeText;
var drinkMe;
var falling;
var aliceFalling;

var img;
var mode = 1;
//only use the preload function if you need to load images
//remember you will need to use Anvil to run your local server
function preload(){
  rabbitholeText = loadImage('img/downtherabbithole.jpg');
  drinkMe = loadImage('img/drinkme.jpeg');
  rabbitHole = loadImage('img/rabbithole.jpg');
  falling= loadImage('img/falling.jpg');
  aliceFalling = loadImage ('img/falling.gif');

}
//Set up your canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

//Draw your story
function draw() {
  if (mode == 1) {
    background ("white");
    image (rabbitholeText,windowWidth/2,windowHeight/2,rabbitholeText.width,rabbitholeText.height);
  } if (mode == 2); {
    background ("white");
    image (rabbitHole,windowWidth/2,windowHeight/2,rabbitHole.width,rabbitHole.height);
  } if (mode == 3); {
    background ("white");
    image (aliceFalling,windowWidth/2,windowHeight/2,aliceFalling.width,aliceFalling.height);
  } if (mode == 4); {
    background ("white");
    image (rabbitHole,windowWidth/2,windowHeight/2,rabbitHole.width,rabbitHole.height);
  } else (mode == 5){
    background("white");
  }




//add your functions
function keyTyped(){

  if (key === ENTER){
    mode++;
    }
  }
}
