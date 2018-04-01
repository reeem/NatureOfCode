class PVector {
  constructor(x_, y_) {
    this.x = x_;
    this.y = y_;
  }
	
  add(V) {
    this.x = this.x + V.x;
    this.y = this.y + V.y;
  }

  sub(V) {
  	this.x = this.x - V.x;
  	this.y = this.y - V.y;
  }

  mult(n) {
  	this.x = this.x * n;
  	this.y = this.y * n;
  }

  div(n) {
  	this.x = this.x / n;
  	this.y = this.y / n;
  }

  mag() {
  	return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  normalize() {
    const m = this.mag();

    if (m !== 0) {
      this.div(m);
    }
  }

  heading() {
    return Math.atan2(this.y, this.x);
  }

  get() {
    return Object.assign({}, this);
  }
}

export default PVector;