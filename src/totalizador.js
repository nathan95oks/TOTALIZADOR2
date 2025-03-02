function totalizador (a,b,estado){
 if((a <= 0 || b <= 0)){
    return "INGRESE UN NUMERO VALIDO" ;
 }

const impuestos = {
   AL: 0.04
};

const precioNeto = a*b;
const impuesto = precioNeto * (impuestos[estado] || 0);
const precioTotal = precioNeto + impuesto;

return [a,b,precioNeto,impuesto,precioTotal];
}
export default totalizador;