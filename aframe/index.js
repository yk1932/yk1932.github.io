
//Make selecting query easier
const $ = (query) => document.querySelector(query);

// Import necessary variables
const sphere = $('a-sphere');
const plane = $('a-plane');
const shiftDegrees = (value) => (value + 1) % 360;
let degrees = 0;
let faster = document.getElementById('faster');
let slower = document.getElementById('slower');
let bigger = document.getElementById('bigger');
let smaller = document.getElementById('smaller');
let colorchange = document.getElementById('colorchange');
let subtitle = document.getElementById('subtitle');
let speedDivide = 2000;
let color = `hsl(${degrees}, 20%, 30%)`;
let positionMinus = 4;


// Event listeners to buttons to alter speed and color of sphere
faster.addEventListener("click", () => {
    console.log(speedDivide);
    if (speedDivide > 200) {
        speedDivide = speedDivide - 200;
    } else {
        alert("maximum speed reached!!!!");
    }
    subtitle.innerHTML = (2000-speedDivide);

});

slower.addEventListener("click", () => {
    speedDivide = speedDivide + 200;
    console.log(speedDivide);
    subtitle.innerHTML = (2000-speedDivide);
});

bigger.addEventListener("click", () => {
    if (positionMinus > 1) {
    positionMinus = positionMinus - 1;
    subtitle.innerHTML = 10 - positionMinus;}
    else {subtitle.innerHTML = "TOOOO BIG!!!"};
});

smaller.addEventListener("click", () => {
    if (positionMinus < 10) {
    positionMinus = positionMinus + 1;
    subtitle.innerHTML = 10 - positionMinus;
} else {
    subtitle.innerHTML = "TOOOO SMALL!!!"
}
});

colorchange.addEventListener("click", () => {
    console.log(color);
    if (degrees < 360) {
        degrees = degrees + 30;
    } else {degrees = degrees - 30;}
    color = `hsl(${degrees}, 20%, 30%)`;
    sphere.setAttribute('color', color);
    subtitle.innerHTML = "Color is  "+ color;
});

// Animate 60 frames per second

const animate = () => {
  degrees = shiftDegrees(degrees);
  const variation = Math.sin(Date.now() / speedDivide);
  const position = `0 ${1.5 + variation} -${positionMinus}`;
  const rotation = `-90 0 ${degrees}`;
  sphere.setAttribute('color', color);
  sphere.setAttribute('position', position);
  sphere.setAttribute('rotation', rotation);
  requestAnimationFrame(animate);
};

requestAnimationFrame(animate);