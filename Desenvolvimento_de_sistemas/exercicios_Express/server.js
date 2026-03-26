import express from 'express'
import * as controllerFrutas from './controller/frutasController.js'
import * as controllerAlunos from './controller/alunosController.js'

const app = express();
app.use(express.json());

//Ex01 - Frutas
app.get('/frutas', controllerFrutas.listarFrutasController);
app.get('/frutas/:id', controllerFrutas.listarFrutasIdController);

//Ex02 - Alunos
app.get('/alunos', controllerAlunos.listarAlunosController);
app.post('/alunos', controllerAlunos.adicionarNovoAlunoController);

app.listen(3000, () => {console.log('Servidor rodando na porta 3000')})