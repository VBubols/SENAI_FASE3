import {medicos} from '../../DB/medico.js'

export function listarMedicos(){
    return (medicos)
}

export function listarMedicosId(id) {
    const resultId = medicos.find(med => med.id == id)
    return resultId
}

export function listarMedicosEspecialidade(esp){
    const resultList = medicos.filter(med => med.especialidade == esp)
    return resultList
}