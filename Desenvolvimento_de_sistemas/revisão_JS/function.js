// Função vazia - sem paramêtro e sem retorno
function saudacao(){
    console.log("Olá mundo")
}

//Funcão com paramêtro  
function saudacaoPessoa(nome){
    console.log(`Olá ${nome}!`)
}

//Função com retorno - precisam ser atribuidas a algo para não retornarem vazias
function saudacaoRetorno(nome){
    return `Olá ${nome}!`;
}

//Função arrow function - precisam ser atribuidas a algo para não retornarem vazias
const dobro = (x) => x * 2
//console.log(dobro(10));

//Função callback
function executar(nomeFuncao, outraFuncao){
    nomeFuncao()
    outraFuncao('Ciclano')
}
//executar(saudacao, saudacaoPessoa)

//Função recursiva
function fatorial(numero){
    if(numero <= 0){
        return 1;
    } 

    return numero * fatorial(numero - 1)
}

function regressiva(n){
    if(n < 0){
        return
    } else {
        console.log(n)
        regressiva(n - 1)
    }
    
}

console.log(regressiva(10))