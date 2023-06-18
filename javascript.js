//**SELECTORS */
const pFirst = document.querySelector(".first");
const pSecond = document.querySelector(".second");
const h1 = document.querySelector("h1");
const container = document.querySelector(".buttons-container");
//console.log(container);

//******EVENTS */
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("num")) {
    h1.innerText += e.target.innerText;
  } else if (e.target.classList.contains("operator") && h1.innerText != "") {
    pFirst.innerText = h1.innerText;
    pSecond.innerText = e.target.innerText;
    h1.innerText = "";
  } else if (e.target.innerText == "AC") {
    pFirst.innerText = "";
    pSecond.innerText = "";
    h1.innerText = "";
  } else if ((e.target.innerText == "%") & (h1.innerText != "")) {
    h1.innerText = +h1.innerText / 100;
  } else if (e.target.innerText == "=") {
    calculate();
    pFirst.innerText = "";
    pSecond.innerText = "";
  } else if (e.target.innerText == ".") {
    h1.innerText != "" ? (h1.innerText += ".") : (h1.innerText = "0.");
  } else if ((e.target.innerText == "±") & (h1.innerText != "")) {
    h1.innerText = h1.innerText * -1;
  }
});

//****Fonktions */

const calculate = () => {
  switch (pSecond.innerText) {
    case "+":
      h1.innerText = +pFirst.innerText + +h1.innerText;
      break;
    case "-":
      h1.innerText = +pFirst.innerText - +h1.innerText;
      break;
    case "x":
      h1.innerText = +pFirst.innerText * +h1.innerText;
      break;
    case "÷":
      h1.innerText = (+pFirst.innerText / +h1.innerText).toFixed(2);
  }
};
