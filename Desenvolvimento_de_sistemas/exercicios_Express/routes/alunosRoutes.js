import express from 'express'
import * as controllerAlunos from '../controller/alunosController.js'

const router = express.Router()

router.get('/', controllerAlunos.listarAlunosController);
router.post('/', controllerAlunos.adicionarNovoAlunoController);

export default router