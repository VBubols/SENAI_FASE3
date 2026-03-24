import { resolve, join, basename } from 'path'

export async function normalizarCaminhos(){
    try {
        const caminho1 = join("caminho1", "text.json")
        const caminho2 = join("caminho2", "subcaminho", "text.txt")
        const caminhos = [caminho1, caminho2]
        for(const [i, caminho] of caminhos.entries()){
            console.log(`---Caminho ${i + 1}---`);
            console.log(`Caminho do arquivo: ${caminho}`);
            console.log(`Nome do arquivo: ${basename(caminho)}`)
            console.log(`Caminho absoluto: ${resolve(caminho)}\n`)
        }
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}