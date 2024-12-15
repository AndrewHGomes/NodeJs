const { EventEmitter } = require("events");
const { inherits } = require("util");

const e = new EventEmitter();

// e.on("Algo", (msg) => console.log("Ouvi você", msg));

// e.emit("Algo", "Andrew");
// e.emit("Algo", "Viviane");

// e.once("Outro", (msg) => console.log("Na escuta", msg));

// e.emit("Outro", "Viviane");
// e.emit("Outro", "Andrew");

console.log("");

//==========================================================

function Personagem(nome) {
  this.nome = nome;
}

inherits(Personagem, EventEmitter);

const chapolin = new Personagem("Chapolin");

chapolin.on("help", () => console.log(`Eu! O ${chapolin.nome} Colorado!`));

console.log("Oh! E agora, quem poderá me defender?");

chapolin.emit("help");
