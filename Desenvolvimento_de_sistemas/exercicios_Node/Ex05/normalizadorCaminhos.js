import { resolve, join, basename } from 'path'

export async function normalizarCaminhos(){

    const arrayCaminhos = [
        './textos/text.txt',
        '../images/photo.jpg',
        ',/audios/msc.mp3'
    ]

    try {
        for(const caminho of arrayCaminhos){
            const nomeArquivo = await basename(caminho)
            console.log(nomeArquivo);
            
        }
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}

normalizarCaminhos()