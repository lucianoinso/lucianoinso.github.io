let bug;

function setup() {
  createCanvas(710, 400);
  bug = new Jitter();
}

function draw() {
  background(197, 230, 227);
  s = int(millis()/1000) % 21;

  if (s < 4) bug.grow();
  else if(s >= 4 && s < 11) bug.stay();
  else if(s >= 11 && s < 19) bug.shrink();
  textSize(14);
  bug.display()
  fill(255, 255, 255);
  noStroke();
  text('Time:' + s, width/2 - 24, height - 20);
}

class Jitter {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.diameter = 10;
  }

  grow() {
    this.diameter += 1;
  }
  
  shrink() {
    if(this.diameter > 10)
      this.diameter -= 0.5;
  }

  stay() {
    this.diameter = this.diameter;
  }
  
  display() {
    fill(50, 168, 164);
    noStroke();
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

