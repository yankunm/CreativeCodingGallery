/*
9/15/2023 Friday - Alex Meng

Goal for today: Explore for/while loops, and how that is able to simulate rhythm and depth.

Focus: The Night Sky, dark
*/

function setup() {
  createCanvas(700, 500);
}

function draw() {
  background("blue");

  // shining stars
  fill(0);
  stroke("#3D3372");
  strokeWeight(2);
  let d = random(50, 53);
  for (x = 0; x < 750; x += 50) {
    for (y = 0; y < 550; y += 50) {
      circle(x, y, d);
    }
  }

  // Create depth using circles
  d = 0;
  noFill();
  while (d < 1000) {
    stroke("#3D3372");
    strokeWeight(10);
    circle(350, 250, d);
    d += 50;
  }

  d = 0;
  noFill();
  while (d < 1000) {
    stroke("#1D1D43");
    strokeWeight(5);
    circle(350, 250, d);
    d += 30;
  }

  // Create a walkway
  for (let x = 0; x < 700; x += 50) {
    stroke(0);
    line(350, 250, x, 700);
  }

}