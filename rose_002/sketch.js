var n = 0;
var change = 1;
var backgroundColorValue = 0;

function setup() {
  createCanvas(500, 500);

  // Use HSB color to control the hue of the ellipse
  colorMode(HSB, 360);

  background(backgroundColorValue)
}

function draw() {
  frameRate(100);

  // Slowly fade out each slide
  fill(backgroundColorValue, 7);
  rect(0, 0, width, height);

  // Center the animation
  translate(width / 2, height / 2);

  // Set the Numerator and Denominator
  // https://en.wikipedia.org/wiki/Rose_(mathematics)#/media/File:Rose-rhodonea-curve-7x9-chart-improved.svg
  var numerator = 3;
  var denominator = 2;

  var a = 0 + frameCount / 20;
  var k = numerator / denominator;
  var r = 200 * cos(k * a);
  var x = r * cos(a);
  var y = r * sin(a);

  noStroke()

  // Change the hue from 0 to 360 then back to 0
  if (n <= 0) {
    change = 1;
  } else if (n >= 360) {
    change = -1;
  }

  n = n + change;

  fill(n, 360, 360);

  drawTarget(x, y, 60, 10);
}

// How to use a function to draw an object
// https://p5js.org/examples/structure-functions.html
function drawTarget(xloc, yloc, size, num) {
  const grayvalues = 255 / num;
  const steps = size / num;
  for (let i = 0; i < num; i++) {
    fill(i * grayvalues);
    ellipse(xloc, yloc, size - i * steps, size - i * steps);
  }
}
