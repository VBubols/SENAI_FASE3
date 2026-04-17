import * as model from '../model/produtosModel.js'

export async function buscarTodosController(req, res){
    try {
        const todosProdutos = await model.buscarTodos();
        return res.status(200).json(todosProdutos);
    } catch (error) {
        return res.status(400).json({mensagem: 'Não foi possível localizar todos produtos.'})
    }
}

export async function buscarProdutoIdController(req, res) {
    try {
        const {id} = req.params;
        if(!id){
            return res.status(404).json({mensagem: 'Não foi possível localizar o ID'})
        }

        const resultId = await model.buscarProdutoId(id);
        if(!resultId){
            return res.status(404).json({mensagem: 'Não foi possível localizar o ID'})
        }

        return res.status(200).json(resultId);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export async function criarProdutoController(req, res) {
    try {
        const { nome, categoria, preco, quantidade } = req.body;
        if(!nome || !categoria || !preco || !quantidade){
            return res.status(422).json({mensagem: 'Requisição incompleta!'})
        }

        const result = await model.criarProduto(nome, categoria, preco, quantidade);
        if(!result){
            return res.status(400).json({mensagem: 'Erro ao cadastrar produto.'})
        }

        return res.status(201).json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

//ATUALIZAR PARA RETIRAR O ID DA URL E NAO DO BODY
export async function atualizarProdutoController(req, res) {
    try {
        const { id, novoNome, novaCategoria, novoPreco, novaQuantidade } = req.body;
        if(!id || !novoNome || !novaCategoria || !novoPreco || !novaQuantidade){
            return res.status(404).json({mensagem: 'Requisição incompleta!'})
        }

        const produtoExistente = await model.buscarProdutoId(id);
        if(!produtoExistente){
            return res.status(404).json({ message: 'Produto não encontrado' });
        }

        const result = await model.atualizarProduto(id, novoNome, novaCategoria, novoPreco, novaQuantidade);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export async function deletarProdutoController(req, res) {
    try {
        const {id} = req.params;
        if(!id){
            return res.status(404).json({mensagem: 'ID não encontrado!'})
        }

        const result = await model.deletarProduto(id);
        if(!result){
            return res.status(404).json({mensagem: 'Produto não encontrado!'})
        }

        return res.status(204).json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}