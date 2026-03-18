import { platform, arch, cpus, totalmem } from 'node:os'

export async function monitorarSistema(){
    try {
        console.log(platform());
        console.log(arch());
        console.log(totalmem());
        const { model } = cpus()[0]
        console.log(`Processador: ${model.trim()}`);
        
    } catch (error) {
        console.log(`ERRO ${error}`);
    }
}

monitorarSistema()