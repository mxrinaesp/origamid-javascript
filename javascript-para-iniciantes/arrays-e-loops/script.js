var videoGames = ['Switch', 'PS5', 'XBOX'];

videoGames[0]; // 'Switch'
videoGames[2]; // 'XBOX'

videoGames.pop(); // muestra el último item y lo elimina del array
videoGames.push('3DS'); // añade al final del array
videoGames.length; // 3


/////////////FOR LOOP/////////////////////
for (var numero = 1; numero <= 4; numero++) { // (inicio, condición, incremento)
     console.log(numero);
};

/////////////WHILE LOOP/////////////////////
var i = 0;
while (i < 10) {
     console.log(i);
     i = i + 3;
}

/////////////FOR LOOP CON ARRAY.LENGTH & BREAK/////////////////////
var videoGames = ['Switch', 'PS5', 'XBOX', '3DS'];

for (var i = 0; i < videoGames.length; i++) {
     console.log(videoGames[i]); // van a salir los 4 elementos del array
};

for (var item = 0; item < videoGames.length; item++) {
     console.log(videoGames[item]); // primero muestra Switch y PS5
     if (videoGames[item] === 'PS5') {
          break; // después del PS5, se cumple la condición, así que da un break y se para el loop
     }
}

/////////////FOR-EACH LOOP///////////////////// ejecuta una función para cada item del array
var frutas = ['banana', 'laranja', 'uva', 'abacaxi', 'morango'];

frutas.forEach(function(fruta, index) {
     console.log(fruta, index);
});
