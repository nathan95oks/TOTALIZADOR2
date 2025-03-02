function totalizador (a,b,estado){
 if((a <= 0 || b <= 0)){
    return 'INGRESE UN NUMERO VALIDO';
 }

const impuestos = {
   AL: 0.04,
   NV: 0.0665,
   UT: 0.0685,
   CA: 0.0825
};

const precioNeto = a*b;
const impuesto = parseFloat((precioNeto * (impuestos[estado] || 0)).toFixed(3));
const precioTotal = precioNeto + impuesto;

return [a,b,precioNeto,impuesto,precioTotal];
}
export default totalizador;