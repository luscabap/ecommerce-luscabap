export const conversorDinheiro = (dinheiro: number) => {
  const valorCorrigido = dinheiro.toFixed(2);
  const valor = `R$ ${valorCorrigido}`;
  return valor;
};