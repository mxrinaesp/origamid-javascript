var idade = 22;
var idade = 2e4; // 20000
var idade = 12.5; // decimales con punto

console.log(idade);


// Operadores aritméticos
var soma = 20 + 10;
var subtracao = 20 - 10;
var multiplicacao = 20 * 10;
var divisao = 20 / 10;
var expoente = 2 ** 4;
var modulo = 23545 % 58;

console.log(modulo);


// Operadores aritméticos com Strings
var soma = '100' + 50; //10050 porque concatena
var subtracao = '100' - 50; // 50 correcto
var multiplicacao = '100' * '2'; // 200 correcto
var divisao = 'Comprei 10' / 2; // ERROR NaN (Not a Number) pero si '10', 5 correcto
console.log(divisao);


// Operadores aritméticos unários I
var incremento = 5;
console.log(incremento++); // 5 + 1 y guarda el valor ... misma cosa con x--
console.log(incremento) // 6 porque muestra el resultado;

var incremento2 = 10;
console.log(++incremento2); // 11 porque la suma va delante ... misma cosa con --x
console.log(incremento2); // 11 porque muestra el resultado


// Operadores aritméticos unários II
var ano = '2020';
console.log(-ano +5); // -2015 ... +|- transforma el valor del String en número 
console.log(+ano +5); // 2025

var frase = 'Isso é um teste';
console.log(+frase); // NaN 
console.log(-frase); // NaN

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1


// Como dividir o peso por 2?
var numero ='80'; // +'80' / 2
var unidade = 'kg';
var peso = numero + unidade; //
var pesoPorDois = peso / 2; // quitamos el '/ 2' porque ya hicimos división arriba"
console.log(pesoPorDois);
