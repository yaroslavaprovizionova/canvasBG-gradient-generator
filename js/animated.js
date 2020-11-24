window.onload = () => new GradientAnimation();

let form = document.forms.canvasValues;
let hidebtn = document.querySelectorAll('.hide');
let hideBlock = document.querySelectorAll('.form-input-wr');

class GradientAnimation {
  constructor() {
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.circlesNum = prop.circlesNum;
    this.speed = prop.speed;
    this.minRadius = prop.minRadius;
    this.maxRadius = prop.maxRadius;

    this.setCanvasSize();
    this.createCircles();
    this.drawAnimation();

    window.onresize = () => {
      this.setCanvasSize();
      this.createCircles();
    }
  }

  setCanvasSize() {
    this.w = this.canvas.width = innerWidth * .8;
    this.h = this.canvas.height = innerHeight * .8;
    this.canvas.style.background = `rgba(17, 17, 23, 1)`;
  } 

  changeCanvasBGColor() {
    this.canvas.style.background = `${prop.bgColor}`;
  }

  createCircles() {
    this.circles = [];
    for (let i = 0; i < this.circlesNum; i++){
      this.circles.push(new Circle(this.w, this.h, this.minRadius, this.maxRadius));
    }
  }

  drawCircles() {
    this.circles.forEach(circle => circle.draw(this.ctx, this.speed));
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.w, this.h);
  }

  drawAnimation() {
    this.clearCanvas();
    this.drawCircles();
    this.changeCanvasBGColor();
    window.requestAnimationFrame(() => this.drawAnimation());
  }
}

class Circle {
  constructor(w, h, minR, maxR) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.angle = Math.random() * 2 * Math.PI;
    this.radius = Math.random() * (maxR - minR) + minR;
    this.firstColor = `hsla(${Math.random() * 360}, ${prop.firstСolorSat}, ${prop.firstСolorLight}, ${prop.firstСolorOp})`;
    this.secondColor = `hsla(${Math.random() * 360}, ${prop.secondСolorSat}, ${prop.secondСolorLight}, ${prop.secondСolorOp})`;
  }

  draw(ctx, speed ) {
    this.angle += speed;
    const x = this.x + Math.cos(this.angle) * 200;
    const y = this.y + Math.sin(this.angle) * 200;
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.radius);
    gradient.addColorStop(0, this.firstColor);
    gradient.addColorStop(1, this.secondColor);

    ctx.globalCompositeOperation = prop.overlayColor;
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }
}