const retornaSituacaoAula = (chegadas, minimoPresentes) => {
  const qntdAlunosPresentes = chegadas.filter(c => c <= 0).length;

  return qntdAlunosPresentes < minimoPresentes ? "Aula cancelada" : "Aula normal";
}

module.exports = retornaSituacaoAula;