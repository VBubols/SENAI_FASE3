const convidados = [
    { id: 1, nome: "Lucas", sobrenome: "Silva", idade: 20, confirmado: true },
    { id: 2, nome: "Maria", sobrenome: "Oliveira", idade: 17, confirmado: true },
    { id: 3, nome: "João", sobrenome: "Santos", idade: 25, confirmado: false },
    { id: 4, nome: "Ana", sobrenome: "Souza", idade: 16, confirmado: false },
    { id: 5, nome: "Vitor", sobrenome: "Bubols", idade: 23, confirmado: true },
    { id: 6, nome: "Bruno", sobrenome: "Petri", idade: 22, confirmado: true },
    { id: 7, nome: "Ester", sobrenome: "Regina", idade: 25, confirmado: true }
  ];
  
console.log("===== LISTA ORIGINAL =====");
console.log(convidados);
  
// MAP: transforma a lista de objetos em lista de nomes
const nomes = convidados.map((convidado) => {
  return convidado.nome;
});
  
console.log("\n===== MAP: Pegando apenas os nomes =====");
console.log(nomes);

// FILTER: seleciona apenas maiores de idade
const maioresDeIdade = convidados.filter((convidado) => {
  return convidado.idade >= 18;
});

console.log("\n===== FILTER: Convidados maiores de idade =====");
console.log(maioresDeIdade);

// FILTER: seleciona apenas menores de idade
const menoresDeIdade = convidados.filter((convidado) => {
    return convidado.idade < 18;
  });
  
  console.log("\n===== FILTER: Convidados menores de idade =====");
  console.log(menoresDeIdade);

// FIND: busca apenas um convidado pelo ID
const convidadoEncontrado = convidados.find((convidado) => {
  return convidado.id === 3;
});

console.log("\n===== FIND: Buscando convidado com ID 3 =====");
console.log(convidadoEncontrado);

// FIND: busca apenas um convidado pelo nome
const convidadoNome = convidados.find((convidado) => {
    return convidado.nome === 'Maria';
  });
  
  console.log("\n===== FIND: Buscando convidado com nome Maria =====");
  console.log(convidadoNome);


// REDUCE: soma todas as idades
const somaIdades = convidados.reduce((total, convidado) => {
  return total + convidado.idade;
}, 0);

console.log("\n===== REDUCE: Somando todas as idades =====");
console.log("Soma das idades:", somaIdades);

// Calculando média
const mediaIdade = somaIdades / convidados.length;

console.log("\n===== REDUCE: Calculando média de idade =====");
console.log("Média de idade:", mediaIdade);

// Encadeamento: primeiro filtra, depois transforma
const nomesDosMaiores = convidados
  .filter((convidado) => {
    return convidado.idade >= 18;
  })
  .map((convidado) => {
    return convidado.nome;
  });

console.log("\n===== FILTER + MAP =====");
console.log("Nomes dos maiores de idade:", nomesDosMaiores);

//REDUCE: maior idade da lista
const maiorIdadeLista = convidados.reduce((maiorIdade, convidado) => {
    return convidado.idade > maiorIdade ? convidado.idade : maiorIdade;
}, 0)
console.log("\n===== REDUCE: Maior idade da lista =====");
console.log('Maior idade da lista: ', maiorIdadeLista)

//Filtrar pro convidados confirmados
const confirmados = convidados.filter((convidado) => {return convidado.confirmado = true});

console.log("\n===== FILTER: Convidados confirmados =====");
console.log('Convidados confirmados: ', confirmados);