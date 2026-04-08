import pool from '../../db_con.js';

export async function buscarTodos(){
    try {
        const todosLivros = await pool.query('SELECT * FROM livros');
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
        console.log(`Error oa buscar livro por ID: ${error}`)
    }
}

export async function adicionarLivro(){
    
}