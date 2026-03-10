import { readdir } from 'fs/promises'

async function lerArquivos(){
    try {
        const arquivos = await readdir('./Arquivos_para_organizar')
        for(const arquivo of arquivos){
            console.log(arquivo);
        }
    } catch (err) {
        console.log(err);   
    }
}

lerArquivos()