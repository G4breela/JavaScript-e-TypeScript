// * exercicio 

/*
 todo Resultado esperado: Luiz Otávio Miranda tem 30 anos, pesa 84 kg tem 1.8 de altura e seu IMC é de 25.925925925925924.
 todo Luis Otávio nasceu em 1980;
*/
const nome = "Luis Otávio";
const sobrenome = "Miranda";
const idade = 30;
const pesoEmKg = 84;
const alturaEmM = 1.80;

let anoNascimento = new Date().getFullYear() - idade;
let imc = pesoEmKg / (alturaEmM**2);
let classIMC;

if(imc < 16){
    classIMC = "Magreza Grau III";
}else if(imc >= 16 && imc <= 16.9){
    classIMC = "Magreza Grau II"
}else if(imc >= 17 && imc <= 18.4){
    classIMC = "Magreza Grau I"
}else if(imc >= 18.5 && imc <= 24.9){
    classIMC = "Adequado"
}else if(imc >= 25 && imc <= 29.9){
    classIMC = "Pré-Obeso"
}else if(imc >= 30 && imc <= 34.9){
    classIMC = "Obesidade Grau I"
}else if(imc >= 35 && imc <= 39.9){
    classIMC = "Obesidade Grau II"
}else{
    classIMC = "Obesidade Grau III"
}

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${pesoEmKg} kg 
tem ${alturaEmM.toFixed(2)} e seu IMC é de ${imc.toFixed(2)} classificado como: ${classIMC}.
${nome} ${sobrenome} nasceu em ${anoNascimento}.`)