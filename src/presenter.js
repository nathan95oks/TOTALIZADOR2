//import sumar from "./sumador";
import totalizador from './totalizador';

const first = document.querySelector('#primer-numero');
const second = document.querySelector('#segundo-numero');
const estado = document.querySelector('#estado');
const categoria = document.querySelector('#categoria');
const pesoVolumetrico = document.querySelector('#peso-volumetrico'); 
const form = document.querySelector('#totalizador-form');
const div = document.querySelector('#resultado-div');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  const estadoValue = estado.value;
  const categoriaValue = categoria.value;
  const pesoVolumetricoValue = Number.parseInt(pesoVolumetrico.value); 


  const resultado =totalizador(firstNumber ,secondNumber, estadoValue, categoriaValue,pesoVolumetricoValue);

  if(Array.isArray(resultado)){
    const [cantidad , precio, precioNeto, impuesto, precioTotal,costoEnvio]= resultado ;

    const descuento = precioNeto >= 30000 ? precioNeto * 0.15 : 0;
    const precioConDescuento = precioNeto - descuento;

     div.innerHTML = ` 
     <p>Esta es la cantidad: ${cantidad}</p> 
     <p>Este es el precio: ${precio}</p>
     <p>Precio Neto: ${precioNeto}</p>
     <p>Descuento: ${descuento.toFixed(2)}</p>
     <p>Precio con Descuento: ${precioConDescuento.toFixed(2)}</p>
     <p>Impuesto: ${impuesto}</p>
     <p>Costo de Envío: ${costoEnvio.toFixed(2)}</p> 
     <p>Precio Total: ${precioTotal}</p>`;
  }
  else{
    div.innerHTML = `<p style="color: red;">${resultado}</p>`;
  }

});
