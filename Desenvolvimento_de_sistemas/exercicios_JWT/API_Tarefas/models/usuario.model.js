import db from '../config/db.js';
import bcrypt from 'bcryptjs';

export async function criar(nome, email, senha){
    try {
        //Primeiro converter a senha em hash
        const senhaHash = await bcrypt.hash(senha, 10);
        const query = `
        INSERT INTO usuarios (nome, email, senha_hash)
        VALUES ($1, $2, $3)
        RETURNING *;
        `;
        const values = [nome, email, senhaHash];
        const result = await db.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.log(`Erro no model criar: ${error}`)
    }
}

export async function buscarPorEmail(email){
    try {
        const result = await db.query(`SELECT * FROM usuarios WHERE email = $1`, [email]);
        return result.rows[0];
    } catch (error) {
        console.log(`Erro no model buscarPorEmail: ${error}`)
    }
}