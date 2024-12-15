const segundos = 5000;

const checagem = () =>
  console.log(`Chegacando após ${segundos / 1000} segundos`);

const fazendoChecagem = setInterval(checagem, segundos);

clearInterval(fazendoChecagem);
