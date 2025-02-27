import totalizador from "./totalizador";

describe("totalizador de ventas",()=>{
it("deberia devolver la cantidad de productos",()=>{
   expect(totalizador(10)).toEqual(10);
 });

 it("deberia devolver la cantidad de productos",()=>{
    expect(totalizador(20)).toEqual(20);
  });

});


