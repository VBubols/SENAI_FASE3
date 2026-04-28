import 'dotenv/config';
import express from 'express';
import router from './routes/usuarios.routes.js'

const app = express();
app.use(express.json());

app.use('/usuarios', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`Servidor rodando na porta: ${PORT}`)});