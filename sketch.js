var font;

function preload() {
  font = loadFont("assets/Terminal 1.ttf");
}

var terminal = "";

function setup() {
  createCanvas(windowWidth, windowHeight);
  writeLine("Starting hackOS...");
  writeLine("hackOS has successfully started!")
}

function draw() {
  background(0, 0, 50);
  noStroke();
  fill(255);
  textSize(16);
  textAlign(LEFT, TOP);
  textFont(font);
  text(terminal, 30, 30, 400, 400);

  noFill();
  stroke(255);
  rect(30, 30, 800, 800);

}

window.onresize = function(event) {
  resizeCanvas(windowWidth,windowHeight);
}

function writeLine(text) {
  terminal += text + "\n";
}

function write(text) {
  terminal += text;
}

function keyTyped() {
  write(key);
}
