import bcrypt from 'bcryptjs';
import * as model from '../models/clientesModel.js'

export async function cadastrarClienteController(req, res){
    const { nome, email, senha } = req.body;

    try {
        const existingUser = await model.buscarPorEmail(email);
        if(existingUser){
            return res.status(400).json({mensagem: 'Usuário já existe'})
        }

        const user = await model.cadastrarCliente(nome, email, senha);
        delete user.senha; //necessário deletar a senha não criptografada

        return res.status(201).json({
            mensagem: 'Usuário criado com sucesso!',
            user
        });
    } catch (error) {
        console.log(`Erro no controller cadastrarCliente: ${error}`)
    }
}