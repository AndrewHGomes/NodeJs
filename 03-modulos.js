// console.log(require("path"));

const path = require("path");

console.log(path.basename(__filename));

const meuModulo = require("./04-exports");

console.log(meuModulo);
