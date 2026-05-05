import express from 'express';
import { listar, criar, concluir } from '../controllers/tarefa.controller.js';
import { autenticar } from '../middlewares/authMiddleware.js';

const routerTarefa = express.Router();

routerTarefa.get('/', autenticar, listar);
routerTarefa.post('/', autenticar, criar);
routerTarefa.put('/:id', autenticar, concluir);


export default routerTarefa;