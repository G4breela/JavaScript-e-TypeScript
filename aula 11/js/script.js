let oi = alert('Opa, bão?');

let resposta= confirm('tem certeza disso?');

if(resposta == true){
    alert('Você é um bom mentiroso')
}else{
    let nome = prompt('diga seu nome: ');
    alert(`Oi ${nome}, estou ligando para o seu psiquiatra!`)
}

// Exercicio daqui pra baixo;

let num1 = Number(prompt('Digite um numero: '));
let num2 = Number(prompt('Digite outro numero: '));

alert(`O resultado da soma entre esses número é: ${num1 + num2}`);