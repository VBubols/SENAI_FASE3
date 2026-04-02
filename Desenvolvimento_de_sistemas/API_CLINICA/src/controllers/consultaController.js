import * as modelConsulta from '../models/consultaModel.js'
import * as modelMedico from '../models/medicoModel.js'
import * as modelPaciente from '../models/pacienteModel.js'

export function listarConsultasController(req, res){
    const listaConsultas = modelConsulta.listarConsultas().map((consulta) => {
        let pacienteNome = modelPaciente.listarPacientesId(consulta.pacienteId)
        let medicoNome = modelMedico.listarMedicosId(consulta.medicoId)

        return {
            id: consulta.id,
            pacidenteId: consulta.pacienteId,
            pacienteNome: pacienteNome.nome,
            medicoId: consulta.medicoId,
            medicoNome: medicoNome.nome,
            data: consulta.data,
            status: consulta.status
        }
    })
    return res.status(200).json(listaConsultas)
}

export function agendarConsultasController(req, res) {
    const {pacienteId, medicoId} = req.body
    const paciente = modelPaciente.listarPacientesId(pacienteId)
    const medico = modelMedico.listarMedicosId(medicoId)

    if(!paciente || !medico){
        return res.status(404).json({mensagem: "Paciente ou médico não encontrado!"})
    }

    const novaConsulta = modelConsulta.agendarConsultas(paciente.id, medico.id)
    return res.status(201).json(novaConsulta)
}

export function listarConsultaIdController(req, res) {
    const {id} = req.params
    if(!id){
        return res.status(404).json({mensagem: "Requisição não pode ser processada"})
    }

    const resultListId = modelConsulta.listarConsultaId(id)
    if(!resultListId){
        return res.status(404).json({mensagem: "Requisição não pode ser processada"})
    }
    return res.status(200).json(resultListId)
}

export function cancelarConsultaController(req, res) {
        const {id} = req.params
    if(!id){
        return res.status(404).json({mensagem: "Requisição não pode ser processada"})
    }

    const resultListId = modelConsulta.cancelarConsulta(id)
    if(!resultListId){
        return res.status(404).json({mensagem: "Requisição não pode ser processada"})
    }
    return res.status(200).json(resultListId)
}