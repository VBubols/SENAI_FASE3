import { readdir, rename, mkdir } from 'fs/promises'

export async function OrganizarArquivos(){
    try {
        await mkdir('./Textos', {recursive: true})
        const arquivos = await readdir('./Arquivos_para_organizar')
        for(const arquivo of arquivos){
            if(arquivo.endsWith('.txt')){
                await rename(`./Arquivos_para_organizar/${arquivo}`, `./Textos/${arquivo}`)
                console.log(`Arquivo: ${arquivo} movido para Textos`)
            }
        }
        console.log("Arquivos organizados com sucesso!")
    } catch (err) {
        console.log(err);   
    }
}