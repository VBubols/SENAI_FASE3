export class ProductService {
  constructor() {
    this.products = []
  }

  addProduct(nome, preco) {
    if (!nome || nome.trim() === '') {
      throw new Error('Nome é obrigatório')
    }
    if (preco <= 0) {
      throw new Error('Preço deve ser maior que zero')
    }
    const produto = { id: this.products.length + 1, nome, preco }
    this.products.push(produto)
    return { success: true, product: produto }
  }

  findByName(nome) {
    return this.products.find(p => p.nome === nome) ?? null
  }

  applyDiscount(preco, percentual) {
    if (percentual < 0 || percentual > 100) {
      throw new Error('Desconto inválido')
    }
    return preco - (preco * percentual) / 100
  }
}
