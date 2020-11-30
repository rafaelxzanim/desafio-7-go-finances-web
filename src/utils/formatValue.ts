const formatValue = (value: number): string =>
  // const valueFormated = value.toLocaleString('pt-BR', {
  //   style: 'currency',
  //   currency: 'BRL',
  // });

  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export default formatValue;
