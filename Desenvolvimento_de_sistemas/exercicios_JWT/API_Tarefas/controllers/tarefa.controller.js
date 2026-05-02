import * as model from '../models/tarefa.model.js';

export async function listar(req, res) {
    try {
        const userList = await model.buscarPorUsuario(req.user.id);
        if(!userList){
            return res.status(404).json({mensagem: 'Não foi possível localizar o usuário!'});
        };

        return res.status(200).json(userList);
    } catch (error) {
        return res.status(500).json(`Error: ${error}`);
    }
};

export async function criar(req, res) {
    try {
        const tarefa = await model.criarTarefa(req.body.descricao, req.user.id);
        if(!tarefa){
            return res.status(400).json({mensagem: 'Erro ao criar tarefa!'});
        };

        return res.status(201).json(tarefa);
    } catch (error) {
        return res.status(500).json(`Error: ${error}`);
    }
};

export async function concluir(req, res) {
    try {
        const tarefaConcluida = await model.concluirTarefa(req.params.id, req.user.id);
        if(!tarefaConcluida || tarefaConcluida.rowCount == 0 ){
            return res.status(400).json({mensagem: 'Não foi possível concluir a tarefa!'});
        };
        return res.status(200).json(tarefaConcluida);
    } catch (error) {
        return res.status(500).json(`Error: ${error}`);
    }
}