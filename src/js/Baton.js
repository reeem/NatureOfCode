// import p5 from 'p5';
import PVector from './PVector';

class Mover {
  constructor(mass, x, y) {
    this.aAcceleration = 0.001;
    this.location = new PVector(x, y);
  	this.velocity = new PVector(p5.random(-2, 2), p5.random(-2, 2));
    this.acceleration = new PVector(0, 0);

    this.mass = mass;
    this.angle = 0;
    this.aVelocity = 0;
    
  }

  applyForce(PVector) {
    this.acceleration = PVector;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);

    aVelocity += aAcceleration;
    angle += aVelocity;

    this.acceleration.mult(0);
  }

  display() {
    stroke(0);
    fill(175, 200);
    rectMode(p5.CENTER);

    pushMatrix();

    p5.translate(this.location.x, this.location.y);
    p5.rotate(this.angle);

    rect(0, 0, this.mass * 16, this.mass * 16);
    popMatrix();
  }

  checkEdges() {
    if (this.location.x > p5.width) {
      this.location.x = 0;
    } else if (this.location.x < 0) {
      this.location.x = width;
    }

    if (this.location.y > p5.height) {
      this.location.y = 0;
    } else if (this.location.y < 0) {
      this.location.y = height;
    }
  }
}

const Sketch = (p5) => {
  window.p5 = p5;
  const movers = [1,2,3,4,5,6,7];
  
  p5.setup = () => {
  	const sketch = p5.createCanvas(640, 360);
    sketch.parent('sketch');
    p5.frameRate(10);
  	p5.background(255);

    for (let i; i<movers.length; i++) {
      movers[i] = new Mover(p5.random(0.1, 5), 0, 0);
    }
  }

  p5.draw = () => {
    p5.background(255);   

    for (let i; i<movers.length; i++) {
      movers[i].update();
      movers[i].display();
      movers[i].checkEdges();
    }

    // p5.fill(175);
    // p5.stroke(0);
    // p5.rectMode(p5.CENTER);
    // p5.translate(p5.width/2,p5.height/2);
    // p5.rotate(angle);
    // p5.line(-50,0,50,0);
    // p5.ellipse(50,0,8,8);
    // p5.ellipse(-50,0,8,8);

    // aVelocity += aAcceleration;
    // angle = aVelocity;
  }
}

export default Sketch;
