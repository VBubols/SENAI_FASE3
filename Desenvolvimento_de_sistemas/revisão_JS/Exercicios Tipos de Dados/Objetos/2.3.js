const produto = { nome: "Mouse", preco: 50, desconto: 5 };

delete produto.desconto
produto.preco = 55
console.log(produto);