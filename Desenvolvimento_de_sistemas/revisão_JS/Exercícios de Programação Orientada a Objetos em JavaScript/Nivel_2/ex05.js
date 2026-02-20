class Usuario{
    #idade;

    constructor(idadeInical){
        this.idade = idadeInical;
    }

    get idade(){
        return this.#idade;
    }

    set idade(valor){
        if(typeof valor !== 'number' || Number.isNaN(valor)){
            throw new Error('Idade deve ser um número')
        }

        if(valor <= 0){
            throw new Error('Idade deve ser um número positivo')
        }

        if(valor >= 120){
            throw new Error('Idade deve ser um número menor que 120')
        }

        this.#idade = valor;
    }
}

try {
    const user = new Usuario(30);
    console.log(user.idade);

    user.idade = 35;
    console.log(user.idade);

    user.idade = -5
} catch (e) {
    console.error('Erro:', e.message);
}

try {
    const user1 = new Usuario(125)
    console.log(user1.idade);
} catch (e) {
    console.error('Erro:', e.message);
}

try {
    const user2 = new Usuario(25)
    user2.idade = 'vinte e cinco'
} catch (e) {
    console.error('Erro:', e.message);
}

try {
    const user2 = new Usuario()
} catch (e) {
    console.error('Erro:', e.message);
}