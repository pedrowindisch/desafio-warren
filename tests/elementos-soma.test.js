const retornaPossibilidadesSoma = require("../desafios/elementos-soma");

describe("validação de saídas", () => {
  test("soma 10, elementos [2, 3, 4]", () => {
    const retorno = retornaPossibilidadesSoma([2, 3, 4], 10);

    expect(retorno).toEqual([[2, 4, 4], [3, 3, 4]]);
  })

  test("soma 6, elementos [2, 3]", () => {
    const retorno = retornaPossibilidadesSoma([2, 3], 6);

    expect(retorno).toEqual([[3, 3]]);
  })

  test("soma 15, elementos [5, 10]", () => {
    const retorno = retornaPossibilidadesSoma([5, 10], 15);

    expect(retorno).toEqual([[5, 10]]);
  })

  test("soma 16, elementos [2, 4, 8]", () => {
    const retorno = retornaPossibilidadesSoma([2, 4, 8], 16);

    expect(retorno).toEqual([[8, 8]]);
  })

  // Nesse caso, deve retornar uma lista vazia, como não tem nenhuma soma possível
  test("soma 5, elementos [6, 7]", () => {
    const retorno = retornaPossibilidadesSoma([6, 7], 5);

    expect(retorno).toEqual([]);
  })
})