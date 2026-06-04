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
var divisao = 'Comprei 10' / 2; // ERROR NaN (Not a Number) pero si '100', 5 correcto
console.log(divisao);