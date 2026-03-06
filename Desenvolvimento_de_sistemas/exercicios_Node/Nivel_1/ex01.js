import {readFile} from 'fs/promises';

export async function leitorArquivo() {
    try{
        const arquivo = await readFile('./Nivel_1/log.txt', 'UTF8');
        const linhas = arquivo.split('\n').length
        console.log(linhas);    
    }catch(err) {
        console.log(`Erro: ${err}`);
    }
}