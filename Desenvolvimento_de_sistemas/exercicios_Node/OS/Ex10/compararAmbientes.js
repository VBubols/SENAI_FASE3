import { platform } from 'node:os'

export async function identificarAmbiente(){
    try {
        const ambiente = platform()
        if (ambiente == "win32"){
            console.log("Você está em um Windows! Espero que não seja o 11 :)")
        } if (ambiente == "darwin") {
            console.log("Você está em um MAC. $$$$")
        } if (ambiente == "linux") {
            console.log("Você está em um Linux. Viva Linus Torvalds!!")
        }
    } catch (error) {
        console.log(`ERRO: ${error}`)
    }
}