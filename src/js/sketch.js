
import p5 from 'p5';

class PVector {
  constructor(x_, y_) {
    this.x = x_;
    this.y = y_;
  }
	
  add(V) {
    this.x = this.x + V.x;
    this.y = this.y + V.y;
  }
}

const sketch = (p5) => {
  const location = new PVector(100, 100);
  const velocity = new PVector(1, 3.3);
  
  window.p5 = p5;
    
  p5.setup = () => {
    p5.createCanvas(640,360);
    p5.background(255);
  }

  console.log(p5.width, p5.height);

  p5.draw = () => {
    console.log(p5.width, p5.height);
    p5.background(255);

    location.add(velocity);

    if ((location.x > p5.width) || (location.x < 0)) {
      velocity.x = velocity.x * -1;
    }

    if ((location.y > p5.height) || (location.y < 0)) {
      velocity.y = velocity.y * -1;
    }

    p5.stroke(0);
    p5.fill(175);

    p5.ellipse(location.x,location.y,16,16);
  }
}


export default sketch;