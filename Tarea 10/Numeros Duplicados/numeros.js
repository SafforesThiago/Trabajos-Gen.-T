var numeros = [2, 4, 5, 37, 0];
var numeros_duplicados = {};

for (var i = 0; i < numeros.length; i++) {
  var numero = numeros[i];
  numeros_duplicados[numero] = numero * 2;
}

console.log(numeros_duplicados);



