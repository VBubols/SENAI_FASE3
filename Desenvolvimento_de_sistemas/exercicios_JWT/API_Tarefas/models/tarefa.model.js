import db from '../config/db.js';

export async function buscarPorUsuario(usuarioId) {
    try {
        const usuario = await db.query('SELECT * FROM usuarios WHERE id = $1', [usuarioId]);
        return usuario.rows[0];
    } catch (error) {
        console.log(error);
    }
};

export async function criarTarefa(descricao, usuarioId) {
    try {
        const tarefa = await db.query(`
            INSERT INTO tarefas (descricao, usuario_id)
            VALUES ($1, $2)
            RETURNING *`, [descricao, usuarioId]);
        return tarefa.rows[0];
    } catch (error) {
        console.log(error);
    }
};

export async function concluirTarefa(id, usuarioId) {
    try {
        const tarefaConcluida = await db.query(`
            UPDATE tarefas
            SET concluida = TRUE
            WHERE id = $1, usuario_id = $2
            RETURNING *`, [id, usuarioId]);
        return tarefaConcluida.rows[0];
    } catch (error) {
        console.log(error);
    }
}