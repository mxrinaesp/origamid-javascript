var possuiGraduacao = true;
if (possuiGraduacao) {
     console.log('É verdadeiro');
     var x = 10;
} else {
     console.log('É falso');
}
console.log(x); // solo ejecuta si la condición donde se creó la x es true


var possuiMoto = false;
var possuiCarro = true;
if (possuiMoto) {
     console.log('Sim, tem uma Kawasaki');
} else if (possuiCarro) {
     console.log('Possui habilitação de carro também'); // esta es true
} else {
     console.log('Não possui nada')
}


// se consideran siempre falsos:
if (false) {};
if (0) {}; // o -0
if (NaN) {};
if (null) {};
if (undefined) {};
if ('') {}; // "" o `` 

var idade = 8 - 8;
if (idade) {
     console.log(idade);
} else {
     console.log('Idade não existe'); // idade = 0 entonces falso así que pasa al else
}


// Operador lógico de negação !
if (!true) {}; // false
if (!1) {}; // false
if (!undefined) {}; // true
if (!'') {}; // true
if (!!'') {}; // false // las dos !! te dicen si la variable es true o false


// Operadores de comparação
10 == '10'; // true (más permisivo)
10 == 10; // true
10 === '10'; // false (muy estricta)
10 === 10; // true
10 != 15; //
10 != '10'; // false
10 !== '10'; // true


// Operadores lógicos && y
true && true; // true
true && false; // false
false && true; // false - si hay un falso, va a devolver falso sin mirar el resto de condiciones
'Gato' && 'Cão'; // 'Cão'- va a devolver el último valor verdadero si ambos lo son
(5 - 5) && (5 + 5); // 0 = false
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true


// Operadores lógicos || o
true || true; // true
true || false; // true
false || true; // true 
'Gato' || 'Cão'; // 'Gato' - va a decolver el primer verdadero que encuentre
(5 - 5) || (5 + 5); // 10
'Gato' || false; // 'Gato'
(5 >= 5) || (3 < 6); // true


// Switch
var corFavorita = 'Amarelo';

switch(corFavorita) {
     case 'Azul':
          console.log('Olhe para o céu.');
          break;
     case 'Vermelho':
          console.log('Olhe para rosas.');
          break;
     case 'Amarelo':
          console.log('Olhe para o sol.');
          break;
     case 'Verde':
          console.log('Ole para a floresta.');
          break;
     default:
          console.log('Feche os olhos');
          break;
}
