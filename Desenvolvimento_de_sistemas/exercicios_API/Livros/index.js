import dotenv from 'dotenv'
import express from 'express'
import bibliotecaRoutes from './routes/bibliotecaRouter.js'

dotenv.config({path: '../.env'})

const app = express();
app.use(express.json())

app.use('/livros', bibliotecaRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {console.log(`Servidor rodando na porta: ${PORT}`)})