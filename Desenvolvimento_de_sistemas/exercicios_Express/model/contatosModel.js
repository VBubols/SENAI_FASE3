import { contatos } from '../DB/contatos.js'

export function listarContatos(){
    return (contatos)
}

export function listarContatosId(id){
    const resultId = contatos.find(cont => cont.id == id)
    return resultId
}

export function adicionarContatos(nome, telefone, email){
    const novoContato = {id: contatos.length+1, nome: nome, telefone: telefone, email: email}
    contatos.push(novoContato)
    return novoContato
}

//CRIAR VERIFICAÇÃO DE INFORMAÇÕES
export function atualizarContatos(id, dados){
    const resultId = contatos.find(cont => cont.id == id)
    if(dados.nome){
        resultId.nome = dados.nome
    }
    if(dados.telefone){
        resultId.telefone = dados.telefone
    }
    if(dados.email){
        resultId.email = dados.email
    }
    return resultId
}

// export function atualizarContatos(id, dados){
//     const resultId = contatos.find(cont => cont.id == id)

//     if (!resultId) {
//         return null
//     }

//     if (dados.nome !== undefined){
//         resultId.nome = dados.nome
//     }

//     if (dados.telefone !== undefined){
//         resultId.telefone = dados.telefone
//     }

//     if (dados.email !== undefined){
//         resultId.email = dados.email
//     }

//     return resultId
// }

export function deletarContatos(id){
    const resultId = contatos.findIndex(cont => cont.id == id)
    if(resultId == -1){
        return null
    }
    const contatoRemovido = contatos.splice(resultId, 1)
    return contatoRemovido[0]
}