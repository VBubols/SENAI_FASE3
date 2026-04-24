import { User } from '../models/user.model.js';
import { Op } from 'sequelize';
import bcrypt from 'bcryptjs';

export async function getAllUsers(req, res) {
    try {
        const users = await User.findAll();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export async function getUserById(req, res) {
    try {
        const {id} = req.params;
        const userId = await User.findByPk(id);
        if(!userId){
            return res.status(404).json({mensagem: 'ID não encontrado!'});
        }
        return res.status(200).json(userId);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export async function createrUser(req, res) {
    try {
        const { nome, email, senha } = req.body;

        const existing = await User.findOne({ where: { email } });
        if (existing) {
            return res.status(400).json({ mensagem: 'Email já cadastrado' });
        }
        
        const senhaHash = await bcrypt.hash(senha, 10);
        const user = await User.create({nome, email, senha: senhaHash});

        const userResponse = user.toJSON();
        delete userResponse.senha;

        return res.status(201).json(userResponse);
    } catch (error) {
        return res.status(500).json(error)
    }
};

export async function updateUser(req, res) {
    try {
        const user = await User.findByPk(req.params.id);//Pega o ID por params
        const { nome, email } = req.body;//Pega o nome e email se vierem no body
        const updateData = {};
        
        if(!user){
            return res.status(404).json({mensagem: 'Usuário não encontrado!'});//Verificar se o usuario existe
        };

        // Verifica se existe outro usuário com o mesmo email (ignorando o usuário atual)
        if(email){
            const existing = await User.findOne({
                where: {
                    email: email,
                    id: { [Op.ne]: req.params.id }
                }
            });
            if (existing) {
                return res.status(400).json({ mensagem: 'Email já cadastrado' });
            } else{
                updateData.email = email;
            }
        };

        if(nome){updateData.nome = nome};//Se vier o nome no body popula o objeto
    
        await user.update(updateData);//Atualiza o user

        const userResponse = user.toJSON();
        delete userResponse.senha;//Deleta o campo da senha para o res

        return res.status(200).json(userResponse);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export async function updatePassword(req, res) {
    try {
        const { senhaAntiga, senhaNova } = req.body
        const user = await User.findByPk(req.params.id);
        if(!user){
            return res.status(404).json({mensagem: 'Usuário não encontrado!'});//Verificar se o usuario existe
        };

        const comparandoHash = await bcrypt.compare(senhaAntiga, user.senha)
        if (!comparandoHash) { 
            return res.status(400).json({ message: 'Senha atual incorreta!' });
        };

        const senhaHash = await bcrypt.hash(senhaNova, 10);
        await user.update({senha: senhaHash});

        return res.status(204).send();
    } catch (error) {
        return res.status(500).json(error)
    }
};

export async function deleteUser(req, res) {
    try {
        const userId = await User.findByPk(req.params.id);
        if(!userId){
            return res.status(404).json({mensagem: 'Usuário não encontrado!'});
        };
        await userId.destroy();
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json(error);
    }
};