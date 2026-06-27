// ESCOPO DE FUNÇÃO
function mostrarCarro() {
     var carro = 'Fusca';
     console.log(carro);
}

mostrarCarro(); // Fusca en el console
console.log(carro); // error poque la var carro se creó dentro de la función  


// ESCOPO DE FUNÇÃO (PAI)
var coche = 'BMW';

function mostrarCoche() {
     var frase = `Meu coche é um ${coche}`;
     console.log(frase);
}

mostrarCoche(); // meu coche é um BMW
console.log(coche); // BMW


// ESCOPO DE BLOCO {} con var, funciona global dentro y fuera del bloque <- MAL. Mejor usar const/let
{
     let car = 'R8';
     console.log(car);
}
console.log(car); // da error, solo funcionaría si let estuviera fuera del {}


// {} CREA UN BLOCO --- NO CONFUNDIR CON = {} QUE CREA OBJETOS
{
     var celular = 'Samsung';
     const ano = 2020;
}
console.log(celular); // funciona porque var es global
console.log(ano); // error porque const es de bloque


// VAR EN FOR LOOP --- MAL
for (var i = 0; i < 10; i++) {
     console.log(`Número ${i}`);
}
console.log(i); // da 10 porque sale del loop y mantiene el valor final después del i++


// FOR LOOP CORRECTO CON LET
for (let i = 0; i < 10; i++) {
     console.log(`Número ${i}`);
}
console.log(i); // i is not defined


// CONST IMPIDE REDECLARACIÓN Y MODIFICAR EL VALOR DE LA VARIABLE. USAR SIEMPRE CONST
const mes = 'Janeiro';
mes = 'Dezembro'; // error porque intenté modificar el valor
/* const semana; // error porque se declaró la variable pero no se le dio valor */

const data = {
     dia: 27,
     mes: 'Junho',
     ano: 2026,
}

data = 'Julho'; // no puedo modificar el objeto const
data.dia = 29; // pero sí sus propiedades y métodos


// LET IMPIDE LA REDECLARACIÓN PERO PERMITE MODIFICAR EL VALOR DE LA VARIABLE. USAR SOLO CUANDO SE MODIFICA
let ano;
ano = 2026;
ano++;
console.log(ano); // 2027

/* let ano = 2030; // error porque no se puede redeclarar la variable */
