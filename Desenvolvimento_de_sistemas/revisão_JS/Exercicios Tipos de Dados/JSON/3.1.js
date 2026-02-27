const pedido = { id: 501, produto: "Notebook", quantidade: 1, pago: true }

let pedidoString = JSON.stringify(pedido)
console.log(pedidoString);
console.log(typeof pedidoString);