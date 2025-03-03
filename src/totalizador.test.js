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

it('debería aplicar un 10% de descuento para un total de 10,000', () => {
  expect(totalizador(100, 100, 'AL')).toEqual([100, 100, 10000, 360, 9360]);
});

it('debería aplicar un 7% de descuento para un total de 7,000', () => {
  expect(totalizador(70, 100, 'UT')).toEqual([70, 100, 7000, 445.935, 6955.935]);
});

it('debería aplicar un 5% de descuento para un total de 3,000 en UT', () => {
  expect(totalizador(30, 100, 'UT')).toEqual([30, 100, 3000, 195.225, 3045.225]);
});









});

