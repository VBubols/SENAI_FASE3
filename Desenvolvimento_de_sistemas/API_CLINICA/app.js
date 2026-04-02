import express from 'express'
import pacienteRoutes from './src/routes/pacienteRoutes.js'
import medicoRoutes from './src/routes/medicoRoutes.js'
import consultaRoutes from './src/routes/consultaRoutes.js'

const app = express()
app.use(express.json())

app.use('/pacientes', pacienteRoutes)
app.use('/medicos', medicoRoutes)
app.use('/consultas', consultaRoutes)

app.listen(3000, () => {console.log("Servidor rodando na porta 3000")})