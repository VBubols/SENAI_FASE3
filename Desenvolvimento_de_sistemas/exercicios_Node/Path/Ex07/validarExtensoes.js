import { readdir } from 'fs/promises'
import { extname } from 'path'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export async function validarExtensoes(){
    try {
        const pasta = await readdir(join(__dirname, 'pasta'))
        for(const arquivo of pasta){
            const extensoesPermitidas = ['.js', '.json']
            const extensao = extname(arquivo)
            if(extensoesPermitidas.includes(extensao)){
                console.log(`Extensão dos arquivos: ${extensao}`)
            }
        }
    } catch (error) {
        console.log(`ERRO: ${error}`);
    }
}