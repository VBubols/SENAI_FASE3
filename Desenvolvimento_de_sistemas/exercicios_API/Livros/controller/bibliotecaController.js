import * as model from '..//model/bibliotecaModel.js'

export async function buscarTodosController(req, res){
    try {
        const todosLivros = await model.buscarTodos();
        return res.status(200).json(todosLivros);
    } catch (error) {
        return res.status(404).json(error);
    }
}

export async function buscarLivroIdController(req, res){
    try {
        const { id } = req.params;
        if(!id){
            return res.status(404).json({mensagem: 'Não foi possível localizar o ID'});
        }

        const resultId = await model.buscarLivroId(id);
        if(!resultId || resultId.length == 0){
            return res.status(404).json({mensagem: 'Não foi possível localizar o ID'});
        } else{
            return res.status(200).json(resultId);
        }
    } catch (error) {
        return res.status(404).json({mensagem: `Erro no buscarLivroIdController: ${error}`});
    }
}

export async function adicionarLivroController(req, res){
    try {
        const {titulo, autor, ano, disponivel} = req.body;
        if(!titulo || !autor || !ano || disponivel){
            return res.status(400).json({mensagem: 'Todos campos devem estar preenchidos!'})
        }
        const novoLivro = await model.adicionarLivro(titulo, autor, ano, disponivel);
        return res.status(201).json(novoLivro);
    } catch (error) {
        return res.status(404).json({mensagem: `Erro no adicionarLivroController: ${error}`});
    }
}