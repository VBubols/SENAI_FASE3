class Funcionario{
    constructor(nome, cpf, salarioBase){
        this.nome = nome;
        this.cpf = cpf;
        this.salarioBase = salarioBase;
    }

    exibirDados(){
        return `
        O nome do funcionário é ${this.nome}
        O CPF do funcionário é ${this.cpf}
        O Salário do funcionário é ${this.salarioBase}` 
    }
}

class Gerentes extends Funcionario{
    constructor(nome, cpf, salarioBase, departamento){
        super(nome, cpf, salarioBase);
        this.departamento = departamento;
    }

    exibirDados(){
        return `
        O nome do gerente é ${this.nome}
        O CPF do gerente é ${this.cpf}
        O Salário do gerente é ${this.salarioBase}
        O departamento do gerente é ${this.departamento}` 
    }
}

const Vitor = new Funcionario('Vitor', '1234569991011', 3000)
const Alci = new Gerentes('Alci', '1234567891011', 9000, 'Redes')

console.log(Vitor.exibirDados())
console.log(Alci.exibirDados())
