import totalizador from './totalizador';

describe('totalizador de ventas',()=>{
it('deberia devolver la cantidad de productos y su precio con impuesto de AL ',()=>{
   expect(totalizador(10,30, 'AL')).toEqual([10,30,300,12,312]);
 });

 it('deberia devolver la cantidad de productos y su precio con impuesto de NV ',()=>{
  expect(totalizador(20,40, 'NV')).toEqual([20,40,800,53.2,853.2]);
});

it('deberia devolver la cantidad de productos y su precio con impuesto de UT ',()=>{
  expect(totalizador(15,50, 'UT')).toEqual([15, 50, 750, 51.375, 801.375]);
});

it('deberia devolver la cantidad de productos y su precio con impuesto de CA ',()=>{
  expect(totalizador(25,60, 'CA')).toEqual([25, 60, 1500, 123.75, 1623.75]);
});

it('deberia devolver la cantidad de productos y su precio con impuesto de TX ',()=>{
  expect(totalizador(30,70, 'TX')).toEqual([30, 70, 2100, 131.25, 2231.25]);
});

it('debería aplicar un 15% de descuento y calcular el impuesto en AL', () => {
  expect(totalizador(100, 300, 'AL')).toEqual([100, 300, 30000, 1020, 26520]);
});






});

