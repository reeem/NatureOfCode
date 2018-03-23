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

export default PVector;