import * as controller from '../controllers/consultaController.js'
import express from 'express'

const router = express.Router()

router.get('/', controller.listarConsultasController)
router.get('/:id', controller.listarConsultaIdController)
router.post('/', controller.agendarConsultasController)
router.delete('/:id', controller.cancelarConsultaController)

export default router