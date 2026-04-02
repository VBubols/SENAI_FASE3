import * as model from '../models/pacienteModel.js'

export function listarPacientesController(req, res){
    const pacientesLista = model.listarPacientes()
    return res.status(200).json(pacientesLista)
}

export function listarPacientesIdController(req, res) {
    const {id} = req.params
    if(!id){
        return res.status(404).json({mensagem: "Não foi possível processar a requisição!"})
    }

    const resultListId = model.listarPacientesId(id)
    if(!resultListId){
        return res.status(404).json({mensagem: "Não foi possível processar a requisição!"})
    }
    return res.status(200).json(resultListId)
}

export function adicionarPacientesController(req, res){
    const {nome, telefone} = req.body
    if(!nome){
        return res.status(400).json({mensagem: "O campo nome é obrigatório!"})
    }
    const novoPaciente = model.adicionarPacientes(nome, telefone)
    return res.status(201).json(novoPaciente)
}
