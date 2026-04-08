import pool from '../database/db.js';

export async function listarContatos(){
    try{
        const TodosContatos = await pool.query('SELECT * FROM contatos;');
        return TodosContatos.rows;
    }catch(erro){
        console.log('DEU ERRO: ',erro);
    }
}

export async function buscarContatoID(id){
    const ContatoID = await pool.query(`SELECT * FROM contatos WHERE id=${id};`);
    return ContatoID.rows;
    
}

export async function cadastrarContato(nome, telefone, email){
    try {
        const novoContato = await pool.query(`
        INSERT INTO CONTATOS (nome, telefone, email)
        VALUES ($1, $2, $3)
        RETURNING *`, [nome, telefone, email]);
        return novoContato.rows;
    } catch (error) {
        console.log(`Erro ao inserir contato: ${error}`)
    }
}