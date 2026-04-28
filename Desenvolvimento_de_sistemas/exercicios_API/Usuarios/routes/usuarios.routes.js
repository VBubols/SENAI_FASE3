import * as controller from '../controller/usuarios.controller.js';
import express from 'express';

const router = express.Router();

router.get('/', controller.listarUsuarios);
router.post('/register', controller.cadastrarUsuario);
router.post('/login', controller.login);
router.put('/:id', controller.atualizar);

export default router;
