var nome = 'Marina';
var idade = 29;
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade, nome);


var preco = 25;
var totalComprado = 5;
var totalPreco = preco * totalComprado;

console.log(totalPreco);


var sobrenome = 'Espadas',
     cidade = 'Granada';

console.log(sobrenome, cidade);


var semDefinir; //undefined

console.log(semDefinir);


/*     variables inválidas
var &nome;
var function;
var 1possuiFaculdade; */
var $selecionar;
var _nome;
var possuiFaculdade2;


/* 
var time = 'Barça';
(var - se puede omitir) time = 'Betis';
console.log(time); -> primero salió Barça y después de redeclararlo, sale Betis

let comida = 'pizza';
let comida = 'sushi' - ERROR
console.log(comida); -> no permite redeclarar usando el mismo nombre

const num = 123;
num = 456; - ERROR
console.log(num); -> no se puede redeclarar const. Solo guarda el primer y único valor
*/