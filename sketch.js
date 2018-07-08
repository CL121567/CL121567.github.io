//Create an array with HEX values that represent colors
let colorArray = ["#ED7A8E", "#7D43FE", "#132BA8","#000000", "#FFFFFF"];


//Grid is split into steps of 20. This variable is used throughout,
//to ensure consistency
let gridStep = 20;

function setup() {
  noLoop(); //Program renders only once - when setup executes (also in Events - i.e. key, mouse clicks)
  rectMode(CENTER); //drawing point for rect() is center
  createCanvas(800, 800); //size of the canvas
  background(255);

  grid();
  //The following loop runs 4 times. Each time, the functions are executed
  for (let i=0; i<4; i++){
    circleBlocks(int(random(5)),int(random(5))); //arguments define XY starting position
  }
}




function draw(){
  //background(255);
  //grid();
}

function grid(){
  let size = 2;
  let stepX = 0;

  push();
  strokeWeight(10);
  fill("#0BBE86")
  triangle(30, 75, 58, 20, 600,100);
  fill("#FFA61A")
  translate(60,60);
  ellipse(100,100,50,50);
  fill("#FFA61A");
  translate(120,2);
  ellipse(100,100,50,50);
  fill("#000000");
  ellipse(-15,100, 20, 20);
  fill("#000000");
  ellipse(90,100,20,20);
  //noFill();
  stroke("#FF0000");
  arc(40,150, 90, 80, 0, PI -QUARTER_PI , OPEN);
  arc(100,190, 400, 100, PI+ QUARTER_PI-0.05, PI+ QUARTER_PI, OPEN);

  pop();

  for (let y = 10; y < width; y+=gridStep) {
    for (let x = 10; x < height; x+=gridStep) {
      //stroke(255,0,0);
      //strokeWeight(1);
      let randomStep = int(random(width/gridStep));

      if (x == 10) stepX = 0;
      else stepX = stepX + 1;

      if (randomStep == stepX){
        stroke(0);
        let newSizeStroke = int(random(20));
        strokeWeight(newSizeStroke/10);
        noFill();
        ellipse(x, y, newSizeStroke, newSizeStroke);
        noStroke();
        fill(0);
        let newSize = int(random(12));
        ellipse(x, y, newSize, newSize);
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
      ellipse(0, 0, 15, 15); //position is driven by translate()
      noStroke();
      fill(colorCircle);
      ellipse(0, 0, 5, 5); //position is driven by translate()
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
    for (let i=0; i<4; i++){
      circleBlocks(int(random(5)),int(random(5)));
    }
  }
}
