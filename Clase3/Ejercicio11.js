// Crear un script que genere una pirámide como el ejemplo con los números del 1 al
// número que ingrese el usuario (no puede ser mayor de 10, realizar la validación)
function piramide(numrep) {    
    if (Number(numrep) == numrep) {
        if (numrep > 0 && numrep <= 10) {
            var rep, i;
            for (i = 0; i <= numrep; i++) {
                for (rep = 1; rep <= i; rep++) {
                    document.write(rep);
                }
                document.write("<br>");
            }
        }
        else {
            alert("El número introducido no es válido");
        }
    }
    else {
        alert("No has introducido un número");
    }
}

numrep = prompt("Ejercicio 11 - Introduce numero de repeticiones");
piramide(numrep)