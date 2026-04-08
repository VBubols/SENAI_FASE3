import pool from '../../db_con.js';

export async function buscarTodos(){
    try {
        const todosLivros = await pool.query('SELECT * FROM livros;');
        return todosLivros.rows;
    } catch (error) {
        console.log(`Erro ao buscar livros: ${error}`)
    }
}

export async function buscarLivroId(id){
    try {
        const livroId = await pool.query(`SELECT * FROM livros WHERE id=${id}`)
        return livroId.rows;
    } catch (error) {
        console.log(`Error ao buscar livro por ID: ${error}`)
    }
}

export async function adicionarLivro(titulo, autor, ano, disponivel){
    try {
        const novoLivro = await pool.query(`
        INSERT INTO livros (titulo, autor, ano, disponivel)
        VALUES ($1, $2, $3, $4)
        RETURNING *`, [titulo, autor, ano, disponivel]);
        return novoLivro.rows[0];
    } catch (error) {
        console.log(`Error ao adicionar o livro: ${error}`)
    }
}