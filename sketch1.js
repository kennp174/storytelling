
var rabbitholeText;
var rabbitHole;
var aliceFalling;
var falling;
var drinkMe;
var land;
var img;
var mode = 1;
var words = "";


function preload(){
  rabbitholeText = loadImage('img/downtherabbithole.jpg');
  rabbitHole = loadImage('img/rabbithole.jpg');
  aliceFalling = loadImage('img/falling.jpg');
  drinkMe = loadImage('img/drinkme.jpeg');
  falling = loadImage('img/falling.gif');
  land = loadImage('img/enter.png');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  fill("red");
  textFont("Georgia");
  textAlign(CENTER);

  enter = new Words ("'ENTER' Wonderland");
  press = new Words ("Where does Alice go? (enter)");
  none = new Words ("");
  next = new Words ("Finished falling? Yes: Enter No: Delete");
  drink = new Words ("Does Alice drink the liquid? Yes: Click Screen No: Delete");
  wonderland = new Words ("WELCOME TO WONDERLAND");
}


function draw() {

  if (mode == 1){
    background("white");
    image (rabbitholeText,windowWidth/2,windowHeight/2,rabbitholeText.width,rabbitholeText.height);
    words = enter.name;
  } else if (mode == 2){
    background("white");
    image (rabbitHole,windowWidth/2,windowHeight/2,windowWidth,windowHeight);
    words = press.name;
  } else if(mode ==3){
    background("white");
    image (falling,windowWidth/2,windowHeight/2,windowWidth-10,windowHeight-10);
    words = next.name;
  } else if (mode == 4){
    background("white");
    image (drinkMe,windowWidth/2,windowHeight/2,drinkMe.width,drinkMe.height);
    words = drink.name;
  }

  textSize(32);
  text (words, windowWidth/2, windowHeight-25);
}


function keyPressed(){
  if (keyCode === ENTER){
    mode++;
    }
  }

function mousePressed(){
  if (mousePressed)
  background("white");
  image (land,windowWidth/2,windowHeight/2,land.width,land.height);
  words = wonderland.name;
} 

function Words (name){
  		this.name = name;
  		this.drawText = function(){
  	  }
}
