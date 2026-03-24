import { platform, arch, cpus, totalmem } from 'node:os'

export async function monitorarSistema(){
    try {
        const { model } = cpus()[0]
        const memoria = totalmem()
        const gb = memoria / (1024 ** 3)
        console.log(`Plataforma do sistema: ${platform()}`);
        console.log(`Arquitetura do sistema: ${arch()}`);
        console.log(`Total de memória do sistema: ${gb.toFixed(2)}GB`);
        console.log(`Processador: ${model.trim()}`);
        
    } catch (error) {
        console.log(`ERRO ${error}`);
    }
}