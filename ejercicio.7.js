/*
    Programa una función que valide si una palabra o frase dada, es un palíndromo 
    (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
*/

const esPalindromo = (text="") => {

    if (!text) return console.warn("Debe ingresar una palabra");

    let flag = true;
    let i = 0;
    let j = text.length - 1;
    let palabra = text.toLowerCase() 

    while (flag === true && !(i === j)) {
        if (!(palabra[i] === palabra[j])){
            flag = false;
        }
        i+=1;
        j-=1;
    }

    return console.info(flag);
}

console.info("EJERCICIO 7");
esPalindromo();
esPalindromo("Salas");
esPalindromo("Pelota");

// Investigar que hacer en los casos que la palabra ingresada lleve tilde





