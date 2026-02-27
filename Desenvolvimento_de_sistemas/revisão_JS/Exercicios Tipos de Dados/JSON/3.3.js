const jsonUsuarios = '[{"id": 1, "nome": "Alice"}, {"id": 2, "nome": "Bob"}]';

const listaUsuarios = JSON.parse(jsonUsuarios)
console.log(listaUsuarios[1].nome);
