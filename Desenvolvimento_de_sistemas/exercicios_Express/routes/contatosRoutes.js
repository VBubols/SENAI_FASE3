import * as controller from '../controller/contatosController.js'
import express from 'express'

const router = express.Router()

router.get('/', controller.listarContatosController)
router.get('/:id', controller.listarContatosIdController)
router.post('/', controller.adicionarNovoContatoController)
router.put('/:id', controller.atualizarContatosController)
router.delete('/:id', controller.deletarContatosController)

export default router
