import * as model from '../models/pacienteModel.js'

export function listarPacientesController(req, res){
    const pacientesLista = model.listarPacientes()
    return res.status(200).json(pacientesLista)
}

export function adicionarPacientesController(req, res){
    const {nome, telefone} = req.body
    if(!nome){
        return res.status(400).json({mensagem: "O campo nome é obrigatório!"})
    }
    const novoPaciente = model.adicionarPacientes(nome, telefone)
    return res.status(201).json(novoPaciente)
}