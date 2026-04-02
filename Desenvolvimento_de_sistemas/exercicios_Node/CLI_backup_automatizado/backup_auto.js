import { writeFile, mkdir, readdir, copyFile, stat, access } from 'fs/promises'
import { join, extname } from 'path'
import { homedir } from 'node:os'

export async function criarPastaBackup(){
    try {
        const pastaBackup = join(homedir(), 'backup')
        await mkdir(pastaBackup, {recursive: true})

        const arquivos = await readdir('./origem')
        let totalSize = 0
        let count = 0
        for(const arquivo of arquivos){
            if(extname(arquivo) === '.txt'){
                const origem = join('./origem', arquivo)

                const info = await stat(origem)
                totalSize += info.size //pega o tamanho do arquivo e incrementa na var info

                await copyFile(origem, join(pastaBackup, arquivo))
                count++ //aumenta o contador para ver quantidade de arquivos copiados
            }
        }
        return { count, totalSize }
    } catch (err) {
        console.log(err);   
    }
}

function lerAmbienteBackup({count, totalSize}){
    return {
        data: new Date().toLocaleString('pt-BR'),
        arquivosCopiados: count,
        tamanhoTotal: `${totalSize} bytes`
    }
}

async function verificarArquivo(){
    try {
        await access('./relatorio.txt')
        console.log("Relatório já existe!");
        return true
    } catch {
        console.log("Arquivo ainda não existe!");
        return false
    }
}

export async function relatorioAmbienteBackup(dados){
    try {
        if(await verificarArquivo()){
            return
        }
        const conteudo = lerAmbienteBackup(dados)
        await writeFile('./relatorio.txt', JSON.stringify(conteudo, null, 2))
        console.log("Arquivo criado com sucesso!")
    } catch (error) {
        console.log(`ERRO relatorioAmbienteBackup: ${error}`)
    }
}

const dados = await criarPastaBackup()
await relatorioAmbienteBackup(dados)