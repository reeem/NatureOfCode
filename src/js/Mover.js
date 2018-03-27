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

    this.aVelocity += this.aAcceleration;
    this.angle += this.aVelocity;

    this.acceleration.mult(0);
  }

  display() {
    p5.stroke(0);
    p5.fill(175, 200);
    p5.rectMode(p5.CENTER);

    p5.push();

    p5.translate(this.location.x, this.location.y);
    p5.rotate(this.angle);

    p5.rect(0, 0, this.mass * 16, this.mass * 16);
    p5.pop();
  }

  checkEdges() {
    if (this.location.x > p5.width) {
      this.location.x = 0;
    } else if (this.location.x < 0) {
      this.location.x = p5.width;
    }

    if (this.location.y > p5.height) {
      this.location.y = 0;
    } else if (this.location.y < 0) {
      this.location.y = p5.height;
    }
  }
}

export default Mover;
