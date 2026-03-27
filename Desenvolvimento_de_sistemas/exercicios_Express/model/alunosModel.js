import { alunos } from '../DB/alunos.js'

export function listarAlunos(){
    return (alunos)
}

export function adicionarAlunos(nome, nota){
    const novoAluno = {id: alunos.length+1, nome: nome, nota: nota}
    alunos.push(novoAluno);
    return novoAluno;
}