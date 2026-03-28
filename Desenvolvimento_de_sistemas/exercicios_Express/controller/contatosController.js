import * as model from '../model/contatosModel.js'

export function listarContatosController(req, res){
    const contatosListar = model.listarContatos()
    res.status(200).json(contatosListar)
}

export function listarContatosIdController(req, res){
    const {id} = req.params
    if(!id){
        return res.status(400).json({mensagem: "Requisição não pode ser processada"})
    }
    const resultId = model.listarContatosId(id)
    if(!resultId){
        return res.status(400).json({mensagem: "Requisição não pode ser processada!"})
    }
    res.status(200).json(resultId)
}

export function adicionarNovoContatoController(req, res){
    const { nome, telefone, email } = req.body
    if(!nome || !telefone || !email){
        return res.status(400).json({mensagem: "Todos campos precisam ser preenchidos!"})
    }
    const novoContato = model.adicionarContatos(nome, telefone, email)
    res.status(201).json(novoContato)
}

export function atualizarContatosController(req, res){
    const {id} = req.params
    if(!id){
        return res.status(400).json({mensagem: "Requisição não pode ser processada"})
    }

    const dados = req.body
    if(!dados.nome || !dados.telefone || !dados.email){
        return res.status(400).json({mensagem: "Todos campos precisam ser preenchidos!"})
    }

    const contatoAtualizado = model.atualizarContatos(id, dados)
    if(!contatoAtualizado){
        return res.status(404).json({mensagem: "Contato não encontrado"})
    }
    res.status(200).json(contatoAtualizado)
}

export function deletarContatosController(req, res){
    const {id} = req.params
    if(!id){
        return res.status(400).json({mensagem: "Requisição não pode ser processada"})
    }
    const contatoDeletado = model.deletarContatos(id)
    return res.status(200).json(contatoDeletado)
}