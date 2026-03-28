import express from 'express'
import * as controllerProdutos from '../controller/produtosController.js'

const router = express.Router()

router.get('/', controllerProdutos.listarProdutosController)
router.get('/:id', controllerProdutos.listarProdutosIdController)

export default router