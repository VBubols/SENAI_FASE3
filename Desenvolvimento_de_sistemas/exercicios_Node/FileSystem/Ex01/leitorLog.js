import {readFile} from 'fs/promises';
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export async function leitorLog() {
    try{
        const arquivo = await readFile(join(__dirname, 'log.txt'), 'UTF-8');
        const linhas = arquivo.split('\n').length
        console.log(linhas);    
    }catch(err) {
        console.log(`Erro: ${err}`);
    }
}