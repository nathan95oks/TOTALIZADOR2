import totalizador from './totalizador';

describe('totalizador de ventas', () => {
  it('debería devolver la cantidad de productos y su precio con impuesto de AL y categoría Alimentos', () => {
    expect(totalizador(10, 30, 'AL', 'Alimentos',5)).toEqual([10, 30, 300, 11.76, 305.76,0]);
  });

  it('debería devolver la cantidad de productos y su precio con impuesto de NV y categoría Bebidas alcohólicas', () => {
    expect(totalizador(20, 40, 'NV', 'Bebidas alcohólicas',15)).toEqual([20, 40, 800, 109.2, 979.2,70]);
  });

  it('debería devolver la cantidad de productos y su precio con impuesto de UT y categoría Material de escritorio', () => {
    expect(totalizador(15, 50, 'UT', 'Material de escritorio',25)).toEqual([15, 50, 750, 50.604, 864.354,75]);
  });

  it('debería devolver la cantidad de productos y su precio con impuesto de CA y categoría Muebles', () => {
    expect(totalizador(25, 60, 'CA', 'Muebles',50)).toEqual([25, 60, 1500, 163.688, 1768.688,150]);
  });

  it('debería devolver la cantidad de productos y su precio con impuesto de TX y categoría Electrónicos', () => {
    expect(totalizador(30, 70, 'TX', 'Electrónicos',100)).toEqual([30, 70, 2100, 206.705, 2418.335,195]);
  });

  it('debería aplicar un 15% de descuento y calcular el impuesto en AL con categoría Alimentos', () => {
    expect(totalizador(100, 300, 'AL', 'Alimentos',10)).toEqual([100, 300, 30000, 999.6, 25989.6,0]);
  });

  it('debería aplicar un 10% de descuento para un total de 10,000 con categoría Bebidas alcohólicas', () => {
    expect(totalizador(100, 100, 'AL', 'Bebidas alcohólicas',20)).toEqual([100, 100, 10000, 990, 10340,350]);
  });

  it('debería aplicar un 7% de descuento para un total de 7,000 con categoría Material de escritorio', () => {
    expect(totalizador(70, 100, 'UT', 'Material de escritorio',30)).toEqual([70, 100, 7000, 439.246, 7201.596,350]);
  });

  it('debería aplicar un 5% de descuento para un total de 3,000 con categoría Muebles', () => {
    expect(totalizador(30, 100, 'UT', 'Muebles',40)).toEqual([30, 100, 3000, 280.725, 3280.725,150]);
  });

  it('debería aplicar un 3% de descuento para un total de 1,000 con categoría Electrónicos', () => {
    expect(totalizador(10, 100, 'CA', 'Electrónicos',200)).toEqual([10, 100, 1000, 117.637, 1157.937,80]);
  });

  it('debería devolver la cantidad de productos y su precio con impuesto de AL y categoría Vestimenta', () => {
    expect(totalizador(50, 100, 'AL', 'Vestimenta',150)).toEqual([50, 100, 5000, 285, 5435,400]);
  });
});