const calcularReversiveis = require("./desafios/reversiveis");
const retornaPossibilidadesSoma = require("./desafios/elementos-soma");
const retornaSituacaoAula = require("./desafios/aula");

const reversiveisAteUmMilhao = calcularReversiveis(1_000_000);
for (const reversivel of reversiveisAteUmMilhao)
  console.log(reversivel);

const situacaoAula = retornaSituacaoAula([-2, -1, 0, 1, 2], 3);
console.log(situacaoAula);

const possibilidades = retornaPossibilidadesSoma([2, 3, 4], 10);
console.log(possibilidades);


