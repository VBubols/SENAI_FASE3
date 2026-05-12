import dotenv from 'dotenv';
import express from 'express';
import routerUser from './routes/usuario.routes.js';
import routerTarefa from './routes/tarefa.routes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/tarefas', routerTarefa);
app.use('/usuarios', routerUser);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
});