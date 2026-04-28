import * as model from '../model/usuarios.model.js';

export async function listarUsuarios(req, res) {
    try {
        const usuariosLista = await model.listarUsuarios();
        return res.status(200).json(usuariosLista);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function cadastrarUsuario(req, res){
    try {
        const { nome, email, senha } = req.body;
        const existing = await model.buscarPorEmail(email);
        if(existing){
            return res.status(400).json({mensagem: 'Email já cadastrado'})
        };

        const novoUsuario = await model.criarUsuario(nome, email, senha);
        if(!novoUsuario){
            return res.status(400).json({mensagem: 'Erro ao cadastrar usuário'})
        }
        return res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export async function login(req, res) {
    try {
        const { email, senha } = req.body;
        const user = await model.buscarPorEmail(email);
        if(!user){
            return res.status(400).json({mensagem: 'Usuário não encontrado'})
        };

        if(user.senha !== senha){
            return res.status(400).json({mensagem: 'Credenciais inválidas'})
        };

        return res.status(200).json({mensagem: 'Login feito!'})
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export async function atualizar(req, res) {
    try {
        const { id } = req.params;
        const { nome, email, senha} = req.body;
        
        if(!id){
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        
        if(!nome || !email  || !senha) {
            return res.status(404).json({mensagem: 'Requisição incompleta!'})
        }

        const result = await model.atualizarUsuario(id, nome, email, senha);
        if(!result){
            return res.status(400).json({mensagem: 'Erro ao atualizar usuário'})
        }
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
};