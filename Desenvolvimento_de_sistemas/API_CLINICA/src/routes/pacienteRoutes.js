import * as controller from '../controllers/pacienteController.js'
import express from 'express'

const router = express.Router()

router.get('/', controller.listarPacientesController)
router.post('/', controller.adicionarPacientesController)

export default router
