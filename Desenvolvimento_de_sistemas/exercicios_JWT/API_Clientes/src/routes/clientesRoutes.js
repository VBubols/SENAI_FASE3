import express from 'express';
import { cadastrarCliente, login, perfil } from '../controllers/clientesController.js';
import { autenticar } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/cadastro', cadastrarCliente);
router.post('/login', login);
router.get('/perfil', autenticar, perfil);

export default router;