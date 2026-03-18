import { readFile, writeFile, access } from 'fs/promises'

async function verificarArquivo(){
    try{
        await access('./relatorio.txt')
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
        const conteudo = await readFile('./dados.json', 'UTF8')
        await writeFile('./relatorio.txt', conteudo)
        console.log('Arquivo criado com sucesso!')
    } catch(err) {
        console.log(`Erro: ${err}`)
    }
}

