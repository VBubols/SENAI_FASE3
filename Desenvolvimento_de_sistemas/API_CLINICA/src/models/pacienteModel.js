import {pacientes} from '../../DB/paciente.js'

export function listarPacientes(){
    return (pacientes)
}

export function adicionarPacientes(nome, telefone){
    const novoPaciente = {id: pacientes.length+1, nome: nome, telefone: telefone}
    pacientes.push(novoPaciente)
    return novoPaciente
}