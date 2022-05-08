// A partir de uma array de elementos fornecida, calcula a soma mais próxima
const retornaPossibilidadesSoma = (elementos, soma) => {
  const possibilidades = [];

  const calcularPossibilidade = (indice, _arrayAtual, somaRestante) => {
    // Cria uma cópia da array.
    // No JavaScript, as arrays são passadas por referência, e não por valor,
    // então é importante criar uma cópia para não modificar a array original,
    // somente a cópia (imutabilidade)
    const arrayAtual = [..._arrayAtual];

    if (somaRestante == 0) {
      possibilidades.push(arrayAtual);
      return;
    }

    for (i = indice; i < elementos.length; i++) {
      if (elementos[i] > somaRestante)
        break;

      arrayAtual.push(elementos[i]);
      // Calcula sem trocar o elemento atual (indice continua o mesmo)
      calcularPossibilidade(indice, arrayAtual, somaRestante - elementos[i]);
      
      arrayAtual.pop();
      // Desconsidera o elemento atual (array.pop acima) e
      // calcula com o próximo elemento (prox. indice)
      calcularPossibilidade(indice + 1, arrayAtual, somaRestante);
    }
  }

  // inicia a busca de possibilidades
  calcularPossibilidade(0, [], soma);

  // pega a possibilidade com o menor número de elementos e filtra todas com essa
  // mesma qntd
  const menorPossibilibade = Math.min(...possibilidades.map(p => p.length));
  return possibilidades.filter(p => p.length == menorPossibilibade);
}
  
module.exports = retornaPossibilidadesSoma;