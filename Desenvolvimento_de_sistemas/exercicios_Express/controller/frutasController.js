import * as model from '../model/frutasModel.js'

export function listarFrutasController(req, res){
    const frutasListar = model.listarFrutas();
    res.status(200).json(frutasListar)
}

export function listarFrutasIdController(req, res){
    const {id} = req.params;
    if(!id){
        res.status(400).json({mensagem: "Requisição não pode ser processada!"})
    }

    const resultListId = model.listarFrutasId(id)
    if(!resultListId){
        res.status(400).json({mensagem: "Requisição não pode ser processada!"})
    }
    res.status(200).json(resultListId)
}