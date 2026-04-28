import dotenv from 'dotenv';
import express from 'express';
import router from './routes/clientesRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/clientes', router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
});