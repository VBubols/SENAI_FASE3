import {readFile} from 'fs/promises';

async function leitorArquivo() {
    try{
        const arquivo = await readFile('./log.txt', 'UTF8');
        const linhas = arquivo.split('\n').length
        console.log(linhas);    
    }catch(err) {
        console.log(`Erro: ${err}`);
    }
}

leitorArquivo();