const fs = require("node:fs");

const arquivoTxt = "./arquivo.txt";

const existe = fs.existsSync(arquivoTxt);

const texto = `Olá! Meu nome é Andrew Gomes, tenho 36 anos.
Sou Desenvolvedor Web na D'affari Sistemas de Informação.
`;

if (existe) {
  console.log("O arquivo existe. Vou mostrá-lo:");
  fs.readFile(arquivoTxt, "utf-8", (erro, dado) => {
    if (erro) {
      console.error(`Um erro ocorreu: ${erro.message}`);
      return;
    }
    console.log(dado);
    console.log("Arquivo lido com sucesso!");
  });
} else {
  console.log("O arquivo não existe. Vou criá-lo:");
  fs.writeFile(arquivoTxt, texto, "utf-8", (erro) => {
    if (erro) {
      console.error(`Um erro ocorreu: ${erro.message}`);
      return;
    }
    console.log("Arquivo criado com sucesso!");
  });
}

const fileTxt = "./file.txt";

const temFile = fs.existsSync(fileTxt);

if (temFile) {
  console.log("Tem um arquivo 'file.txt', vou excluí-lo:");
  fs.unlink(fileTxt, (erro) => {
    if (erro) {
      console.log(`Um erro ocorreu: ${erro.message}`);
    }
    console.log("Arquivo excluído com sucesso!");
  });
} else {
  console.log("Não há nenhum 'file.txt'.");
}
