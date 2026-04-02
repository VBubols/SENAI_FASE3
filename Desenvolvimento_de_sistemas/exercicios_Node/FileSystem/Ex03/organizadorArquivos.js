import { readdir, rename, mkdir } from 'fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export async function organizarArquivos(){
    try {
        const textos = join(__dirname, 'Textos')
        const origem = join(__dirname, 'Arquivos_para_organizar')

        await mkdir(textos, {recursive: true})
        const arquivos = await readdir(origem)
        for(const arquivo of arquivos){
            if(arquivo.endsWith('.txt')){
                await rename(join(origem, arquivo), join(textos, arquivo))
                console.log(`Arquivo: ${arquivo} movido para Textos`)
            }
        }
        console.log("Arquivos organizados com sucesso!")
    } catch (err) {
        console.log(err);   
    }
}