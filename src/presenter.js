//import sumar from "./sumador";
import totalizador from './totalizador';

const first = document.querySelector('#primer-numero');
const second = document.querySelector('#segundo-numero');
const estado = document.querySelector('#estado');
const form = document.querySelector('#totalizador-form');
const div = document.querySelector('#resultado-div');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  const estadoValue = estado.value;

  const resultado =totalizador(firstNumber ,secondNumber, estadoValue);

  if(Array.isArray(resultado)){
    const [cantidad , precio, precioNeto, impuesto, precioTotal]= resultado ;

    const descuento = precioNeto >= 30000 ? precioNeto * 0.15 : 0;
    const precioConDescuento = precioNeto - descuento;

     div.innerHTML = ` 
     <p>Esta es la cantidad: ${cantidad}</p> 
     <p>Este es el precio: ${precio}</p>
     <p>Precio Neto: ${precioNeto}</p>
     <p>Descuento: ${descuento.toFixed(2)}</p>
     <p>Precio con Descuento: ${precioConDescuento.toFixed(2)}</p>
     <p>Impuesto: ${impuesto}</p>
     <p>Precio Total: ${precioTotal}</p>`;
  }
  else{
    div.innerHTML = `<p style="color: red;">${resultado}</p>`;
  }

});
