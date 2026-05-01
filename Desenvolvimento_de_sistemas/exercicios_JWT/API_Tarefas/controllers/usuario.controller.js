import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as model from '../models/clientesModel.js';

export async function cadastrar(req, res){
    const { nome, email, senha } = req.body;

    try {
        const existingUser = await model.buscarPorEmail(email);
        if(existingUser){
            return res.status(400).json({mensagem: 'Usuário já existe'})
        }

        const user = await model.criar(nome, email, senha);
        delete user.senha; //necessário deletar a senha não criptografada

        return res.status(201).json({
            mensagem: 'Usuário criado com sucesso!',
            user
        });
    } catch (error) {
        console.log(`Erro no controller criar: ${error}`)
    }
};

export async function login(req, res) {
    const { email, senha } = req.body;

    try {
        const user = await model.buscarPorEmail(email);
        if(!user){
            return res.status(404).json({mensagem: 'Usuário não encontrado'})
        };

        const compararSenha = bcrypt.compare(senha, user.senha);
        if(!compararSenha){
            return res.status(400).json({mensagem: 'Credenciais inválidas'})
        };
        delete user.senha;

        const userToken = jwt.sign(
            user,
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        res.json({token: userToken, user: user});

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export async function perfil(req, res) {
    try {
        return res.status(200).json(req.user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}