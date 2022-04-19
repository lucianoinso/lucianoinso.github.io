let bug;

function setup() {
  createCanvas(400, 400);
  bug = new Jitter();
}

function draw() {
  background(186, 13, 13);
  s = int(millis()/500) % 2;

  if (s < 1) bug.grow();
  else bug.shrink();

  textSize(14);
  bug.display()
  // fill(255, 255, 255);
  // noStroke();
  // text('Time:' + s, width/2 - 24, height - 20);
}

class Jitter {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.diameter = 10;
  }

  grow() {
    this.diameter += 4;
  }
  
  shrink() {
    if(this.diameter > 10)
      this.diameter -= 4;
  }

  stay() {
    this.diameter = this.diameter;
  }
  
  display() {
    fill(255, 18, 16);
    noStroke();
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

