var idade = 29;
var time;
var simbolo = Symbol();
console.log(typeof simbolo); // typeof: muestra el tipo de dato (string, undefined...)

var nome = 'Marina';
var sobrenome = 'Espadas';
var nomeCompleto = nome + ' ' + sobrenome; // concatenamos palabras con + 
console.log(nomeCompleto);


'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
// "JavaScript é "super" fácil"; -> ERROR, hay que mezclar comillas simples y dobles para resaltar una palabra

// Template String `... ${} ...`
var gols = 1000;
var frase1 = `Ronaldo fez ${gols * 2} gols`;
console.log(frase1);