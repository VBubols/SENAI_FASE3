import pool from '../../db_con.js';

export async function listarUsuarios() {
    try {
        const usuarios = await pool.query('SELECT * FROM usuarios');
        return usuarios.rows;
    } catch (error) {
        console.log(`Erro ao listar usuários: ${error}`);
    }
}

export async function criarUsuario(nome, email, senha){
    try {
        const novoUsuario = await pool.query(`
        INSERT INTO usuarios (nome, email, senha)
        VALUES ($1, $2, $3)
        RETURNING *`, [nome, email, senha]);
        return novoUsuario.rows[0];
    } catch (error) {
        console.log(`Erro ao cadastrar usuário: ${error}`);
    }
};

export async function buscarPorEmail(email){
    try {
        const usuarioEmail = await pool.query(`SELECT * FROM usuarios WHERE email = $1`, [email]);
        return usuarioEmail.rows[0];
    } catch (error) {
        console.log(`Erro ao buscar email: ${error}`);
    }
};

export async function buscarPorId(id){
    try {
        const usuarioId = await pool.query(`SELECT * FROM usuarios WHERE id = $1`, [id]);
        return usuarioId.rows[0];
    } catch (error) {
        console.log(`Erro ao buscar email: ${error}`);
    }
};

export async function atualizarUsuario(id, nome, email, senha){
    try {
        const query = `
            UPDATE usuarios
            SET nome = $1, email = $2, senha = $3
            WHERE id = $4
            RETURNING *;`;
        const values = [nome, email, senha, id];
        const result = await pool.query(query, values);

        if(result.rows.length === 0){
            return {mensagem: 'Usuário não encontrado.'}
        }

        return result.rows[0];
    } catch (error) {
        console.log(`Erro ao atualizar usuário: ${error}`);
    }
};