import * as model from '../model/produtosModel.js'

export function listarProdutosController(req, res){
    const { categoria } = req.query
    let produtosListar 

    if(categoria){
        produtosListar = model.listarProdutosCat(categoria)
    } else {
        produtosListar = model.listarProdutos()
    }

    res.status(200).json(produtosListar)
}

export function listarProdutosIdController(req, res){
    const {id} = req.params;
    if(!id){
        res.status(400).json({mensagem: "Requisição não pode ser processada!"})
    }

    const resultListId = model.listarProdutosId(id)
    if(!resultListId){
        res.status(400).json({mensagem: "Requisição não pode ser processada!"})
    }
    res.status(200).json(resultListId)
}