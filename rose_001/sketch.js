/**
  * Thanks to Daniel Shiffman for the great tutorial on Rose patterns
  * https://www.youtube.com/watch?v=f5QBExMNB1I&t=673s
  *
  *
  * Questions
  * Can I group a collection of ellipses?
  * Can I move an object along a path?
  * How do I make this rose pattern rotate?
  * How do I export a gif?
  *
  */

var n = 0;
var change = 1;

function setup() {
  createCanvas(500, 500);

  // Use HSB color to control the hue of the ellipse
  colorMode(HSB, 360);
}

function draw() {
  frameRate(100);

  // Slowly fade out each slide
  fill(0, 10);
  rect(0, 0, width, height);

  // Center the animation
  translate(width / 2, height / 2);

  // Set the Numerator and Denominator
  // https://en.wikipedia.org/wiki/Rose_(mathematics)#/media/File:Rose-rhodonea-curve-7x9-chart-improved.svg
  var numerator = 5;
  var denominator = 8;

  var a = 0 + frameCount / 20;
  var k = numerator / denominator;
  var r = 200 * cos(k * a);
  var x = r * cos(a);
  var y = r * sin(a);

  translate(x, y)

  noStroke()

  // Change the hue from 0 to 360 then back to 0
  if (n <= 0) {
    change = 1;
  } else if (n >= 360) {
    change = -1;
  }

  n = n + change;

  fill(n, 360, 360);

  ellipse(0, 0, 3, 3);
}
