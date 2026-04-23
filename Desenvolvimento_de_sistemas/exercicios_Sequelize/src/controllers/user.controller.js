import { User } from '../models/user.model.js';

export async function getAllUsers(req, res) {
    try {
        const users = await User.findAll();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json(error)
    }
}