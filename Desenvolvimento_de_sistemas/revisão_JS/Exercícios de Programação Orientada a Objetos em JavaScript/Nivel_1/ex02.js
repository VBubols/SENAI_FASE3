class Aluno{
    constructor(nome, notas){
        this.nome = nome;
        this.notas = notas;
    }

    #calcularTotal(){
        let numeros = this.notas
        let soma = 0

        for(const numero of numeros){
            soma += numero;
        }

        return soma;
    }

    calcularMedia(){
        let notaTotal = this.#calcularTotal()
        let resultado = notaTotal / this.notas.length
        
        return `Nota de ${this.nome}: ${resultado.toFixed(2)}`
    }

    situacao(){
        let notaFinal = this.calcularMedia()

        const situacao = notaFinal >= 7 ? 'Aprovado(a)' : 'Reprovado(a)'

        return `${this.nome}: ${situacao}`
    }
}

const Pedrinho = new Aluno('Pedrinho', [5, 6, 9])
const Mariazinha = new Aluno('Mariazinha', [8, 9, 10])

console.log(Pedrinho.calcularMedia())
console.log(Pedrinho.situacao())

console.log(Mariazinha.calcularMedia())
console.log(Mariazinha.situacao())