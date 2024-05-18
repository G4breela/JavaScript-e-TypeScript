let umaString = "Um \"Texto\"";
console.log(umaString);

// Neste caso, as barras contrárias servem para quando no código, por alguma razão, precisamos adicionar aspas duplas na string dentro das aspas para declaração, dessa forma as aspas dentro do código aparecem perfeitamente e não gera erro no código como geraria se estivesse recebendo o valor sem.

let texto = 'O rato roeu a roupa do rei de roma';

//console.log(texto.split(' '));


//let rato = texto.split(' ', 2);
//console.log(rato[1].toUpperCase());

let nome = 'Gabriela dos Santos Silva'
console.log(`${nome.replace(/ /g, ' | ')}`);
console.log(`${nome.slice(-3)}`);
