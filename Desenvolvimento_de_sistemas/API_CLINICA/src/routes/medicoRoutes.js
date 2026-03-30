import * as controller from '../controllers/medicoController.js'
import express from 'express'

const router = express.Router()

router.get('/', controller.listarMedicosController)

export default router