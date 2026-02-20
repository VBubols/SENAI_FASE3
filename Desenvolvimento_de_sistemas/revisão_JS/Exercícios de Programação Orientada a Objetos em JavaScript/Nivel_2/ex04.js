class Cofre{
    #senha;
    #conteudo;

    constructor(senha){
        this.#senha = senha;
        this.#conteudo = null;
    }

    inserirItem(senha, conteudo){
        if(senha !== this.#senha){
            return 'Senha incorreta'
        } 

        this.#conteudo = conteudo
        return 'Item guardado'
    }

    retirarItem(senha){
        if(senha !== this.#senha){
            return 'Senha incorreta'
        }

        const item = this.#conteudo
        this.#conteudo = null
        return `Item retirado: ${item}`
    }
}

const Segredo = new Cofre(123)
console.log(Segredo.inserirItem(123, 'segredo secreto'));
console.log(Segredo.inserirItem(999, 'segredo secreto'));
console.log(Segredo.retirarItem(123));
console.log(Segredo.retirarItem(999));

