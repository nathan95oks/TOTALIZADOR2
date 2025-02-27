function totalizador (a,b){
 if((a && b) >=0 && (a>0) && ( b>0)){
    return [a,b]
 }
 else{
    return "INGRESE UN NUMERO VADLIDO" ;
 }
}
export default totalizador;