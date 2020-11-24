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

    minRadiusValues += 10;
    prop.changeMinRadius(minRadiusValues);
  },

  minusMinRadius() {
    let minRadiusValues = +form.minradiusValue.value;

    if (minRadiusValues > 20) {
      minRadiusValues -= 10;
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

    maxRadiusValues += 10;
    prop.changeMaxRadius(maxRadiusValues);
  },

  minusMaxRadius() {
    let maxRadiusValues = +form.maxradiusValue.value;

    if (maxRadiusValues <= 50) {
      maxRadiusValues = 50;
      return;
    }

    maxRadiusValues -= 10;
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