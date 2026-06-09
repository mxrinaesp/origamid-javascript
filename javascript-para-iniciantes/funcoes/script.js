function areaQuadrado(lado) {
     return lado * lado;
}

console.log(areaQuadrado(5)); // 25


function pi() {
     return 3.14;
}
var total = 5 * pi(); // 15.7

console.log(total);


function imc(peso, altura) { // peso y altura son parámetros
     var imc = peso / (altura * altura);
     return imc;
}

console.log(imc(80, 1.80)); // 80, 1.60 son argumentos
console.log(imc(47, 1.62));


function corFavorita(cor) {
     if (cor === 'azul') {
          return 'O mar é bonito';
     } else if (cor === 'verde') {
          return 'O mato é bonito';
     } else {
          return 'Eu não gosto de cores';
     }
}
console.log(corFavorita()); // va a return el else


addEventListener('click', function(){ console.log('Oi'); }); //funciones tb pueden ser parámetros


//una función puede return tipos de datos diferentes, pero no es aconsejable.
//MEJOR SIEMPRE EL MISMO (string, number, boolean, etc)
function terceiraIdade(idade) {
     if (typeof idade !== 'number') {
          return 'Informe a sua idade!'; // return una string
     } else if (idade >= 60) {
          return true; // return un boolean
     } else {
          return false;
     }
}

console.log(terceiraIdade(70));


function faltaVisitar(paisesVisitados) {
     var totalPaises = 193;
     return `Falta visitar ${totalPaises - paisesVisitados} países.` // template String `${}` con comilla rara
}
console.log(faltaVisitar(4));


var profissao = 'Desenvolvedora';

function dados() {
     var nome = 'Marina';
     var idade = 29;
     function outrosDados() {
          var endereco = 'Granada';
          return `${nome}, ${idade}, ${endereco}, ${profissao}`;
     }
     return outrosDados();
}

console.log(dados());
/* console.log(outrosDados()); da error porque solo funciona dentro de su función*/