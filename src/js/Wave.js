class Wave {
  constructor(PVector, width, amplitude, period) {
  	this.origin = PVector.get(); // 파장의 시작 위치
  	this.width = width; // 파장의 넓이
  	this.amplitude = amplitude; // 파장의 높이
  	this.period = period; // pixels

  	this.xspacing = 8;
  	this.dx = (p5.TWO_PI / this.period) * this.xspacing; // 

  	this.len = parseInt(this.width/(this.xspacing), 10);

  	this.yvalues = new Array(this.len);
  	this.theta = 0;
  }

  calculate() {
  	this.theta += 0.02;

  	let x = this.theta;

  	for (let i = 0; i < this.len; i += 1) {
  		this.yvalues[i] = this.amplitude * Math.sin(x);
  		x += this.dx;
  	}
  }

  display() {
    for (let x = 0; x < this.len; x += 1) {
      p5.stroke(0);
      p5.fill(0, 50);
      p5.ellipseMode(p5.CENTER);
      p5.ellipse(this.origin.x + (x * this.xspacing), this.origin.y + this.yvalues[x], 48, 48);
    }
  }

  gradient() {
    const fillGap = 3.5;
    let c = null;
    let frequency = 0;

    // p5.colorMode(p5.RGB, 255);
    p5.loadPixels();

    for (let i = -75; i < p5.height + 75; i += 1) {
      let angle = 0;
      frequency += 0.002;
      for (let j = -75; j < p5.width + 75; j += 1) {
        let py = i + Math.sin(p5.radians(angle)) * this.amplitude;
        angle += frequency;
        c = p5.color(Math.abs(py - i) * 255 / this.amplitude, 255 - Math.abs(py - i) * 255 / this.amplitude, j * (255 / (p5.width + 50)));
        // Hack to fill gaps. Raise value of fillGap if you increase frequency
        for (let filler = 0; filler < fillGap; filler += 1){
          // console.log(i, j, filler);
          p5.set(parseInt(j - filler), parseInt(py) - filler, c);
          p5.set(parseInt(j), parseInt(py), c);
          p5.set(parseInt(j + filler), parseInt(py) + filler, c);
        }
      }
    }

    p5.updatePixels();
  }
}

export default Wave;