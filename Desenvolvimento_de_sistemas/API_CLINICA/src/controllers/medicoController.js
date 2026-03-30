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