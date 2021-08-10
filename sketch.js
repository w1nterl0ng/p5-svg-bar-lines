var bCount;
var countSlider;
var bMaxSlider;
var bMinSlider;
var countP;
var eSpaceCheckbox;
let cW = 1000;
let cH = 300;
let bMaxWidth = 80;
let bMinWidth = 5;
let bHeight = 200;
let bSpace = 100;
let evenSpace = false;
let boxBuffer = 20;
let saveButton;


function setup() {
  createCanvas(cW, cH, SVG);
  console.log("test ready");
  noStroke();
  fill(0);
  countP = createP('Number of Boxes: ');
  countSlider = createSlider(2,20,5);
  bMaxP = createP('Max Width of Boxes: ');
  bMaxSlider = createSlider(10,200,100);
  bMinP = createP('Min Width of Boxes: ');
  bMinSlider = createSlider(1,100,5);
  eSpaceCheckbox = createCheckbox(' Even Spacing',false);
  saveButton = createButton('Save as SVG');
  saveButton.mousePressed(saveSVG);

}

function draw() {
  background(255);
  currentX = 0;
  bCount = countSlider.value();
  countP.html('Number of boxes: ' + countSlider.value());
  bMaxP.html('Max Width of boxes: ' + bMaxSlider.value());
  bMinP.html('Min of boxes: ' + bMinSlider.value());
  for (let i = 0; i < bCount; i++) {
    currentWidth = map(i,0,bCount-1,bMaxSlider.value(),bMinSlider.value());
    if(eSpaceCheckbox.checked()){
      currentX = i*bSpace + 10;
    }else{
      currentX = currentX + currentWidth + boxBuffer + 10;
    }
    // Draw each box
    rect (currentX, 50, currentWidth, bHeight);
  }
}

function saveSVG() {
  save();
}