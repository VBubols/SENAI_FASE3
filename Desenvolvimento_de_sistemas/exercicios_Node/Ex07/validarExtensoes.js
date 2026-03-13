import { readdir } from 'fs/promises'
import { extname } from 'path'

export async function validarExtensoes(){
    try {
        const pasta = await readdir('./pasta')
        for(const arquivo of pasta){
            const extensoesPermitidas = ['.js', '.json']
            const extensao = extname(arquivo)
            if(extensoesPermitidas.includes(extensao)){
                console.log(extensao)
            }
        }
    } catch (error) {
        console.log(`ERRO: ${error}`);
    }
}