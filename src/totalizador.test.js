import totalizador from "./totalizador";

describe("totalizador de ventas",()=>{
it("deberia devolver la cantidad de productos y su precio con impuesto de AL ",()=>{
   expect(totalizador(10,30, "AL")).toEqual([10,30,300,12,312]);
 });


});

