// Definir variables
var n = 0;

// Funcion para leer numeros Reales
function leerNumero() {
    num = parseInt(
        prompt("Porfi, escribe un número")
    );
    return num;
}

function mostrarResultados(nf) {
    document.getElementById('td21').innerHTML = n;
    document.getElementById('td22').innerHTML = factorial(nf);
}
function mostrarFactorial(nf) {
    document.getElementById('td21').innerHTML = nf;
    document.getElementById('td22').innerHTML = factorial(nf);
}
function mostrarMultiplos(n, m) {
    document.getElementById("td11").innerHTML = n;
    document.getElementById('td12').innerHTML = m;
    document.getElementById('td13').innerHTML = multiplosDehasta(n, m);
}

function multiplosDehasta (n, m){
     mensaje = " los multiplos de "
     + n +
     "hasta " + m +
     "son: ";

     multiplo = 0;

     for (i=1; multiplo < m; i++) {
         console.log(i, "", multiplo);

 /*multiplos = " " + n*i;*/
         multiplo = n*i;
         mensaje = mensaje + multiplo + " ";

     }
     return mensaje;
}
function factorial(nf) {
    var factorial = 1;
    for ( i=1; i <= nf; i++ ) {
        factorial = factorial * i;
    }

    return factorial;
}

function sumar(s1, s2) {
    var suma = s1 + s2;
    return sumar;
}

function multiplicar(f1, f2 ) {
    var producto = f1 * f2;
    return producto;
}