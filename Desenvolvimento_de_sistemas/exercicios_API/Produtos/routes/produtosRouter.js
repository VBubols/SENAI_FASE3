import express from 'express'
import * as controller from '../controller/produtosController.js'

const router = express.Router();

router.get('/', controller.buscarTodosController);
router.get('/:id', controller.buscarProdutoIdController);
router.post('/', controller.criarProdutoController);
router.put('/', controller.atualizarProdutoController);
router.delete('/:id', controller.deletarProdutoController);

export default router;