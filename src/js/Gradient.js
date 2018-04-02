import Wave from './Wave';
import PVector from './PVector';

const Sketch = (p5) => {
  const waves = new Array();

  window.p5 = p5;

  p5.setup = () => {
    p5.pixelDensity(1);
    p5.createCanvas(640, 640);

    waves[0] = new Wave(new PVector(50, 75), 100, 30, 500);
    waves[0].gradient();
    // gradient = p5.createImage(p5.width, p5.height);
  }

  // p5.draw = () => {
    // p5.background(200);

 		// waves[0].calculate();
 	  // waves[0].gradient();
  // }
}

export default Sketch;