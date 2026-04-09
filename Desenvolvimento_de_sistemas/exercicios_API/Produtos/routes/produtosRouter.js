import express from 'express'
import * as controller from '../controller/produtosController.js'

const router = express.Router();

router.get('/', controller.buscarTodosController);

export default router;