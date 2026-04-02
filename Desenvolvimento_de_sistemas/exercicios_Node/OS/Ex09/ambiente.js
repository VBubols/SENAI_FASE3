import { writeFile, access } from 'fs/promises'
import { homedir, uptime, hostname } from 'node:os'

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

async function lerAmbiente(){
    try {
        const home = homedir()
        const uptimePC = uptime() 
        const hostnamePC = hostname()
        //console.log(`Home: ${home}\nUptime: ${uptimePC}\nHost: ${hostnamePC}`)
        const conteudo = {home, uptimePC, hostnamePC}
        return conteudo
    } catch (error) {
        console.log(`ERRO: ${error}`)
    }
}

export async function relatorioAmbiente(){
    try {
        if(await verificarArquivo()){
            return
        }
        const conteudoRelatorio = await lerAmbiente()
        await writeFile('./relatorio.txt', JSON.stringify(conteudoRelatorio))
        console.log("Arquivo criado com sucesso!")
    } catch (error) {
        console.log(`ERRO: ${error}`)
    }
}