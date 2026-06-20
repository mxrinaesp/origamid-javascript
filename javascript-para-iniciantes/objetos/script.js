var carro = {}; // estructura para crear objetos
console.log(typeof carro); // 'object's

var pessoa = {
     nome: 'Marina',
     idade: 29
}
console.log(pessoa);

var quadrado = {
     lados: 4,
     area(lado) {
          return lado * lado;
     },
     perimetro(lado) {
          return this.lados * lado; // el this hace referencia al objeto por lo que this.lados = 4
     },
     cinco() {
          return 5;
     },
}
console.log(quadrado.area(3)); // 9
console.log(quadrado.perimetro(10)); // 40
console.log(quadrado.cinco()); // 5


console.log(Math.random()); // va a dar un num aleatorio entre 0 y 1
Math.PI; // Math es un objeto nativo de JS con propiedades como PI o métodos como random()

var height = 120;
var menu = {
     width: 800,
     height: 50,
     backgroundColor: '#84E',
     metadeHeigth() {
          return this.height / 2; // va a devolver 25 porque coge menu.height
          /* return height / 2;      va a devolver 60 porque coge el height de fuera */
     },
}
console.log(menu.backgroundColor); // accede a la propiedad backgroundColor de menu (Get)

menu.backgroundColor = '#b2ffff'; // sustituye el valor de una propiedad por otra (Set)

menu.position = 'fixed'; // añade una nueva propiedad
