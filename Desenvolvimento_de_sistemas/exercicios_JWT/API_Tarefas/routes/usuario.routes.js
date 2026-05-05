import express from 'express';
import { cadastrarCliente, login, perfil } from '../controllers/clientesController.js';
import { autenticar } from '../middlewares/authMiddleware.js';

const routerUser = express.Router();

routerUser.post('/cadastro', cadastrarCliente);
routerUser.post('/login', login);
routerUser.get('/perfil', autenticar, perfil);

export default routerUser;