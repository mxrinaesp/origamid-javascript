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
if (!!'') {}; // false


// Operdaores de comparação
10 == '10'; // true (más permisivo)
10 == 10; // true
10 === '10'; // false (muy estricta)
10 === 10; // true
10 != 15; //
10 != '10'; // false
10 !== '10'; // true