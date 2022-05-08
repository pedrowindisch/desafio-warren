const reverterNumero = (numero) => {
  // Estava fazendo assim:
  // return Number([...numero.toString()].reverse().join(''));

  // Nova forma de fazer, mais eficiente
  let resultado = 0;

  while (numero > 0) {
    // multipla o resultado por dez e adiciona o ultimo dígito do numero original:
    // (0 * 10)  + (302 % 10) = 0 + 2 = 2 
    // (2 * 10)  + (30 % 10)  = 20 + 0 = 20
    // (20 * 10) + (3 % 10)   = 200 + 3 = 203 (reverso de 302)
    resultado = (resultado * 10) + (numero % 10);

    // remove o último digito do numero original:
    numero = Math.floor(numero / 10);
  }

  return resultado;
}

const calcularReversiveis = (teto) => {
  if (teto < 0)
    throw new TypeError("Por favor, insira um número válido.");

  const reversiveis = [];

  for (let numeroAtual = 1; numeroAtual <= teto; numeroAtual++) {
    const numeroRevertido = reverterNumero(numeroAtual);
    const isImpar = (numeroAtual + numeroRevertido) % 2 != 0;

    if (isImpar) 
      reversiveis.push(numeroAtual);
  }

  return reversiveis;
}

module.exports = calcularReversiveis;