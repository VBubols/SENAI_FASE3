const jsonRecebido = '{"cidade": "São Paulo", "temperatura": 25, "chovendo": false}';

const jsonObj = JSON.parse(jsonRecebido)
console.log(`A temperatura em ${jsonObj.cidade} é de ${jsonObj.temperatura} graus.`);

