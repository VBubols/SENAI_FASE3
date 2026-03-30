import {medicos} from '../../DB/medico.js'

export function listarMedicos(){
    return (medicos)
}

export function listarMedicosEspecialidade(esp){
    const resultList = medicos.filter(med => med.especialidade == esp)
    return resultList
}