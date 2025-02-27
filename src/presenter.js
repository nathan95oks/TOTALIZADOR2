import sumar from "./sumador";
import totalizador from "./totalizador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  const resultado =totalizador(firstNumber ,secondNumber);

  if(Array.isArray(resultado)){
    const [cantidad , precio ]= resultado ;
     div.innerHTML = ` <p>Esta es la cantidad: ${cantidad}</p> <p>Este es el precio: ${precio}</p>`;
  }
  else{
    div.innerHTML = `<p style="color: red;">${resultado}</p>`;
  }

 

});
