import * as controller from '../controller/bibliotecaController.js'
import express from 'express'

const router = express.Router()

router.get('/', controller.buscarTodosController)
router.get('/:id', controller.buscarLivroIdController)
router.post('/', controller.adicionarLivroController)

export default router

