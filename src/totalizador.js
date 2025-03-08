function totalizador(a, b, estado, categoria, pesoVolumetrico) {
  if (a <= 0 || b <= 0 || pesoVolumetrico < 0) {
    return 'INGRESE UN NUMERO VALIDO';
  }

  const impuestos = {
    AL: 0.04,
    NV: 0.0665,
    UT: 0.0685,
    CA: 0.0825,
    TX: 0.0625,
  };

  const categoriaDatos = {
    Alimentos: { impuesto: 0, descuento: 0.02 },
    'Bebidas alcohólicas': { impuesto: 0.07, descuento: 0 },
    'Material de escritorio': { impuesto: 0, descuento: 0.015 },
    Muebles: { impuesto: 0.03, descuento: 0 },
    Electrónicos: { impuesto: 0.04, descuento: 0.01 },
    Vestimenta: { impuesto: 0.02, descuento: 0 },
    Varios: { impuesto: 0, descuento: 0 }
  };

  const precioNeto = a * b;

  let descuento = 0;
  if (precioNeto >= 30000) {
    descuento = precioNeto * 0.15;
  } else if (precioNeto >= 10000) {
    descuento = precioNeto * 0.10;
  } else if (precioNeto >= 7000) {
    descuento = precioNeto * 0.07;
  } else if (precioNeto >= 3000) {
    descuento = precioNeto * 0.05;
  } else if (precioNeto >= 1000) {
    descuento = precioNeto * 0.03;
  }

  const precioConDescuento = precioNeto - descuento;

  const impuestoBase = impuestos[estado] || 0;
  const impuestoAdicional = categoriaDatos[categoria] ? categoriaDatos[categoria].impuesto : 0;
  const descuentoAdicional = categoriaDatos[categoria] ? categoriaDatos[categoria].descuento : 0;

  const precioConDescuentoAdicional = precioConDescuento - (precioConDescuento * descuentoAdicional);

  const impuesto = parseFloat((precioConDescuentoAdicional * (impuestoBase + impuestoAdicional)).toFixed(3));
  const precioSinEnvio = parseFloat((precioConDescuentoAdicional + impuesto).toFixed(3));

  // Cálculo del costo de envío
  let costoEnvioPorUnidad = 0;
  if (pesoVolumetrico >= 0 && pesoVolumetrico <= 10) {
    costoEnvioPorUnidad = 0;
  } else if (pesoVolumetrico >= 11 && pesoVolumetrico <= 20) {
    costoEnvioPorUnidad = 3.5;
  } else if (pesoVolumetrico >= 21 && pesoVolumetrico <= 40) {
    costoEnvioPorUnidad = 5;
  } else if (pesoVolumetrico >= 41 && pesoVolumetrico <= 80) {
    costoEnvioPorUnidad = 6;
  } else if (pesoVolumetrico >= 81 && pesoVolumetrico <= 100) {
    costoEnvioPorUnidad = 6.5;
  } else if (pesoVolumetrico >= 101 && pesoVolumetrico <= 200) {
    costoEnvioPorUnidad = 8;
  } else if (pesoVolumetrico > 200) {
    costoEnvioPorUnidad = 9;
  }

  const costoEnvioTotal = a * costoEnvioPorUnidad;
  const precioTotal = parseFloat((precioSinEnvio + costoEnvioTotal).toFixed(3));

  return [a, b, precioNeto, impuesto, precioTotal, costoEnvioTotal];
}

export default totalizador;