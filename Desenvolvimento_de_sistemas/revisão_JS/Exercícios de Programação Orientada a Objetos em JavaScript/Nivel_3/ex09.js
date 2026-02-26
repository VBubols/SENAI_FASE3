class ListaOrdenada extends Array{
    push(valor){
        super.push(valor);
        this.sort()
    }
}

const lista = new ListaOrdenada()

lista.push(3)
lista.push(2)
lista.push(1)

console.log(lista)