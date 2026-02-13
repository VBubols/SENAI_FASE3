//encapsulamento
// class ContaBancaria{
//     #titularConta;
//     #saldoConta;
//     constructor(titular, saldo){
//         this.#titularConta = titular;
//         this.#saldoConta = saldo;
//     }

//     get saldo(){
//         return this.#saldoConta
//     }
// }

// const contaVitor = new ContaBancaria('Vitor Bubols', 0);

// console.log(contaVitor.saldo);

//Herança - herda os atributos e métodos da classe pai
// class Funcionario{
//     constructor(nome, cpf, salarioBase){
//         this.nome = nome;
//         this.cpf = cpf;
//         this.salarioBase = salarioBase;
//     }

//     exibirSalario(){
//         return `O salário é de ${this.salarioBase}`
//     }
// }

// class Gerentes extends Funcionario{
//     constructor(nome, cpf, salarioBase, unidade){
//         super(nome, cpf, salarioBase);
//         this.unidade = unidade;
//     }

//     aprovarFerias(){
//         return 'Férias aprovadas!'
//     }
// }

// const Alci = new Gerentes('Alci', '1234567891011', 9000, 'Redes')

// console.log(Alci)
// console.log(Alci.aprovarFerias())
// console.log(Alci.exibirSalario())

//Polimorfismo 
class Funcionario{
    constructor(nome, cpf, salarioBase){
        this.nome = nome;
        this.cpf = cpf;
        this.salarioBase = salarioBase;
    }

    exibirNome(){
        return `${this.nome} é um funcionário.`
    }

    exibirSalario(){
        return `O salário é de ${this.salarioBase}`
    }
}

class Gerentes extends Funcionario{
    constructor(nome, cpf, salarioBase, unidade){
        super(nome, cpf, salarioBase);
        this.unidade = unidade;
    }

    exibirNome(){
        return `${this.nome} é um gerente!`
    }

    aprovarFerias(){
        return 'Férias aprovadas!'
    }
}

const Alci = new Gerentes('Alci', '1234567891011', 9000, 'Redes')
const Vitor = new Funcionario('Vitor', '1234567891011', 4000)

console.log(Alci.exibirNome())
console.log(Vitor.exibirNome())//Métodos com o mesmo nome mas que fazem coisas diferentes