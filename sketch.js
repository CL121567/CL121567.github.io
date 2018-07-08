//Create an array with HEX values that represent colors
let colorArray = ["#8C065C", "#005275", "#F14303","#008B3E", "#F5A41A"];


//Grid is split into steps of 20. This variable is used throughout,
//to ensure consistency
let gridStep = 20;
let jitter = 5;


function setup() {
  textSize(100);
  textAlign(CENTER);
  //noLoop(); //Program renders only once - when setup executes (also in Events - i.e. key, mouse clicks)
  rectMode(CENTER); //drawing point for rect() is center
  createCanvas(800, 800); //size of the canvas
  background(255);

  frameRate(5);

  grid();
  //The following loop runs 4 times. Each time, the functions are executed
  for (let i=0; i<1; i++){
    circleBlocks(1, 0); //arguments define XY starting position
  }
}

function draw(){
  //background(255);
  //grid();
  translate(180,62);
  fill("#FFA61A");
  stroke(0,0,0);
  strokeWeight(10);
  ellipse(100,100,50,50);
  ellipse(-10,100,50,50);
  fill("#000000");
  // ellipse(-20,100, 20, 20);
  fill("#000000");

  translate(100, 100);
  // console.log(frameCount);
  if (frameCount % 2 == 1) {  // if this frame is odd
    jitter = 5;
  } else {
    jitter = -5;
  }
//eye l
  push();
  translate(jitter, 0);
  ellipse(0,0,20,20);
  pop()

//eye r
  translate(-110, 0)
  push();
  translate(-jitter,0);
  ellipse(0,0,20,20);
  pop()

//hair
  push();

  push();
    strokeWeight(10);
    fill("#0BBE86");
    translate(-150, -130);
    triangle(70,70, 100, 20, 600,100);
  pop()


//eyes outside
  fill("#FFA61A")
  translate(60,60);
  fill("#FFA61A");
  translate(120,2);
  pop();

  push();
  stroke("#FF0000");
  translate(-10,-60);
  arc(40,150, 90, 80, 0, PI -QUARTER_PI , OPEN);
  arc(100,190, 400, 100, PI+ QUARTER_PI-0.05, PI+ QUARTER_PI, OPEN);
  pop();

}

function grid(){
  let size = 2;
  let stepX = 0;
  let colorCircle = colorArray[int(random(5))];

  for (let y = 10; y < width; y+=gridStep) {
    for (let x = 10; x < height; x+=gridStep) {
      //stroke(255,0,0);
      //strokeWeight(1);
      let randomStep = int(random(width/gridStep));

      if (x == 10) stepX = 0;
      else stepX = stepX + 1;

      if (randomStep == stepX){

        stroke(colorCircle);
        let newSizeStroke = int(random(20));
        strokeWeight(newSizeStroke/10);
        noFill();
        ellipse(x, y, newSizeStroke, newSizeStroke);
        noStroke();
        fill(0);

        let newSize = int(random(12));
        rect(x, y, newSize, newSize);
      } else {
        noStroke();
        fill(0);
        ellipse(x, y, size, size);

      }
    }
  }
}


function circleBlocks(xTimes, yTimes){
  let xRand = int(random(width/gridStep));
  let yRand = int(random(height/gridStep));
  let xPos = xRand*gridStep;
  let yPos = yRand*gridStep;

  let angle = 45;

  push();
  translate(xPos, yPos);
  let colorCircle = colorArray[int(random(5))];
  for (let y = 10; y < xTimes*gridStep; y+=gridStep) {
    for (let x = 10; x < yTimes*gridStep; x+=gridStep) {
      push(); //apply this at the beginning of the transformation
      translate(x, y); //assign here the shape position
      noFill();
      stroke(colorCircle);
      strokeWeight(3);
      //ellipse(0, 0, 15, 15); //position is driven by translate()
      noStroke();
      fill(colorCircle);
      //ellipse(0, 0, 5, 5); //position is driven by translate()

      text("You are a Smart person",0,0)
      text("no doubts",0,20)

      pop();
    }
  }
  pop();
}

//Use keys A,S,D to draw additional shapes according to the functions we have
function keyPressed() {
  if (key == 'd' || key == 'D'){
    grid();
  }
  if (key == 's' || key == 'S'){
    for (let i=0; i<1; i++){
      circleBlocks(1, 1);
    }
  }
}
