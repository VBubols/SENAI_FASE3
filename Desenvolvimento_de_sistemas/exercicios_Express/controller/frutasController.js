import * as model from '../model/frutasModel.js'

export function listarFrutasController(req, res){
    const frutasListar = model.listarFrutas();
    res.status(200).json(frutasListar)
}

export function listarFrutasIdController(req, res){
    const {id} = req.params;
    const resultListId = model.listarFrutasId(id)
    res.status(200).json(resultListId)
}