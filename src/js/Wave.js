const Sketch = (p5) => {
  let startAngle = 0;
  const angleVel = 0.1; 

  p5.setup = () => {
    p5.createCanvas(600, 400);
  }

  p5.draw = () => {
    p5.background(255);

    startAngle += angleVel;

    let angle = startAngle;
    let y;

    for (let x = 10; x <= (p5.width - 10); x += 1) {
      y = p5.map(p5.sin(angle), -1, 1, 10, p5.height - 10);
      p5.stroke(0);
      p5.fill(0, 50);
      p5.rect(x, y, 24, 24);
      angle += angleVel;
    }
  }
}

export default Sketch;