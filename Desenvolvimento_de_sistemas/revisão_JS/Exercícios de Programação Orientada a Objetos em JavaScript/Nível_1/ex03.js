class Produto {
    constructor(nome, valor){
        this.nome = nome;
        this.valor = valor;
    }
}

class CarrinhoDeCompras {
    constructor(){
        this.produtos = [];
    }

    adicionarProduto(produto){
        this.produtos.unshift(produto)
    }

    calcularPreco(){
        let total = 0

        for(const produto of this.produtos){
            total += produto.valor 
        }

        return `Total: R$${total}`

    }
}

const Carrinho = new CarrinhoDeCompras()

const Garrafa = new Produto('Garrafa', 10)
const Teclado = new Produto('Teclado', 10)

Carrinho.adicionarProduto(Garrafa)
Carrinho.adicionarProduto(Teclado)


console.log(Carrinho.produtos)
console.log(Carrinho.calcularPreco())