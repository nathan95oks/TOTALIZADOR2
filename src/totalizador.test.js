import totalizador from './totalizador';

describe('totalizador de ventas', () => {
  it('debería devolver la cantidad de productos y su precio con impuesto de AL y categoría Alimentos', () => {
    expect(totalizador(10, 30, 'AL', 'Alimentos')).toEqual([10, 30, 300, 11.76, 305.76]);
  });

  it('debería devolver la cantidad de productos y su precio con impuesto de NV y categoría Bebidas alcohólicas', () => {
    expect(totalizador(20, 40, 'NV', 'Bebidas alcohólicas')).toEqual([20, 40, 800, 109.2, 909.2]);
  });

  it('debería devolver la cantidad de productos y su precio con impuesto de UT y categoría Material de escritorio', () => {
    expect(totalizador(15, 50, 'UT', 'Material de escritorio')).toEqual([15, 50, 750, 50.604, 789.354]);
  });

  it('debería devolver la cantidad de productos y su precio con impuesto de CA y categoría Muebles', () => {
    expect(totalizador(25, 60, 'CA', 'Muebles')).toEqual([25, 60, 1500, 163.688, 1618.688]);
  });

  it('debería devolver la cantidad de productos y su precio con impuesto de TX y categoría Electrónicos', () => {
    expect(totalizador(30, 70, 'TX', 'Electrónicos')).toEqual([30, 70, 2100, 206.705, 2223.335]);
  });

  it('debería aplicar un 15% de descuento y calcular el impuesto en AL con categoría Alimentos', () => {
    expect(totalizador(100, 300, 'AL', 'Alimentos')).toEqual([100, 300, 30000, 999.6, 25989.6]);
  });

  it('debería aplicar un 10% de descuento para un total de 10,000 con categoría Bebidas alcohólicas', () => {
    expect(totalizador(100, 100, 'AL', 'Bebidas alcohólicas')).toEqual([100, 100, 10000, 990, 9990]);
  });

  it('debería aplicar un 7% de descuento para un total de 7,000 con categoría Material de escritorio', () => {
    expect(totalizador(70, 100, 'UT', 'Material de escritorio')).toEqual([70, 100, 7000, 439.246, 6851.596]);
  });

  it('debería aplicar un 5% de descuento para un total de 3,000 con categoría Muebles', () => {
    expect(totalizador(30, 100, 'UT', 'Muebles')).toEqual([30, 100, 3000, 280.725, 3130.725]);
  });

  it('debería aplicar un 3% de descuento para un total de 1,000 con categoría Electrónicos', () => {
    expect(totalizador(10, 100, 'CA', 'Electrónicos')).toEqual([10, 100, 1000, 117.637, 1077.937]);
  });

  it('debería devolver la cantidad de productos y su precio con impuesto de AL y categoría Vestimenta', () => {
    expect(totalizador(50, 100, 'AL', 'Vestimenta')).toEqual([50, 100, 5000, 285, 5035]);
  });
});