/* 1:Crear una función que reciba un número por parámetro
 e indique en consola si el número es par o impar.*/

 function verificarParImpar(numero) {
    if (numero % 2 === 0) {
      console.log(numero + " es un número par.");
    } else {
      console.log(numero + " es un número impar.");
    }
  }

  //Prueba funcion verificarParImpar//
verificarParImpar(5); //Output: 5 es un número impar.//
verificarParImpar(20); //Output: 20 es un número impar.//

/* 2: Crear una función que reciba dos números por parámetro 
e indique en consola que número es mayor,si ninguno lo es,
indicar por consola que son iguales.*/

function compararNumeros(num1, num2) {
    if (num1 > num2) {
      console.log(num1 + " es mayor que " + num2 + ".");
    } else if (num2 > num1) {
      console.log(num2 + " es mayor que " + num1 + ".");
    } else {
      console.log("Ambos números son iguales.");
    }
  }

  //Prueba funcion compararNumeros//

  compararNumeros(15,7); //Output: 15 es mayor que 7//
  compararNumeros(1,9); //Output: 9 es mayor que 1//
  compararNumeros(7,7); //Output: Ambos números son iguales//

  /*3- Crear una función que reciba un número por parámetro
  e indique en consola si ese número es múltiplo de 5*/

  function multiploDeCinco(numero) {
    if (numero % 5 === 0) {
      console.log(numero + " es múltiplo de 5.");
    } else {
      console.log(numero + " no es múltiplo de 5.");
    }
  }
  
  // Prueba funcion multiploDeCinco

  multiploDeCinco(15);  // 15 es múltiplo de 5.
  multiploDeCinco(3);   // 3 no es múltiplo de 5.
  multiploDeCinco(0);   // 0 es múltiplo de 5.
 
 /*4- Crear una función que reciba un número por parámetro e imprima por consola
 todos los números desde el 0 hasta llegar a ese número. 
 for (inicialización; condición; expresión de iteración){}
 let nombreVariable;{} */ 

 function imprimirNumerosHasta(numero) {
    for (let i = 0; i <= numero; i++) {
      console.log(i);
    }
  }

  //Prueba funcion imprimirNumerosHasta //
  imprimirNumerosHasta(5);  // Output: 0 1 2 3 4 5
  imprimirNumerosHasta(0); // Output: 0 
  imprimirNumerosHasta(3); // Output: 0 1 2 3

  /*5: Crear una función que reciba una palabra y un número por parámetro e imprima por consola  
  esa palabra la cantidad correspondiente al número indicado. */

  function imprimirPalabra(palabra, numero) {
    for (let i = 0; i < numero; i++) {
      console.log(palabra);
    }
  }
  
  // Prueba función imprimirPalabra
  imprimirPalabra('Hola',2); // Output: Hola Hola

  /*6: Crear una función que reciba un array por parámetro 
  e imprima por consola todos los valores de ese array.*/

  function imprimirArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Prueba función imprimirArray
const miArray = [1, 2, 3, 4, 5];
imprimirArray(miArray); // Output: 1 2 3 4 5

/*7: Función que reciba un array con 10 números e imprima por consola
todos los valores de ese array, menos el que se encuentre en la 5ta posición.
DATO: los índices de los arrays comienzan desde 0,
por lo que el quinto elemento tiene un índice de 4.*/

function imprimirArraySinQuintaPosicion(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (i !== 4) {
        console.log(arr[i]);
      }
    }
  }
  
  // Prueba funcion imprimirArraySinQuintaPosiciòn
  const nuevoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  imprimirArraySinQuintaPosicion(nuevoArray); //Output: 1 2 3 4 6 7 8 9 10

  /*8: Función que reciba un array de números y un número por parámetro e imprima
   por consola cada número del array multiplicado por el número pasado por parámetro.*/
  
   function multiplicarArrayPorNumero(arr, numero) {
    for (let i = 0; i < arr.length; i++) {
      const resultado = arr[i] * numero;
      console.log(resultado);
    }
  }
  
  // Prueba funcion multiplicarArrayPorNumero
  const TercerArray = [1, 2, 3, 4, 5];
  const numeroParametro = 2;
  multiplicarArrayPorNumero(miArray, numeroParametro); //Output: 2 4 6 8 10
  


  

