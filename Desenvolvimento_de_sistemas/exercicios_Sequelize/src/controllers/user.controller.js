import { User } from '../models/user.model.js';

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
        const user = await User.create({nome, email, senha});
        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json(error)
    }
};

export async function updateUser(req, res) {
    try {
        const userId = await User.findByPk(req.params.id);
        if(!userId){
            return res.status(404).json({mensagem: 'Usuário não encontrado!'});
        };
        const { nome, email, senha } = req.body;
        await userId.update({nome, email, senha});
        return res.status(201).json(userId);
    } catch (error) {
        return res.status(500).json(error);
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