import express from 'express'
import frutasRoutes from './routes/frutasRoutes.js'
import alunosRoutes from './routes/alunosRoutes.js'
import produtosRoutes from './routes/produtosRoutes.js'
import contatosRoutes from './routes/contatosRoutes.js'

const app = express();
app.use(express.json());

app.use('/frutas', frutasRoutes);
app.use('/alunos', alunosRoutes);
app.use('/produtos', produtosRoutes)
app.use('/contatos', contatosRoutes)

app.listen(3000, () => {console.log('Servidor rodando na porta 3000')})