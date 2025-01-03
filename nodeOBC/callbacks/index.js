const fs = require("node:fs");

console.log("Início...");

fs.readFile("arquivo.txt", "utf-8", (erro, dado) => {
  if (erro) throw erro;
  console.log(dado);
});

console.log("Fim!");
