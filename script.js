
let form = document.forms.canvasValues;
let hidebtn = document.querySelectorAll('.hide');
let hideBlock = document.querySelectorAll('.form-input-wr');

let prop = {
  circlesNum: 15,
  speed: 0.02,
  bgColor: `#ffc2c2`,
  minRadius: 300,
  maxRadius: 600,
  firstСolorSat: `100%`,
  firstСolorLight: `50%`,
  firstСolorOp: 1,
  secondСolorSat: `100%`,
  secondСolorLight: `50%`,
  secondСolorOp: 0,
  overlayColor: `overlay`,

  canvasBGColorChange() {
    prop.bgColor = form.bgColorChange.value;
    new GradientAnimation();
  },
  changeNumberCircles() {
    let numberValues = +form.circlesNumber.value;
    prop.changeNumber(numberValues); 
  },
  plusOne() {
    let numberValues = +form.circlesNumber.value;
    numberValues++;
    prop.changeNumber(numberValues);
  },
  minusOne() {
    let numberValues = +form.circlesNumber.value;
    if (numberValues >= 1) {
      numberValues--;
      prop.changeNumber(numberValues);
    }
  },
  changeNumber(num){
    prop.circlesNum = num;
    form.circlesNumber.value = num;
    new GradientAnimation();
  },
  changeSpeedValue() {
    let speedValue = +form.speedValue.value / 100;
    prop.changespeed(speedValue); 
  },
  plusSpeed() {
  let speedValues = +form.speedValue.value;
  speedValues = speedValues + 0.01;
  prop.changespeed(speedValues);
  },
  minusSpeed() {
  let speedValues = +form.speedValue.value;
    speedValues = speedValues - 0.01;
    prop.changespeed(speedValues);
  },
  changespeed(speed){
  prop.speed = speed;
  form.speedValue.value = parseFloat(speed.toFixed(3));
  new GradientAnimation();
  },
  changeMinRadiusValue() {
    let minRadiusValues = +form.minradiusValue.value;
    prop.changeMinRadius(minRadiusValues);
  },
  plusMinRadius() {
    let minRadiusValues = +form.minradiusValue.value;
    minRadiusValues = minRadiusValues + 10;
    prop.changeMinRadius(minRadiusValues);
  },
  minusMinRadius() {
    let minRadiusValues = +form.minradiusValue.value;
    if (minRadiusValues > 20) {
      minRadiusValues = minRadiusValues - 10;
      prop.changeMinRadius(minRadiusValues);
    }
  },
  changeMinRadius(value) {
    prop.minRadius = value;
    form.minradiusValue.value = value;
    new GradientAnimation();
  },
  changeMaxRadiusValue() {
    let maxRadiusValues = +form.maxradiusValue.value;
    prop.changeMaxRadius(maxRadiusValues);
  },
  plusMaxRadius() {
    let maxRadiusValues = +form.maxradiusValue.value;
    maxRadiusValues = maxRadiusValues + 10;
    prop.changeMaxRadius(maxRadiusValues);
  },
  minusMaxRadius() {
    let maxRadiusValues = +form.maxradiusValue.value;
    if (maxRadiusValues <= 50) {
      maxRadiusValues = 50;
      return;
    }
    maxRadiusValues = maxRadiusValues - 10;
    prop.changeMaxRadius(maxRadiusValues);
  },
  changeMaxRadius(value) {
    prop.maxRadius = value;
    form.maxradiusValue.value = value;
    new GradientAnimation();
  },
  firstСolor() {
    let firstСolorSat = form.firstСolorSat.value,
        firstСolorLight = form.firstСolorLight.value,
        firstСolorOp = +form.firstСolorOp.value;
    prop.changeFirstСolor(firstСolorSat, firstСolorLight, firstСolorOp);
  },
  changeFirstСolor(sat, light, op) {
    prop.firstСolorSat = sat;
    prop.firstСolorLight = light;
    prop.firstСolorOp = op;
    new GradientAnimation();
  },
  secondСolor() {
    let secondСolorSat = form.secondСolorSat.value,
        secondСolorLight = form.secondСolorLight.value,
        secondСolorOp = +form.secondСolorOp.value;
    prop.changeSecondСolor(secondСolorSat, secondСolorLight, secondСolorOp);
  },
  changeSecondСolor(sat, light, op) {
    prop.secondСolorSat = sat;
    prop.secondСolorLight = light;
    prop.secondСolorOp = op;
    new GradientAnimation();
  },
  changeOverlayColor() {
    let overlayColor = form.colorOverlay.value;
    prop.overlayColor = overlayColor;
    new GradientAnimation();
  }
};

form.bgColorChange.onchange = prop.canvasBGColorChange;

form.circlesNumber.oninput = prop.changeNumberCircles;
document.querySelector('.press1').onclick = prop.plusOne;
document.querySelector('.press-1').onclick = prop.minusOne;

form.speedValue.oninput = prop.changeSpeedValue;
document.querySelector('.pressSpeed').onclick = prop.plusSpeed;
document.querySelector('.pressSpeed-1').onclick = prop.minusSpeed;

form.minradiusValue.oninput = prop.changeMinRadiusValue;
document.querySelector('.minRadius10').onclick = prop.plusMinRadius;
document.querySelector('.minRadius-10').onclick = prop.minusMinRadius;

form.maxradiusValue.oninput = prop.changeMaxRadiusValue;
document.querySelector('.pressMaxRadius10').onclick = prop.plusMaxRadius;
document.querySelector('.pressMaxRadius-10').onclick = prop.minusMaxRadius;

form.firstСolorSat.onchange = prop.firstСolor;
form.firstСolorLight.onchange = prop.firstСolor;
form.firstСolorOp.onchange = prop.firstСolor;

form.secondСolorSat.onchange = prop.secondСolor;
form.secondСolorLight.onchange = prop.secondСolor;
form.secondСolorOp.onchange = prop.secondСolor;

form.colorOverlay.onchange = prop.changeOverlayColor;

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

window.onload = () => new GradientAnimation();

for (let i = 0; i < hidebtn.length; i++){
  hidebtn[i].addEventListener('click', function () {
    if (hideBlock[i].style.display == 'none') {
      hideBlock[i].style.display = 'flex';
      hidebtn[i].innerHTML = 'Скрыть'
    } else {
      hideBlock[i].style.display = 'none';
      hidebtn[i].innerHTML = 'Показать';
    }
  })
}

document.querySelector('.animation-item-1').addEventListener('click', function () {
  prop.circlesNum = 15;
  prop.speed = 0.03;
  prop.bgColor = `#ffc2c2`;
  prop.minRadius = 300;
  prop.maxRadius = 600;
  prop.firstСolorSat = `100%`;
  prop.firstСolorLight = `50%`;
  prop.firstСolorOp = 1;
  prop.secondСolorSat = `100%`;
  prop.secondСolorLight = `50%`;
  prop.secondСolorOp = 0;
  prop.overlayColor = `overlay`;

  form.circlesNumber.value = 15;
  form.speedValue.value = 0.03;
  form.bgColorChange.value = `#ffc2c2`;
  form.minradiusValue.value = 300;
  form.maxradiusValue.value = 600;
  form.firstСolorSat.value = `100%`;
  form.firstСolorLight.value = `50%`;
  form.firstСolorOp.value = 1;
  form.secondСolorSat.value = `100%`;
  form.secondСolorLight.value = `50%`;
  form.secondСolorOp.value = 0;
  form.colorOverlay.value = `overlay`;
  new GradientAnimation()
  });

document.querySelector('.animation-item-2').addEventListener('click', function () {
  prop.circlesNum = 25;
  prop.speed = 0.03;
  prop.bgColor = `#ff0000`;
  prop.minRadius = 220;
  prop.maxRadius = 330;
  prop.firstСolorSat = `100%`;
  prop.firstСolorLight = `50%`;
  prop.firstСolorOp = 1;
  prop.secondСolorSat = `80%`;
  prop.secondСolorLight = `20%`;
  prop.secondСolorOp = 0;
  prop.overlayColor = `lighter`;

  form.circlesNumber.value = 25;
  form.speedValue.value = 0.03;
  form.bgColorChange.value = `#ff0000`;
  form.minradiusValue.value = 220;
  form.maxradiusValue.value = 330;
  form.firstСolorSat.value = `100%`;
  form.firstСolorLight.value = `50%`;
  form.firstСolorOp.value = 1;
  form.secondСolorSat.value = `80%`;
  form.secondСolorLight.value = `20%`;
  form.secondСolorOp.value = 0;
  form.colorOverlay.value = `lighter`;
  new GradientAnimation();
});

document.querySelector('.animation-item-3').addEventListener('click', function () {
  prop.circlesNum = 120;
  prop.speed = 0.05;
  prop.bgColor = `#dbfff3`;
  prop.minRadius = 20;
  prop.maxRadius = 200;
  prop.firstСolorSat = `100%`;
  prop.firstСolorLight = `80%`;
  prop.firstСolorOp = 1;
  prop.secondСolorSat = `100%`;
  prop.secondСolorLight = `20%`;
  prop.secondСolorOp = 0;
  prop.overlayColor = `color-dodge`;

  form.circlesNumber.value = 120;
  form.speedValue.value = 0.05;
  form.bgColorChange.value = `#dbfff3`;
  form.minradiusValue.value = 20;
  form.maxradiusValue.value = 200;
  form.firstСolorSat.value = `100%`;
  form.firstСolorLight.value = `80%`;
  form.firstСolorOp.value = 1;
  form.secondСolorSat.value = `100%`;
  form.secondСolorLight.value = `20%`;
  form.secondСolorOp.value = 0;
  form.colorOverlay.value = `color-dodge`;
  new GradientAnimation();
});

document.querySelector('.animation-item-4').addEventListener('click', function () {
  prop.circlesNum = 30;
  prop.speed = 0.02;
  prop.bgColor = `#f0920f`;
  prop.minRadius = 250;
  prop.maxRadius = 250;
  prop.firstСolorSat = `10%`;
  prop.firstСolorLight = `100%`;
  prop.firstСolorOp = 1;
  prop.secondСolorSat = `80%`;
  prop.secondСolorLight = `50%`;
  prop.secondСolorOp = 0.1;
  prop.overlayColor = `multiply`;

  form.circlesNumber.value = 30;
  form.speedValue.value = 0.02;
  form.bgColorChange.value = `#f0920f`;
  form.minradiusValue.value = 250;
  form.maxradiusValue.value = 250;
  form.firstСolorSat.value = `10%`;
  form.firstСolorLight.value = `100%`;
  form.firstСolorOp.value = 1;
  form.secondСolorSat.value = `80%`;
  form.secondСolorLight.value = `50%`;
  form.secondСolorOp.value = 0.1;
  form.colorOverlay.value = `multiply`;
  new GradientAnimation();
});

document.querySelector('.animation-item-5').addEventListener('click', function () {
  prop.circlesNum = 65;
  prop.speed = 0.02;
  prop.bgColor = `#f67aff`;
  prop.minRadius = 150;
  prop.maxRadius = 250;
  prop.firstСolorSat = `100%`;
  prop.firstСolorLight = `100%`;
  prop.firstСolorOp = 1;
  prop.secondСolorSat = `100%`;
  prop.secondСolorLight = `60%`;
  prop.secondСolorOp = 0;
  prop.overlayColor = `luminosity`;

  form.circlesNumber.value = 65;
  form.speedValue.value = 0.02;
  form.bgColorChange.value = `#f67aff`;
  form.minradiusValue.value = 150;
  form.maxradiusValue.value = 250;
  form.firstСolorSat.value = `100%`;
  form.firstСolorLight.value = `100%`;
  form.firstСolorOp.value = 1;
  form.secondСolorSat.value = `100%`;
  form.secondСolorLight.value = `60%`;
  form.secondСolorOp.value = 0;
  form.colorOverlay.value = `luminosity`;
  new GradientAnimation();
});
