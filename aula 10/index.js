/**
 * * Artiméticos
 * * + adição / concatenação
 *  * - / *  (outros operadores)
 *  * **(potenciação base elevada ao expoente)
 *  * % (resto da divisão)
 *  ! as operações seguem a precedencia matematica: () > ** > / e % > + e -
 *  
 */

const num1 = 10;
const num2 = 2;
//console.log(num1%num2);


// incremento
let limite = 100;

for(let i=0; i<=limite; i++)
{
    //console.log(i);
}

// decremento 

limite = 0;

for(let i=10; i>=limite; i--)
{
    //console.log(i);
}



const passo = 2;
let contador = 2;

contador *= passo;
console.log(contador)

for( contador; contador <= 20; contador += passo){
    // console.log(contador)
}