import sumar from "./sumador";
import totalizador from "./totalizador";

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  div.innerHTML = "<p>" + totalizador(firstNumber ) + "</p>";
});
