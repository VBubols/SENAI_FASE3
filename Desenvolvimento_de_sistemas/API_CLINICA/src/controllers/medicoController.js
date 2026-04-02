import * as model from '../models/medicoModel.js'

export function listarMedicosController(req, res){
    const {especialidade} = req.query
    let listarMedicos

    if(especialidade){
        listarMedicos = model.listarMedicosEspecialidade(especialidade)
    } else {
        listarMedicos = model.listarMedicos()
    }

    return res.status(200).json(listarMedicos)
}

export function listarMedicosIdController(req, res) {
    const {id} = req.params
    if(!id){
        return res.status(404).json({mensagem: "Não foi possível processar a requisição!"})
    }

    const resultListId = model.listarMedicosId(id)
    if(!resultListId){
        return res.status(404).json({mensagem: "Não foi possível processar a requisição!"})
    }
    return res.status(200).json(resultListId)
}