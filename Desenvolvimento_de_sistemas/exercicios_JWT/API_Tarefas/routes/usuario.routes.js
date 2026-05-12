import express from 'express';
import { cadastrar, login, perfil } from '../controllers/usuario.controller.js';
import { autenticar } from '../middlewares/authMiddleware.js';

const routerUser = express.Router();

routerUser.post('/cadastro', cadastrar);
routerUser.post('/login', login);
routerUser.get('/perfil', autenticar, perfil);

export default routerUser;