//* usando console.log para exibir valores literais no console
// * valores literais são valores fixos

// todo: Não tem muita diferença em utilizar aspas duplas ou simples neste caso;
console.log('Gabriela Silva');
console.log("Gabriela Silva");

// todo: Já a craze tem outra funcionalidade além de exibir valores 
// todo: é possivel fazer uma interpolação com variaveis, além de exibir em multilinha (quebrar textos sem precisar usar o \n) e utilizar o tagged template strings (anotei o que é no caderno)
 
console.log(`Gabriela Silva`);

// * daqui pra baixo foi um exercício que o professor passou

// * o resultado esperado era Meu nome é "coloque seu nome". Estou aprendendo Javascript às 'coloque o numero' da Manhã

var nome = 'Gabriela';

// * com meu conhecimento basico decidi pegar a hora e os minutos atual
var hora = new Date().getHours();

var minutos = new Date().getMinutes();

// * criei essa variavel para na condicional exibir um texto personalizado de acordo com a hora
var periodo;

if( hora >= 0 && hora < 13){
    periodo = "da Manhã";
}else if( hora >= 13 && hora < 18){
    periodo = "da Tarde";
}else{
    periodo = "da Noite"
}

console.log(`Meu nome é ${nome}. Estou aprendendo Javascript às ${hora}:${minutos} ${periodo}`);