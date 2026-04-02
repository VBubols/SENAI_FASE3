import { mkdir } from 'fs/promises'
import { join } from 'path'

const baseDir = join(process.cwd(), "/src")

const pastas = [
    baseDir,
    join(baseDir, 'controllers'),
    join(baseDir, 'services'),
    join(baseDir, 'routes')
]

export async function criarArquivos(){
    try {
        for(const pasta of pastas){
            await mkdir(pasta, {recursive: true})
            console.log(`Pasta criada: ${pasta}`)
        }
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}