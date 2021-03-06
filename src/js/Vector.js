
import p5 from 'p5';
import PVector from './PVector';

const Vector = (p5) => {
  const location = PVector(100, 100);
  const velocity = PVector(1, 3.3);
  
  window.p5 = p5;
    
  p5.setup = () => {
    p5.createCanvas(640,360);
    p5.background(255);
  }

  p5.draw = () => {
    p5.background(255);

    location.add(velocity);

    if ((location.x > p5.width) || (location.x < 0)) {
      velocity.x = velocity.x * -1;
    }

    if ((location.y > p5.height) || (location.y < 0)) {
      velocity.y = velocity.y * -1;
    }

    p5.stroke(10);
    p5.fill(175);

    p5.ellipse(location.x,location.y,25,25);
  }
}


export default Vector;