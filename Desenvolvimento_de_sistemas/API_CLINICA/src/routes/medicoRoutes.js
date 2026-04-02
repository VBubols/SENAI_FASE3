import * as controller from '../controllers/medicoController.js'
import express from 'express'

const router = express.Router()

router.get('/', controller.listarMedicosController)
router.get('/:id', controller.listarMedicosIdController)

export default router