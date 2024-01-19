/*
Author: Yankun (Alex) Meng

Reach Goals Achieved: 
-Create an eraser tool that, when enabled, erases by mouse drag rather than draws (P)

CHECK CONSOLE OUTPUT
*/

// Colors
let cc = [255, 255, 255]; // cc === Canvas Color (white by default)
let bc = [0, 0, 0]; // bc === Brush Color (black by default)

// Toggles
let canvas = false; // Canvas/Brush Color change mode (Default: Brush)
let eraser = false; // Eraser/Brush (Default: Brush)

// Brush Size
let brushSize = 1; // By default 1 === thinnest

// Run once
function setup() {
  // fill entire display window with canvas
  createCanvas(displayWidth, displayHeight);

  // start with default "blank" canvas
  background(cc[0], cc[1], cc[2]);

  printWelcomeMessage();
}

// Loop
function draw() {
  // set brush color if not eraser mode
  if (!eraser) {
    stroke(bc[0], bc[1], bc[2]);
  }

  // set brush size
  strokeWeight(brushSize);
}

function mouseDragged() {
  // draw & paint with mouse click-and-drag!
  line(pmouseX, pmouseY, mouseX, mouseY);
}

function keyPressed() {
  // DELETE -> redraw to background color
  if (keyCode === 8) {
    // if DELETE key pressed - clear anything off canvas
    background(cc[0], cc[1], cc[2]); // redraw background to "clear" the screen
  }
  // C -> change canvas color vs brush color
  if (keyCode === 67) {
    if (!canvas) {
      console.log("--------------------------------------------------------");
      console.log("CHANGING CANVAS COLOR");
      console.log("IF YOU CHANGE CANVAS COLOR, EVERYTHING WILL BE ERASED!!");
      console.log("Usage:")
      console.log("press R to add more red, E to make it less red");
      console.log("press G to add more green, F to make it less green");
      console.log("press B to add more blue, V to make it less blue");
      console.log("--------------------------------------------------------");
      canvas = true;
    } else {
      console.log("--------------------------------------------------------");
      console.log("CHANGING BRUSH COLOR");
      console.log("Usage:")
      console.log("press R to add more red, E to make it less red");
      console.log("press G to add more green, F to make it less green");
      console.log("press B to add more blue, V to make it less blue");
      console.log("--------------------------------------------------------");
      canvas = false;
    }
  }
  // S -> add stroke weight
  if (keyCode === 83) {
    console.log("--------------------------------------------------------");
    if (eraser) {
      console.log("Eraser Size: " + brushSize);
    } else {
      console.log("Brush Size: " + brushSize);
    }
    console.log("--------------------------------------------------------");
    brushSize++;
  }
  // A -> minus stroke weight
  if (keyCode == 65) {
    if (brushSize > 1) {
      console.log("--------------------------------------------------------");
      console.log("Brush Size: " + brushSize);
      console.log("--------------------------------------------------------");
      brushSize--;
    } else {
      console.log("--------------------------------------------------------");
      console.log("Brush size is the thinnest! Brush Size: " + brushSize);
      console.log("--------------------------------------------------------");
    }
  }
  // R -> Add more Red
  if (keyCode === 82) {
    if (canvas) {
      decColors(cc, 1, 2);
      refreshCanvas();
    } else {
      if (bc[0] < 255) {
        bc[0] += 15;
      }
      logColors(bc[0], bc[1], bc[2]);
    }
  }
  // E -> Minus Red
  if (keyCode === 69) {
    if (canvas) {
      incColors(cc, 1, 2);
      refreshCanvas();
    } else {
      if (bc[0] > 0) {
        bc[0] -= 15;
      }
      logColors(bc[0], bc[1], bc[2]);
    }
  }
  // G -> Add more Green
  if (keyCode === 71) {
    if (canvas) {
      decColors(cc, 0, 2);
      refreshCanvas();
    } else {
      if (bc[1] < 255) {
        bc[1] += 15;
      }
      logColors(bc[0], bc[1], bc[2]);
    }
  }
  // F -> Minus Green
  if (keyCode === 70) {
    if (canvas) {
      incColors(cc, 0, 2);
      refreshCanvas();
    } else {
      if (bc[1] > 0) {
        bc[1] -= 15;
      }
      logColors(bc[0], bc[1], bc[2]);
    }
  }
  // B -> Add more Blue
  if (keyCode === 66) {
    if (canvas) {
      decColors(cc, 0, 1);
      refreshCanvas();
    } else {
      if (bc[2] < 255) {
        bc[2] += 15;
      }
      logColors(bc[0], bc[1], bc[2]);
    }
  }
  // V -> Minus Blue
  if (keyCode === 86) {
    if (canvas) {
      incColors(cc, 0, 1);
      refreshCanvas();
    } else {
      if (bc[2] > 0) {
        bc[2] -= 15;
      }
      logColors(bc[0], bc[1], bc[2]);
    }
  }
  // P -> Toggle between eraser and brush
  if (keyCode === 80) { // P
    if (!eraser) {
      eraser = true;
      stroke(cc[0], cc[1], cc[2]);
      console.log("--------------------------------------------------------");
      console.log("ERASER MODE")
      console.log("--------------------------------------------------------");
    } else {
      eraser = false;
      console.log("--------------------------------------------------------");
      console.log("BRUSH MODE")
      console.log("--------------------------------------------------------");
    }
  }
  // W -> Make screen white
  if (keyCode === 87) {
    cc[0] = 255;
    cc[1] = 255;
    cc[2] = 255;
    background(cc[0], cc[1], cc[2]);
  }
  // Q -> Make screen black
  if (keyCode === 81) {
    cc[0] = 0;
    cc[1] = 0;
    cc[2] = 0;
    background(cc[0], cc[1], cc[2]);
  }
  // H -> Display Help Message
  if (keyCode === 72) {
    printWelcomeMessage();
  }
  // Z -> Display all Current Settings
  if (keyCode === 90) {
    printSettings();
  }
  // This is to disable default browser behavior
  return false;
}

// Logs the color of canvas and changes canvas color, this clears canvas
function refreshCanvas() {
  logColors(cc[0], cc[1], cc[2]);
  background(cc[0], cc[1], cc[2]);
}

// Log colors of brush or canvas
function logColors(r, g, b) {
  console.log("--------------------------------------------------------");
  if (canvas) {
    console.log("Canvas Color: ");
    console.log("Note: canvas color works like real paint (opposite of RGB). When you mix all of R, G, B, you get BLACK. To make it more white, you have to DECREASE (E, F, V) some R, G, or B. White means no paint.");
  } else {
    console.log("Brush Color: ");
  }
  console.log("Red: " + r);
  console.log("Green: " + g);
  console.log("Blue: " + b);
  console.log("--------------------------------------------------------");
}

// Utility function used by changing canvas color, to make one more, we decrement the other two
function decColors(arr, i, j) {
  if (arr[i] > 0) {
    arr[i] -= 15;
  }
  if (arr[j] > 0) {
    arr[j] -= 15;
  }
}

// Utility function used by changing canvas color, to make one less, we increment other two
function incColors(arr, i, j) {
  if (arr[i] < 255) {
    arr[i] += 15;
  }
  if (arr[j] < 255) {
    arr[j] += 15;
  }
}

// Utility function to print help (welcome message)
function printWelcomeMessage() {
  console.log("------------------------ HELP ----------------------------");
  console.log("Welcome to my First Drawing App!! - Alex Meng");
  console.log("Tip: If nothing is happening, click on canvas to make sure your control is on canvas!");
  console.log();
  console.log("------- Canvas/Brush Color ------");
  console.log("To make entire canvas white, you can press W (white) at any time.");
  console.log("To make entire canvas black, you can press Q (letter to the left of white) at any time.");
  console.log();
  console.log("You can change brush color by default. To toggle between changing canvas color or changing brush color, press: C (change)");
  console.log();
  console.log("Tip: CHECK CONSOLE if you are not sure which mode you are in!!");
  console.log();
  console.log("How to change canvas or brush color:")
  console.log("-press R to add more red, E to make it less red");
  console.log("-press G to add more green, F to make it less green");
  console.log("-press B to add more blue, V to make it less blue");
  console.log();
  console.log("------- Brush Size ------");
  console.log("To make your brush thicker, press S (stroke)");
  console.log("To make your brush thinner, press A (the button to the left of S)");
  console.log("To toggle between eraser and brush, press P (pen)");
  console.log();
  console.log("That is all! Enjoy painting!! Remember to click on canvas to get started.");
  console.log("-------------------------");
  console.log("To view this message any time, press H for help.");
  console.log("To view all of your current settings, press: Z")
  console.log("--------------------------------------------------------");
}

// Utility function to print all settings
function printSettings() {
  console.log("-------------------------Settings-------------------------");
  if (canvas) {
    console.log("CANVAS color change mode (not brush, use C to toggle)");
  } else {
    console.log("BRUSH color change mode (not canvas, use C to toggle)");
  }
  if (eraser) {
    console.log("ERASER mode on (not brush, use P to toggle)");
    console.log("ERASER size: " + brushSize);
  } else {
    console.log("BRUSH mode on (not eraser, use P to toggle)");
    console.log("BRUSH size: " + brushSize);
  }
  console.log();
  console.log("-----Canvas Color-----");
  console.log("Red: " + cc[0]);
  console.log("Green: " + cc[1]);
  console.log("Blue: " + cc[2]);
  console.log();
  console.log("-----Brush Color-----");
  console.log("Red: " + bc[0]);
  console.log("Green: " + bc[1]);
  console.log("Blue: " + bc[2]);
  console.log();
  console.log("--------------------------------------------------------");
}
