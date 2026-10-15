
let r = 100;
let g = 200;
let b = 200;

let angle = 0;
let slider;
let sliderValue;
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  slider = createSlider(0,20);
  slider.position(20,50);
  slider.size(100);

}

function draw() {
  sliderValue = slider.value();
  background(200, 160, 250, 15);

  // Invert colours while mouse is pressed
  let cr = r;
  let cg = g;
  let cb = b;

  if (mouseIsPressed) {
    background(cr, cg, cb, 60);
    cr = 0;
    cg = 55;
    cb = 155;
  }

  // Movement range
  let offsetX = sin(angle) * sliderValue;
  let offsetY = sin(angle) * sliderValue;
 
  // Draw 7 circles, largest to smallest
  for (let i = 7; i > 0; i--) {
    fill(cr, cg, cb);
    stroke("yellow");

    circle(
      width / 2 + offsetX * i,
      height / 2 + offsetY * i,
      10 * i
    );
  }

  angle += 5;
  angle += sliderValue;
}
