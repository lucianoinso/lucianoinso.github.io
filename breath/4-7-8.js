let bug;

function setup() {
  createCanvas(400, 400);
  bug = new Jitter();
  time_x_pos = width / 2 - 6
  time_y_pos = height / 2 + 6
  textSize(20);
}

function draw() {
  background(197, 230, 227);
  s = int(millis()/1000) % 19;

  if (s < 4){  
    bug.grow();
    bug.display()
    fill(255, 255, 255);
    noStroke();
    text((s + 1), time_x_pos, time_y_pos);
  }
  else if(s >= 4 && s < 11) {
    bug.stay();
    bug.display()
    fill(255, 255, 255);
    noStroke();
    text((s - 3), time_x_pos, time_y_pos);
  }
  else if(s >= 11 && s < 19) {
    bug.shrink();
    bug.display()
    fill(255, 255, 255);
    noStroke();
    text((s - 10), time_x_pos, time_y_pos);
  }
}

class Jitter {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.diameter = 34;
  }

  reset() {
    this.diameter = 34;
  }

  grow() {
    if(this.diameter < 300)
      this.diameter += 1;
  }
  
  shrink() {
    if(this.diameter > 34)
      this.diameter -= 0.5;
  }

  stay() {
    // do nothing
  }
  
  get_diameter() {
    return this.diameter
  }
  
  display() {
    fill(50, 168, 164);
    noStroke();
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

