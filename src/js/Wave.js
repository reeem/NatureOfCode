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
}

export default Wave;