import sequelize from '../database/db.js';
import { Datatypes } from 'sequelize';

export const User = sequelize.define('User',
    {
        id: {
            type: Datatypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: Datatypes.STRING,
            allowNull: false
        },
        email: {
            type: Datatypes.STRING,
            unique: true,
            allowNull: false
        },
        senha: {
            type: Datatypes.STRING,
            allowNull: false
        }
    }
 );