import pool from '../../db_con.js'

export async function buscarTodos(){
    try {
        const todosProdutos = await pool.query('SELECT * FROM produtos;');
        return todosProdutos.rows;
    } catch (error) {
        console.log(`Erro ao buscar todos produtos: ${error}`);
    }
}

export async function buscarProdutoId(id){
    try {
        const produtoId = await pool.query('SELECT * FROM produtos where id = 1$', [id]);
        return produtoId.rows[0];
    } catch (error) {
        console.log(`Erro ao buscar produto por ID: ${error}`);
    }
}

export async function criarProduto(){
    
}

