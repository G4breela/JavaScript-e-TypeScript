// * usando let para declarar uma variavel que pode ter o valor alterado;

let nomePai = "João";
let nomeMae = "Maria";
let nomeFilho = "Eduardo";

nomePai = "Alessandro";

console.log(`${nomePai} nasceu em 1984.
Em 2000 ${nomePai} conheceu ${nomeMae}.
${nomePai} casou-se com ${nomeMae} em 2012.
${nomeMae} teve 1 filho com ${nomePai} em 2015.
O filho de ${nomePai} se chama ${nomeFilho}.`);

// ! Não podemos criar variaveis com palavras reservadas (ex: let let), nem pode comecar com números. Também não pode conter espaços ou traços
// todo: Variaveis precisa ter nomes significativos
// * Quando for variavel com nome composto utilize o camelCase! 
