class MetodoPagamento{
    pagar(valor){
        return `Pagamento de R$${valor} realizado.`
    }
}

class CartaoCredito extends MetodoPagamento{
    pagar(valor){
        return `Pagamento de R$${valor} realizado no cartão de crédito.`
    }
}

class Boleto extends MetodoPagamento{
    pagar(valor){
        return `Pagamento de R$${valor} emitido para boleto.`
    }
}

class PayPal extends MetodoPagamento{    
    pagar(valor){
        return `Pagamento de R$${valor} realizado no PayPal.`
    }
}

function processarPagamento(metodo, valor){
    return metodo.pagar(valor)
}

console.log(processarPagamento(new CartaoCredito(), 100));
console.log(processarPagamento(new Boleto(), 100));
console.log(processarPagamento(new PayPal(), 100));