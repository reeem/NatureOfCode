import Wave from './Wave';
import PVector from './PVector';

const Sketch = (p5) => {
  const waves = new Array(2);

  window.p5 = p5;

  p5.setup = () => {
    p5.createCanvas(600, 400);

    waves[0] = new Wave(new PVector(50, 75), 100, 20, 500);
    waves[1] = new Wave(new PVector(300, 100), 300, 40, 220);
  }

  p5.draw = () => {
    p5.background(255);

   	for (let i = 0; i<waves.length; i += 1) {
   		waves[i].calculate();
   		waves[i].display();
   	}
  }
}

export default Sketch;
