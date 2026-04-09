import * as model from '../model/produtosModel.js'

export async function buscarTodosController(req, res){
    try {
        const todosProdutos = await model.buscarTodos();
        return res.status(200).json(todosProdutos);
    } catch (error) {
        return res.status(400).json({mensagem: 'Não foi possível localizar todos produtos.'})
    }
}

