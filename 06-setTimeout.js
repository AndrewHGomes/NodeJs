const timeOut = 1000;

const fim = () => console.log(`Finalizou após ${timeOut / 1000} segundos...`);

const timer = setTimeout(fim, timeOut);

clearTimeout(timer);
