class Configuracao{
    #idServer;
    #ambiente;

    constructor(idServer, ambiente, nome){
        this.#idServer = idServer;
        this.#ambiente = ambiente;
        this.nome = nome;
    }

    get idServer(){
        return this.#idServer
    }

    get ambiente(){
        return this.#ambiente
    }
}

const config = new Configuracao(42, "dev", "Servidor de Desenvolvimento")

console.log(config.idServer)
console.log(config.ambiente)
console.log(config.nome)

config.idServer = 50
config.ambiente = "prod"
config.nome = "Servidor de Produção"

console.log(config.idServer)
console.log(config.ambiente)
console.log(config.nome)

