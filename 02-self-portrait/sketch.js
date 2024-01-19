/*
Author: Yankun (Alex) Meng

Reach Goals Achieved: 
-Create an eraser tool that, when enabled, erases by mouse drag rather than draws (P)

CHECK CONSOLE OUTPUT
*/
let black = 30; // black outline is not pure black so the outline don't look too sharp
let white = 255;

function setup() {
  // Canvas is 600 pixels in width by 600 pixels in height
  createCanvas(600, 600);
}

function draw() {
  // Create a black background to draw on
  background("white");

  // draws the face and neck and the shoulder lines
  giveMeAPerson();

  // hair
  drawHair();

  // hairband
  drawHairband();

  // eyes
  drawEyes();

  // nose
  drawNose();

  // mouth
  drawMouth();
}

function drawMouth() {
  // mouth
  strokeWeight(5);
  stroke(205, 152, 130);
  fill(white);
  rect(240, 345, 120, 45, 0, 0, 100, 100);
  strokeWeight(1);
  stroke(200);
  line(242, 365, 357, 365);
}

// draws nose
function drawNose() {
  strokeWeight(5);
  stroke(225, 172, 150);
  // right upper
  line(310, 250, 322, 230);
  // right lower
  line(310, 250, 322, 310);
  // left upper
  line(280, 250, 268, 230);
  // left lower
  line(280, 250, 270, 310);
  // midpointX = 322 - 270 / 2 + 270 = 296
  // connect left lowest point to midpoint
  line(270, 310, 296, 320);
  // connect right lowest point to midpoint
  line(322, 310, 296, 320);
}

// draws eyes
function drawEyes() {
  // eye brows
  stroke(black);
  strokeWeight(11);
  fill(255, 195, 170);
  arc(220, 210, 80, 50, PI + 0.2, 0);
  arc(370, 210, 80, 50, PI, -0.1);

  // draw eyelids
  // left eye
  strokeWeight(3);
  fill(255, 195, 170);
  stroke(225, 172, 150);
  arc(225, 225, 60, 40, PI - 0.3, 0);
  // right eye
  arc(367, 225, 60, 40, PI, 0.3);

  // eyes
  stroke(black);
  strokeWeight(5);
  fill(white);
  // left eye base
  rect(200, 220, 55, 25, 20, 20, 1, 10);
  // right eye base
  rect(340, 220, 53, 25, 20, 20, 20, 1);
  // left eye outline
  arc(227, 236, 55, 40, PI, 0.3);
  // right eye outline
  arc(365, 236, 55, 40, PI - 0.3, 0);

  // eye balls
  strokeWeight(7);
  stroke(43, 29, 20);
  fill(black);
  ellipse(230, 230, 25, 25);
  ellipse(363, 230, 25, 25);

}


// draws the face and neck and the shoulder lines
function giveMeAPerson() {
  strokeWeight(5);
  stroke(225, 172, 150);

  // neck
  fill(255, 195, 170);
  rect(215, 300, 170, 220, 5, 5, 90, 90);

  // ears
  strokeWeight(11);
  fill(225, 172, 150);
  arc(175, 275, 50, 70, HALF_PI + 0.1, PI + HALF_PI - 0.3);
  arc(430, 275, 50, 70, PI + HALF_PI + 0.3, HALF_PI + 0.1);

  // chin
  strokeWeight(5);
  fill(255, 195, 170);
  rect(175, 150, 250, 300, 5, 5, 150, 150);

  // skull
  stroke(255, 195, 170);
  fill(255, 195, 170);
  ellipse(300, 200, 300, 380);

  // left shoulder
  stroke(150);
  strokeWeight(5);
  line(0, 500, 215, 450);
  stroke(200);
  strokeWeight(20);
  line(0, 511, 210, 461);

  // right shoulder
  stroke(150);
  strokeWeight(5);
  line(600, 500, 385, 450)
  stroke(200);
  strokeWeight(20);
  line(600, 511, 390, 461);
}

// hair - this function comes before drawHairband
function drawHair() {
  stroke(0);
  // Hair
  for (let i = 170; i < 470; i += 30) {
    for (let j = 30; j < 80; j += 20) {
      strokeWeight(50);
      point(i, j);
    }
  }
  // Hair
  for (let i = 190; i < 430; i += 30) {
    for (let j = 20; j < 80; j += 20) {
      strokeWeight(50);
      point(i, j);
    }
  }
}

// hairband
function drawHairband() {
  stroke("red");
  for (let i = 155; i < 480; i += 30) {
    for (let j = 80; j < 150; j += 50) {
      strokeWeight(50);
      point(i, j);
    }
  }
  stroke(white);
  // Headband
  for (let i = 155; i < 480; i += 30) {
    for (let j = 105; j < 110; j += 1) {
      strokeWeight(50);
      point(i, j);
    }
  }
  stroke("blue");
  // Headband
  for (let i = 140; i < 480; i += 10) {
    strokeWeight(20);
    point(i, 109);
  }
}