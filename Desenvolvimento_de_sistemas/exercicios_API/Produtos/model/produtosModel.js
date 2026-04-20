import pool from '../../db_con.js'

export async function buscarTodos(){
    try {
        const todosProdutos = await pool.query('SELECT * FROM produtos;');
        return todosProdutos.rows;
    } catch (error) {
        console.log(`Erro ao buscar todos produtos: ${error}`);
        return error
    }
}

export async function buscarProdutoId(id){
    try {
        const produtoId = await pool.query('SELECT * FROM produtos where id = $1', [id]);
        return produtoId.rows[0];
    } catch (error) {
        console.log(`Erro ao buscar produto por ID: ${error}`);
        return error
    }
}

export async function criarProduto(nome, categoria, preco, quantidade){
    try {
        const produtoNovo = await pool.query(`
            INSERT INTO produtos (nome, categoria, preco, quantidade)
            VALUES ($1, $2, $3, $4)
            RETURNING *`, [nome, categoria, preco, quantidade]); 
        return produtoNovo.rows[0];
    } catch (error) {
        console.log(`Erro ao cadastrar produto: ${error}`);
        return error
    }
}

export async function atualizarProduto(id, nome, categoria, preco, quantidade){
    try {
        const query = `
            UPDATE produtos
            SET nome = $1, categoria = $2, preco = $3, quantidade = $4
            WHERE id = $5
            RETURNING *;`;
        const values = [nome, categoria, preco, quantidade, id];
        const result = await pool.query(query, values);

        if(result.rows.length === 0){
            return {mensagem: 'Produto não encontrado.'}
        }

        return result.rows[0];
    } catch (error) {
        console.log(`Erro ao atualizar produto: ${error}`)
        return error
    }
}

export async function deletarProduto(id){
    try {
        const result = await pool.query(`DELETE FROM produtos WHERE id = $1 RETURNING *`, [id]);

        if(result.rowCount === 0){
            return null
        }

        return result;
    } catch (error) {
        console.log(`Erro ao deletar o produto: ${error}`)
        return error
    }
}

