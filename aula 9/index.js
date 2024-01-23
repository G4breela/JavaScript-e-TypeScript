//var nome = "luiz";
// var nome = "otavio"; // ! redeclarando variavel, não é uma boa prática. UTILIZE O LET
//console.log(nome);

// nome = 'luiz'; // ! Não faça isso, está criando uma viavel global que pode causar um problema no código 

// * utilize Let

//let nome = 'luiz'; 
// let nome = 'mariana'; // * o let não pode ser redeclarado 

// todo: Tipos de dados Primitivos

const name = 'Luiz'; // * string
const num = 10; // * number
const num2 = 12.5 // * number float
let nomeAluno; // * undefined, pois não tem valor atribuido (não apontam para lugar nenhum na memoria), não configuramos undefined para a variavel
let sobrenomeAluno = null; // * nulo, pois não tem valor atribuido (não apontam para lugar nenhum na memoria), mas no caso atribuimos o null para a variavel, ou seja, configuramos o null
const boolean = true;  //*Boolean valores = true ou falso

console.log(typeof num2, num2); //* verificando tipo e valor da variavel


let a = 2;
let b = a;

console.log(a, b); // 2, 2

a = 3;

console.log(a, b); // 3, 2