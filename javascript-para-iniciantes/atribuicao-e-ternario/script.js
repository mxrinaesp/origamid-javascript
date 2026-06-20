//operadores de atribución
var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

// operador ternário: usado para atribuir valor a una variable dependiendo de una condición
var idade = 19;
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber'; // condición ? (if) '' : (else) ''
console.log(podeBeber);


// if abreviado: no usa {} si es solo una línea de código
var possuiFaculdade = true;

if (possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');

if (possuiFaculdade)
     console.log('Possui faculdade');
else 
     console.log('Não possui faculdade');

