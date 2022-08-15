// https://calculator.swiftutors.com/arc-length-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const arcLengthRadio = document.getElementById('arcLengthRadio');
const centralAngleRadio = document.getElementById('centralAngleRadio');
const radiusRadio = document.getElementById('radiusRadio');

let arcLength;
const PI = Math.PI;
let centralAngle = v1;
let radius = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

arcLengthRadio.addEventListener('click', function() {
  variable1.textContent = '(n°) Central Angle (degrees)';
  variable2.textContent = '(r) Radius (cm)';
  centralAngle = v1;
  radius = v2;
  result.textContent = '';
});

centralAngleRadio.addEventListener('click', function() {
  variable1.textContent = '(L) Arc Length (cm)';
  variable2.textContent = '(r) Radius (cm)';
  arcLength = v1;
  radius = v2;
  result.textContent = '';
});

radiusRadio.addEventListener('click', function() {
  variable1.textContent = '(L) Arc Length (cm)';
  variable2.textContent = '(n°) Central Angle (degrees)';
  arcLength = v1;
  centralAngle = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(arcLengthRadio.checked)
    result.textContent = `Arc Length = ${computeArcLength().toFixed(2)} cm`;

  else if(centralAngleRadio.checked)
    result.textContent = `Central Angle = ${computeCentralAngle().toFixed(2)} degrees`;

  else if(radiusRadio.checked)
    result.textContent = `Radius = ${computeRadius().toFixed(2)} cm`;
})

// calculation

function computeArcLength() {
  return (Number(centralAngle.value) / 360) * 2 * PI * Number(radius.value);
}

function computeCentralAngle() {
  return (Number(arcLength.value) * 360) / (2 * PI * Number(radius.value));
}

function computeRadius() {
  return Number(arcLength.value) / ((Number(centralAngle.value) / 360) * 2 * PI);
}