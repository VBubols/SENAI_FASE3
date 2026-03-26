import * as model from '../model/alunosModel.js';

export function listarAlunosController(req, res){
    const alunosListar = model.listarAlunos()
    res.status(200).json(alunosListar)
}

export function adicionarNovoAlunoController(req, res){
    const {nome, nota} = req.body
    if(!nome || !nota){
        res.status(400).json({mensagem: 'Requisição não pode ser processada.'})
    }
    const novoAluno = model.adicionarAlunos(nome, nota)
    res.status(201).json(novoAluno)
}