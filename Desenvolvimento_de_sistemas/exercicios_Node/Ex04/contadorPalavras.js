import { readFile } from 'fs/promises'

export async function contador(){
    try {
        const arquivo = await readFile('./text.txt', 'UTF8');
        const linhas = arquivo.split('\n').length
        const palavras = arquivo.split(' ').length
        const caracteres = arquivo.replace(/\s/g, '').length
        console.log(`Contagem de linhas: ${linhas}`);
        console.log(`Contagem de palavras: ${palavras}`);
        console.log(`Contagem de caracteres: ${caracteres}`);
    } catch (error) {
        console.log('Erro: ', error);
    }
}