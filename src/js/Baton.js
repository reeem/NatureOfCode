// import p5 from 'p5';
import PVector from './PVector';
import Mover from './Mover';

const Sketch = (p5) => {
  window.p5 = p5;
  const movers = new Array(7);
  
  p5.setup = () => {
  	const sketch = p5.createCanvas(640, 360);

    sketch.parent('sketch');
    p5.frameRate(10);
  	p5.background(255);

    for (let i = 0; i<movers.length; i++) {
      movers[i] = new Mover(p5.random(0.1, 5), 0, 0);
    }
  }

  p5.draw = () => {
    p5.background(255);   

    for (let i=0; i<movers.length; i++) {
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
