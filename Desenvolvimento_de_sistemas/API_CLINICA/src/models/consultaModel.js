import { consultas } from '../../DB/consulta.js'

export function listarConsultas() {
    return (consultas)
}

export function agendarConsultas(pacienteId, medicoId) {
    const novaConsulta = {id: consultas.length+1, pacienteId: pacienteId, medicoId: medicoId, data: new Date().toLocaleString('pt-BR'), status: "agendada"}
    consultas.push(novaConsulta)
    return novaConsulta
}

export function listarConsultaId(id) {
    const consultaId = consultas.find(con => con.id == id)
    return consultaId
}

export function cancelarConsulta(id) {
    const indice = consultas.findIndex(con => con.id == id)
    const consultaCancelada = consultas[indice]
    consultas.splice(indice, 1)
    return consultaCancelada
}