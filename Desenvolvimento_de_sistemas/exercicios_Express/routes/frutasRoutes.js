import express from 'express'
import * as controllerFrutas from '../controller/frutasController.js'

const router = express.Router()

router.get('/', controllerFrutas.listarFrutasController);
router.get('/:id', controllerFrutas.listarFrutasIdController);

export default router