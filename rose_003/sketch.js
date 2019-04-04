var fps = 60;
var stopAnimation = 152;
var stopCapture = 303;

// CCapture Setup
var capturer = new CCapture( {
  name: 'rose_002',
  framerate: fps,
  format: 'gif',
  workersPath: '../libraries/',
  display: true,
  verbose: false
} );

let backgroundColorValue = 0;
let fadeOpacity = 5;

function setup() {
  frameRate(fps);
  createCanvas(320, 320);

  // Use HSB color to control the hue of the ellipse
  colorMode(HSB, 360);

  background(backgroundColorValue)
  capturer.start();
}

function draw() {
  noStroke()

  if(frameCount > stopAnimation){
    fadeOpacity = fadeOpacity + 1;
  }

  // Slowly fade out each slide
  fill(backgroundColorValue, fadeOpacity);
  rect(0, 0, width, height);

  // Center the animation
  translate(width / 2, height / 2);

  // if(frameCount < stopAnimation){
    let roseXY = drawRoseCurve(2, 3, frameCount)
    drawTarget(roseXY.x, roseXY.y, 20, 20);
  // }


  // Capture
  capturer.capture(canvas);
  if(frameCount === stopCapture){
    capturer.stop();
    capturer.save();
  }
}

/**
  * Rose / Rhodonea Curve function
  * In mathematics, a rose or rhodonea curve is a sinusoid plotted in polar coordinates.
  * https://en.wikipedia.org/wiki/Rose_(mathematics)#/media/File:Rose-rhodonea-curve-7x9-chart-improved.svg
  *
  * @param numerator is
  * @param denominator is
  * @param a
  *
*/

function drawRoseCurve(numerator, denominator, frameCount) {
  let a = 0 + frameCount / 8;
  let k = numerator / denominator;
  let r = 100 * cos(k * a);
  let x = r * cos(a);
  let y = r * sin(a);
  return { x: x, y: y }
}

// How to use a function to draw an object
// https://p5js.org/examples/structure-functions.html
function drawTarget(xloc, yloc, size, num) {
  const grayvalues = 360 / num;
  const steps = size / num;
  for (let i = 0; i < num; i++) {
    fill(125, 125, i * grayvalues);
    ellipse(xloc, yloc, size - i * steps, size - i * steps);
  }
}
