import * as controller from '../controllers/pacienteController.js'
import express from 'express'

const router = express.Router()

router.get('/', controller.listarPacientesController)
router.get('/:id', controller.listarPacientesIdController)
router.post('/', controller.adicionarPacientesController)

export default router
