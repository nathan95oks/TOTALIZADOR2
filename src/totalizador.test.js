import totalizador from "./totalizador";

describe("totalizador de ventas",()=>{
it("deberia devolver la cantidad de productos y su precio ",()=>{
   expect(totalizador(10,30)).toEqual([10,30]);
 });

 it("deberia devolver la cantidad de productos y su precio",()=>{
    expect(totalizador(20,40)).toEqual([20,40]);
  });

});


