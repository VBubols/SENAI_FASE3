import {pacientes} from '../../DB/paciente.js'

export function listarPacientes(){
    return (pacientes)
}

export function listarPacientesId(id) {
    const resultId = pacientes.find(pac => pac.id == id)
    return resultId
}

export function adicionarPacientes(nome, telefone){
    const novoPaciente = {id: pacientes.length+1, nome: nome, telefone: telefone}
    pacientes.push(novoPaciente)
    return novoPaciente
}