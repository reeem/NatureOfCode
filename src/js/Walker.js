import p5 from 'p5';
import PVector from './PVector';

class Walker {
  constructor() {
  	this.location = new PVector(450, 450);
	this.velocity = new PVector(1, 1);
  }

  step(V) {
  	const choice = Math.floor(Math.random() * (4) + 1);	
    
    switch(choice) {
    	case 0:
    	  this.velocity.x = 1;
    	break;
    	
    	case 1:
    	  this.velocity.x = -1;
    	break;
    	
    	case 2:
    	  this.velocity.y = 1;
    	break;
    	
    	default:
    	  this.velocity.y = -1;
    }

    if (this.location.x < 0) this.velocity.x = 1;
    if (this.location.x > 600) this.velocity.x = -1;
    if (this.location.y < 0) this.velocity.y = 1;
    if (this.location.y > 900) this.velocity.y = -1;

    this.location.add(this.velocity);
  }
}

const Sketch = (p5) => {
  const w = new Walker(300, 450);

  window.p5 = p5;
  
  p5.setUp = () => {
  	p5.createCanvas(windowWidth, windowHeight);
  	p5.background(125);
  	p5.point(w.location.x, w.location.y);
  }

  p5.draw = () => {
    w.step();
    p5.stroke(0);
    p5.strokeWeight(10);
    console.log(w.location.x, w.location.y);
    p5.point(w.location.x, w.location.y);
  }
}

export default Sketch;
