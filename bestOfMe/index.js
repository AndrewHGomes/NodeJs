const questoes = [
  "O que aprendi hoje?",
  "O que me deixou aborrecido?",
  "O que eu poderia fazer para melhorar?",
  "O que me deixou feliz hoje?",
  "Quantas pessoas ajudei hoje?",
];

const perguntar = (index = 0) => {
  process.stdout.write("\n" + questoes[index] + " > ");
};

perguntar();

const respostas = [];

process.stdin.on("data", (data) => {
  respostas.push(data.toString().trim());

  if (respostas.length < questoes.length) {
    perguntar(respostas.length);
  } else {
    process.exit();
  }
});

process.on("exit", () => {
  console.log(`
    Muito bem, Andrew!

    Hoje você aprendeu:
    ${respostas[0]}

    Você se aborreceu com:
    ${respostas[1]}

    Você vai resolver fazendo:
    ${respostas[2]}

    Você ficou feliz com:
    ${respostas[3]}

    Você ajudou ${respostas[4]} pessoas hoje.

    Volte sempre para novas reflexões!
    `);
});
