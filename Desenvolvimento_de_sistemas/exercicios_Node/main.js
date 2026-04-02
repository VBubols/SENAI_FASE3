import { createInterface } from 'node:readline'
import * as fsATV from './FileSystem/main.js'
import * as osATV from './OS/main.js'
import * as pathATV from './Path/main.js'

const rl = createInterface({input: process.stdin, output: process.stdout})

const pergunta = (texto) => new Promise(resolve => rl.question(texto, resolve))

async function menuFS() {
        console.log(`
--- FileSystem ---
1. Leitor de logs
2. Gerador de relatórios
3. Organizador de arquivos
4. Contador de palavras
0. Sair        
`)
    const op = await pergunta('Escolha: ')
    switch(op){
        case '1': await fsATV.leitorLog(); break
        case '2': await fsATV.gerarRelatorio(); break
        case '3': await fsATV.organizarArquivos(); break
        case '4': await fsATV.contador(); break
        case '0':
            console.log('Saindo...')
            return
        default: console.log('Opção inválida!')
    }
    await menuPrincipal()
}

async function menuPath(){
            console.log(`
--- Path ---
1. Normalizador de caminhos
2. Criador de estrutura de projeto
3. Validador de extensões
0. Sair        
`)
    const op = await pergunta('Escolha: ')
    switch(op){
        case '1': await pathATV.normalizarCaminhos(); break
        case '2': await pathATV.criarArquivos(); break
        case '3': await pathATV.validarExtensoes(); break
        case '0':
            console.log('Saindo...')
            return
        default: console.log('Opção inválida!')
    }
    await menuPrincipal()
}

async function menuOS(){
            console.log(`
--- OS ---
1. Monitor do sistema
2. Relatório do ambiente
3. Comparador de Ambientes
0. Sair        
`)
    const op = await pergunta('Escolha: ')
    switch(op){
        case '1': await osATV.monitorarSistema(); break
        case '2': await osATV.relatorioAmbiente(); break
        case '3': await osATV.identificarAmbiente(); break
        case '0':
            console.log('Saindo...')
            return
        default: console.log('Opção inválida!')
    }
    await menuPrincipal()
}

let encerrando = false

async function menuPrincipal() {
    if (encerrando) return
    
    console.log(`
===MENU PRINCIPAL===
1. FileSystem
2. Path
3. OS
0. Sair        
`)
    const op = await pergunta('Escolha: ')
    switch(op){
        case '1': await menuFS(); break
        case '2': await menuPath(); break
        case '3': await menuOS(); break
        case '0':
            encerrando = true
            console.log('Saindo...')
            rl.close()
            return
        default: console.log('Opção inválida!')
    }
    await menuPrincipal()
}

menuPrincipal()