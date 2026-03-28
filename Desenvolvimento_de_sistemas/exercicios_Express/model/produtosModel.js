import { produtos } from '../DB/produtos.js'

export function listarProdutos(){
    return (produtos)
}

export function listarProdutosId(id){
    const resultId = produtos.find(prod => prod.id == id)
    return resultId
}

export function listarProdutosCat(cat){
    const resultCat = produtos.filter(prod => prod.categoria == cat)
    return resultCat
}