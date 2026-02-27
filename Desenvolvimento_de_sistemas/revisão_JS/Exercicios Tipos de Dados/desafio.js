const turma = []

const vitor = {nome: "Vitor", nota: 9}
const lucas = {nome: "Lucas", nota: 10}

turma.push(vitor, lucas)

const turmaJson = JSON.stringify(turma)
console.log(turmaJson);

