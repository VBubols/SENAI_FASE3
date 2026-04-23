import 'dotenv/config';
import express from 'express';
import sequelize from './database/db.js'
import routerUser from './routes/user.router.js'

const app = express();
app.use(express.json());

app.use('/usuarios', routerUser);

const port = process.env.PORT || 3000;
sequelize.sync({ alter:true }).then(() => {
    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
});