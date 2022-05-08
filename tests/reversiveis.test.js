const calcularReversiveis = require("../desafios/reversiveis");

/* As constantes a seguir foram apresentadas no enunciado do problema (36 e 409) */
describe("testar constantes", () => {
  const reversiveisAteMil = calcularReversiveis(1000);

  test("numero 409 deve constar na lista", () => {
    expect(reversiveisAteMil).toContain(409);
  })

  test("numero 36 deve constar na lista", () => {
    expect(reversiveisAteMil).toContain(36);
  })

  test("numero 222 NÃO deve constar na lista", () => {
    expect(reversiveisAteMil).not.toContain(222);
  })
})

describe("casos de erro", () => {
  test("deve lançar um erro quando tentar listar com números negativos", () => {
    expect(() => calcularReversiveis(-10)).toThrowError(TypeError);
  })
})

describe("validação de saídas", () => {
  const REVERSIVEIS_ATE_30 = [10, 12, 14, 16, 18, 21, 23, 25, 27, 29, 30];
  
  test("números reversíveis até 30", () => {
    expect(calcularReversiveis(30)).toEqual(REVERSIVEIS_ATE_30);
  })
})