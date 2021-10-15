const text = document.querySelector("#text");
const redLight = document.querySelector("#red");
const yellowLight = document.querySelector("#yellow");
const greenLight = document.querySelector("#green");
console.log(redLight);
console.log(yellowLight);
console.log(greenLight);
const colourChanger = () => {
  text.innerHTML = "trafic light";
  setTimeout(() => {
    text.innerHTML = "..stop..";
    text.style.color = "red";
    redLight.style.backgroundColor = "red";
    yellowLight.style.backgroundColor = "cornsilk";
    greenLight.style.backgroundColor = "cornsilk";
  }, 2000);
  setTimeout(() => {
    text.innerHTML = "..wait..";
    text.style.color = "yellow";
    redLight.style.backgroundColor = "cornsilk";
    yellowLight.style.backgroundColor = "yellow";
    greenLight.style.backgroundColor = "cornsilk";
  }, 3000);
  setTimeout(() => {
    text.innerHTML = "..go..";
    text.style.color = "green";
    redLight.style.backgroundColor = "cornsilk";
    yellowLight.style.backgroundColor = "cornsilk";
    greenLight.style.backgroundColor = "green";
  }, 5000);
};
setInterval(colourChanger, 10000);
