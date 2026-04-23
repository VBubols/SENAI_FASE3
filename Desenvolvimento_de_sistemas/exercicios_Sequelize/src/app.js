import 'dotenv/config';
import express from 'express';
import sequelize from './database/db.js'

const app = express();
app.use(express.json());

console.log(`PORTA: ${process.env.PORT}`)
console.log(`USER: ${process.env.DB_USER}`)
console.log(`PASSWORD: ${process.env.DB_PASSWORD}`)
const port = process.env.PORT || 3000;
sequelize.sync({ alter:true }).then(() => {
    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
});