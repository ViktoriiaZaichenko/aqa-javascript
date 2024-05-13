let radius = 5.234;
let heigh = 10.785;
const PI = Math.PI;

function roundToTwoDecimals(num) {
  return Number((Math.round(num * 100) / 100).toFixed(2));
}

let roundedRadius = roundToTwoDecimals(radius); // 5.23
let roundedHeigh = roundToTwoDecimals(heigh); // 10.79

let volume = PI * Math.pow(roundedRadius, 2) * roundedHeigh;

console.log("Radius (rounded to 2 decimals):", roundedRadius);
console.log("Heigh (rounded to 2 decimals):", roundedHeigh);
console.log("Volume of the cylinder (rounded to 2 decimals):", volume.toFixed(2));