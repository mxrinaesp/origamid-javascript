// Strings, números, funciones... tienen props y metodos por eso son objetos

var nome = 'Marina';

nome.length; // 5
nome.charAt(2); // 'r'
nome.replace('rina', 'carena'); // 'Macarena'
nome; // 'Marina'

//////////////////////////////////////
var altura = 1.6;

altura.toString(); // '1.6'
altura.toFixed(); // '2' redondea

//////////////////////////////////////
function areaQuadrado(lado) {
     return lado * lado;
}

areaQuadrado.toString();
/* 'function areaQuadrado(lado) {
     return lado * lado;
}' */

areaQuadrado.length; // 1 - total de argumentos que posee la función

//////////////////////////////////////

var btn = document.querySelector('.btn'); // el metodo querySelector sirve para seleccionar un elemento dentro del HTML (el objeto document) y el argumento es un selector de CSS (.btn)

btn.classList.add('azul'); // añade la clase azul
btn.innerText; // 'Clique' - nombre dentro del <a> del HTML
btn.addEventListener('click', function() {
     console.log('Você clicou');
});