function totalizador(a, b, estado) {
   if (a <= 0 || b <= 0) {
     return 'INGRESE UN NUMERO VALIDO';
   }
 
   const impuestos = {
     AL: 0.04,
     NV: 0.0665,
     UT: 0.0685,
     CA: 0.0825,
     TX: 0.0625,
   };
 
   const precioNeto = a * b;
 
   let descuento = 0;
   if (precioNeto >= 30000) 
     descuento = precioNeto * 0.15;
   else if ((precioNeto >= 10000) && (precioNeto <30000)) descuento =precioNeto *0.10;
   else if ((precioNeto >= 7000) && (precioNeto <10000)) descuento =precioNeto *0.07;
   else if ((precioNeto >= 3000) && (precioNeto <70000)) descuento =precioNeto *0.05;
   else if ((precioNeto >= 1000) && (precioNeto <3000)) descuento =precioNeto *0.03;

 
   const precioConDescuento = precioNeto - descuento;
 
   const impuesto = parseFloat((precioConDescuento * (impuestos[estado] || 0)).toFixed(3));
 
   const precioTotal = precioConDescuento + impuesto;
 
   return [a, b, precioNeto, impuesto, parseFloat(precioTotal.toFixed(3))];
 }
 
 export default totalizador;
 