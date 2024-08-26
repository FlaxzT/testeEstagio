function cFinanciamento(ValorProduto, QuantidadeParcelas, Taxa) {
  const p = ValorProduto;
  const i = Taxa / 100;

  const ValorTotal = p * (((1 + i) ** QuantidadeParcelas - 1) / i);

  return ValorTotal;
}

const ValorProduto = 1350;
const QuantidadeParcelas = 10; 
const Taxa = 1.3; 

const vFinanciamento = cFinanciamento(ValorProduto, QuantidadeParcelas, Taxa);
console.log(`O valor total será: R$ ${vFinanciamento.toFixed(2)}`);
