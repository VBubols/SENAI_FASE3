import express from 'express'
import pacienteRoutes from './src/routes/pacienteRoutes.js'
import medicoRoutes from './src/routes/medicoRoutes.js'

const app = express()
app.use(express.json())

app.use('/pacientes', pacienteRoutes)
app.use('/medicos', medicoRoutes)

app.listen(3000, () => {console.log("Servidor rodando na porta 3000")})