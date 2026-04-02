import { readFile, writeFile, access } from 'fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function verificarArquivo(){
    try{
        await access(join(__dirname, 'relatorio.txt'))
        console.log("Arquivo já existe!");
        return true
    } catch {
        console.log("Arquivo ainda não existe!");
        return false
    }
}

export async function gerarRelatorio() {
    try {
        if(await verificarArquivo()){
            return 
        }
        const conteudo = await readFile(join(__dirname, 'dados.json'), 'UTF8')
        await writeFile(join(__dirname, 'relatorio.txt'), conteudo)
        console.log('Arquivo criado com sucesso!')
    } catch(err) {
        console.log(`Erro: ${err}`)
    }
}

