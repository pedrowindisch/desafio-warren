const retornaSituacaoAula = require("../desafios/aula");

describe("validações de saídas", () => {
  test("deve retornar cancelada", () => {
    // Apenas dois alunos chegaram no horário:
    const chegadas = [-1, 0, 4, 5, 2, 3];
    const minimoPresentes = 3;

    const situacao = retornaSituacaoAula(chegadas, minimoPresentes);
    expect(situacao).toEqual("Aula cancelada");
  })

  test("deve retornar aula normal", () => {
    // Três alunos chegaram no horário:
    const chegadas = [-2, -1, 0, 1, 2];
    const limite = 2;

    const situacao = retornaSituacaoAula(chegadas, limite);
    expect(situacao).toEqual("Aula normal");
  })
})