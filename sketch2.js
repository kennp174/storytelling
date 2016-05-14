//global variables go here
var ghostX = 0;
var ghostY = 50;
var speed = 5;
var bg = "white";


//only use the preload function if you need to load images
//remember you will need to use Anvil to run your local server
// function preload(){

// }


//Set up your canvas
function setup() {
  createCanvas(windowWidth, windowHeight);

}


//Draw your story
function draw() {
  background(bg);

  if (ghostX <mouseX){
    ghostX +=speed;
  }

  if (ghostX > mouseX){
    ghostX -=speed;
  }

  if (ghostX < mouseY){
    ghostY +=speed;
  }

  if (ghostY > mouseY){
    ghostY -=speed;
  }

  fill(100,100,100);
  ellipse(ghostX, ghostY,50,50);

  fill("green");
  ellipse(mouseX, mouseY, 25,25);

  fill("red");
  text("use your mouse");

  if(bg == "black"){
    fill(200,200,200);
    ellipse(100+random(-2,2),100+random(-1,1),50,50);
    ellipse(250+random(-2,2),175+random(-1,1),50,50);
    ellipse(100+random(-2,2),300+random(-1,1),50,50);
    ellipse(150+random(-2,2),350+random(-1,1),50,50);
  }
}

//add your functions
function keyPressed(){

  if (keyCode === SHIFT){
    if(bg == "black"){
      bg = "white";
    } else if (bg =="white"){
      bg = "black";
    }
  }
}
