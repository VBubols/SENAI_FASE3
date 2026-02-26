class Veiculo{
    constructor(tipo){
        this.tipo = tipo
    }
    mover(){
        return 'O veículo está se movendo'
    }
}

class Carro extends Veiculo{
    constructor(tipo, marca, motor, qtdPortas){
        super(tipo);
        this.marca = marca;
        this.motor = motor;
        this.qtdPortas = qtdPortas;
    }

    mover(){
        return 'O carro anda pela estrada.'
    }
}


class Aviao extends Veiculo{
    constructor(tipo, marca, altitudeMax, qtdPassageiros){
        super(tipo);
        this.marca = marca;
        this.altitudeMax = altitudeMax;
        this.qtdPassageiros = qtdPassageiros;
    }

    mover(){
        return 'O avião voa pelo ar.'
    }
}

const veiculo = new Veiculo('Veicular')
const vectra = new Carro('Carro', 'Opel', 2.0, 4)
const boieng = new Aviao('Avião', 'Boeing', 41000, 189)

console.log(veiculo)
console.log(vectra)
console.log(boieng)

console.log(veiculo.mover())
console.log(vectra.mover())
console.log(boieng.mover())