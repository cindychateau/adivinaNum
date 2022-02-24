//Generamos número aleatorio
var numeroAleatorio = 0;
numeroAleatorio = Math.floor( Math.random() * 101 ); // 0 - 100
console.log( numeroAleatorio );

//Indicar en la clase resultado si el número que intentaron adivinar
//es mayor, menor o igual al número aleatorio
function adivina() {
    let resultado = document.querySelector( '.resultado' );

    console.log(resultado);

    var num = document.querySelector('#adivinaNumero').value;
    console.log( num);
    if(num == numeroAleatorio) {
        console.log('Mismo num');
        resultado.innerHTML = "<img src='web.png'>";
    } else if(num > numeroAleatorio){
        //Mi numero es mayor al numero que trato de adivinar
        resultado.innerHTML = "El número que ingresaste es mayor al número aleatorio";
    } else {
        //Mi numero es menor al numero que trato de adivinar
        resultado.innerHTML = "El número que ingresaste es menor al número aleatorio";
    }


}