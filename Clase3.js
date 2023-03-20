//Generar una función que le ingrese por parámetro algún dato ya sea ingresado por el
//usuario o declarado anteriormente en su código y mostrar por consola el tipo de dato
//que es.

function saludo(salute){   
    console.log(typeof salute)
}

var salute = "hola"
saludo(salute)

//Dado dos números ingresados por el usuario, se pide realizar una función que
//devuelve la resta de ambos números. Mostrar el resultado por la consola.

function restando(numero1,numero2){
    return (resultado = numero1 - numero2)     
}

var numero1, numero2
numero1 = prompt("Ingresa un numero", '')
numero2 = prompt('Ingresa otro numero', '')

console.log(restando(numero1,numero2))

//Generar una función que le ingresen por parámetro dos valores distintos en dos
//variables a y b, luego el valor ingresado en a pasarlo a b y el valor Ingresado en b,
//Pasarlo a a y mostrarlos.

function intercambioDeValores(a,b){
    auxiliar = a
    a = b
    b = auxiliar
    console.log('Nuevo valor de a: ' + a + ' Nuevo valor de b: ' + b)
}
a = 10
b = 5
intercambioDeValores(a,b)

//Generar una función que le ingrese por parámetro el valor del lado de un cuadrado
//calcular su perímetro, su superficie, e informar los mismos en consola.

function calculos(lado){
    perimetro = (lado * 4)
    superficie = (lado * lado)
    console.log('Perimetro: ' + perimetro + ' Superficie: ' + superficie)
}
lado = 12
calculos(lado)

//Generar una función que dada una temperatura en grados fahrenheit los convierta a
//grados celsius.

function temperatura(gradosFahr){
    return gradosCel = (((gradosFahr - 32)*5)/9)
}

gradosFahr = 125
temperatura(gradosFahr)

//Realizar una función que calcule el factorial de un número ingresado por el usuario (el
//número no puede ser mayor de 10, realizar la validación). Mostrar el resultado por la
//consola.

function factorial(numero){
    producto = 1
    for (var i = numero; i > 1; --i) {
        producto *= i
    }
    return producto
} 

numero = prompt("Ingresa un numero", '')
factorial(numero)

//Dado una cadena de caracteres ingresada por el usuario, se pide realizar un script que
//indique si ese texto es un palíndromo. Ejemplo de palíndromo: “Somos o no somos”.

function esPalindromo(cadena){
    return (cadena.split('').reverse().join('') == cadena)
}

cadena = prompt('Ingrese algun texto para saber si es palindromo','')
esPalindromo(cadena)

//Dado una cadena de caracteres ingresada por el usuario, se pide realizar un script que
//lo muestre en mayúsculas y luego en minúsculas. Investigue el manejo de string en
//Javascript.

function minMayus(texto){
    return (texto.toUpperCase() + ' ' + texto.toLowerCase() )
}

texto = prompt('Ingrese texto','')
minMayus(texto)

// Se pide que un usuario ingrese una nota numérica de un alumno. Muestra la
// calificación resultante según la nota ingresada:
// 0-3: Muy deficiente
// 3-5: Insuficiente
// 5-6: Suficiente
// 6-7: Bien
// 7-9: Notable
// 9-10: Sobresaliente


function calificacion(nota){
        if (nota >= 0 && nota<= 3){console.log('Muy deficiente')}
            else if (nota > 3 && nota<= 5){console.log('Insuficiente')}
                else if (nota > 5 && nota<= 6){console.log('Suficiente')}
                    else if (nota > 6 && nota<= 7){console.log('Bien')}
                        else if (nota > 7 && nota<= 9){console.log('Notable')}
                            else if (nota > 9 && nota<= 10){console.log('Sobresaliente')}
}

nota = prompt('Ingrese nota','')
calificacion(nota)

// Se pide realizar un script en el que el usuario introduce el número del mes (1 al 12) y
// devuelve si ese mes tiene 30 o 31 días.

function cantidadDeDias(mes){
    mes = Number(mes)
    switch(mes){
        case 1: console.log('El mes de Enero tiene 31 dias');
        break;
        case 2: console.log('El mes de Febrero tiene 28 dias');
        break;
        case 3: console.log('El mes de Marzo tiene 31 dias');
        break;
        case 4: console.log('El mes de Abril tiene 30 dias');
        break;
        case 5: console.log('El mes de Mayo tiene 31 dias');
        break;
        case 6: console.log('El mes de Junio tiene 30 dias');
        break;
        case 7: console.log('El mes de Julio tiene 31 dias');
        break;
        case 8: console.log('El mes de Agosto tiene 31 dias');
        break;
        case 9: console.log('El mes de Septiembre tiene 30 dias');
        break;
        case 10: console.log('El mes de Octubre tiene 31 dias');
        break;
        case 11: console.log('El mes de Noviembre tiene 30 dias');
        break;
        case 12: console.log('El mes de Diciembre tiene 31 dias');
          break;
        default: console.log('El mes ingresado no es valido');
    }
}

mes = prompt('Ingrese mes','')
cantidadDeDias(mes)