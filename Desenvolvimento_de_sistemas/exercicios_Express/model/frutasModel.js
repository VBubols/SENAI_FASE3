import { frutas } from '../DB/frutas.js'

export function listarFrutas(){
    return (frutas)
}

export function listarFrutasId(id){
    const resultId = frutas.find(frut => frut.id == id)
    return resultId
}