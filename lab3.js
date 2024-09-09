function esPalindromo(numero) {
    let decimalStr = numero.toString(); // Base 10
    let binarioStr = numero.toString(2); // Base 2

    // Verificar si una cadena es palíndromo
    function esPalindromoCadena(str) {
        return str === str.split('').reverse().join('');
    }

    return esPalindromoCadena(decimalStr) && esPalindromoCadena(binarioStr);
}

function verificarPalindromo() {
    let numero = document.getElementById("inputNumero").value;
    let resultado = esPalindromo(Number(numero)) 
        ? `${numero} es un palíndromo en base 10 y base 2.` 
        : `${numero} no es un palíndromo en ambas bases.`;

    document.getElementById("resultado").textContent = resultado;
}


function contarCaracteres(cadena) {
    let conteo = {};

    for (let char of cadena) {
        if (conteo[char]) {
            conteo[char]++;
        } else {
            conteo[char] = 1;
        }
    }

    return conteo;
}

console.log(contarCaracteres("AABBBACAA"));  // Retorna { A: 5, B: 3, C: 1 }

function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
}

console.log(esBisiesto(2024));  

function esPrimo(numero) {
    if (numero < 2) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

function sumatoriaPrimos(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        if (esPrimo(i)) {
            suma += i;
        }
    }
    return suma;
}

console.log(sumatoriaPrimos(7));  