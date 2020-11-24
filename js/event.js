//Hide button
for (let i = 0; i < hidebtn.length; i++){
  hidebtn[i].addEventListener('click', function () {
    if (hideBlock[i].style.display == 'none') {
      hideBlock[i].style.display = 'flex';
      hidebtn[i].innerHTML = 'Скрыть';
    } else {
      hideBlock[i].style.display = 'none';
      hidebtn[i].innerHTML = 'Показать';
    }
  })
}

//Input onchange events
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

//Basic settings for 1 animation
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

//Basic settings for 2 animation
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

//Basic settings for 3 animation
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

//Basic settings for 4 animation
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

//Basic settings for 5 animation
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