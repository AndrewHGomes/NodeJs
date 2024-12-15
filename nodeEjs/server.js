const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const itens = [
    { titulo: "J", mensagem: "amais" },
    { titulo: "E", mensagem: "squeça" },
    { titulo: "S", mensagem: "eu" },
    { titulo: "U", mensagem: "nico" },
    { titulo: "S", mensagem: "alvador" },
  ];
  res.render("pages/index", {
    senhor: itens,
  });
});

app.get("/sobre", (req, res) => {
  res.render("pages/sobre");
});

app.listen(8080);
console.log("Rodando...");
