//Encuentra Elementos
//Dado un arreglo y un número, regrese un OBJETO que nos diga
//Cuántas veces apareció el num recibido, en qué posiciones
//Y el Numero
function encuentraElementos(arreglo, elemento) {
    var contador = 0;
    var posiciones = [];

    /*
    arreglo = [2, 0, 2] tamaño 3
    elemento = 2
    contador = 0;
    posiciones = []

    i=0
    arreglo[0] == elemento -> 2 == 2 SI
    contador = 1
    posiciones = [0]

    i = 1
    arreglo[1] == elemento -> 0 == 2 NO
    contador = 1
    posiciones = [0]

    i = 2
    arreglo[2] == elemento -> 2 == 2 SI
    contador = 2
    posiciones = [0, 2]

    i = 3
    -------
    */

    for(var i=0; i<arreglo.length; i++) {
        if(arreglo[i] == elemento) {
            contador++;
            posiciones.push(i);
        }
    }
   

    var obj = {
        contador,
        posiciones, //arreglo
        numero: elemento
    }

    return obj;
}

var resultado = encuentraElementos([2, 0, 2], 2) ;
console.log(resultado);