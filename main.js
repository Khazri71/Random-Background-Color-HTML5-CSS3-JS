//Variables
let btn = document.querySelector("button");

let colorComp = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let colorFina = [];
let colorBack = "";
const randomColor = () => {
  colorFina = [];
  for (let i = 0; i < 6; i++) {
    colorFina.push(colorComp[Math.floor(Math.random() * colorComp.length)]);
  }
  console.log(colorFina);
  colorBack = `#${colorFina.join("")}`;
  console.log(colorBack);
  document.body.style.backgroundColor = colorBack;
  btn.style.color = colorBack;
  btn.style.textShadow = `0px 2px 10px ${colorBack}`;
};
btn.addEventListener("click", randomColor);
