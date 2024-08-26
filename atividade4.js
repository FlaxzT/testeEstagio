const itensVendidos = [
    { sku: 1001, quantidade: 2 },
    { sku: 1002, quantidade: 1 },
    { sku: 1003, quantidade: 5 }
];

const estoque = [
    { sku: 1001, quantidade: 5 },
    { sku: 1002, quantidade: 2 },
    { sku: 1003, quantidade: 5 }
];

function atualizarEstoque(itensVendidos, estoque) {

    itensVendidos.forEach(({ sku, quantidade }) => {

        const itemEstoque = estoque.find(item => item.sku === sku);

        if (itemEstoque) {
            itemEstoque.quantidade -= quantidade;
        }
    });

    return estoque;
}