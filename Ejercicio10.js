// Se pide realizar un script en el que el usuario introduce el número del mes (1 al 12) y
// devuelve si ese mes tiene 30 o 31 días.

function cantidadDeDias(mes) {
    mes = Number(mes)
    switch (mes) {
        case 1: alert('El mes de Enero tiene 31 dias');
            break;
        case 2: alert('El mes de Febrero tiene 28 dias');
            break;
        case 3: alert('El mes de Marzo tiene 31 dias');
            break;
        case 4: alert('El mes de Abril tiene 30 dias');
            break;
        case 5: alert('El mes de Mayo tiene 31 dias');
            break;
        case 6: alert('El mes de Junio tiene 30 dias');
            break;
        case 7: alert('El mes de Julio tiene 31 dias');
            break;
        case 8: alert('El mes de Agosto tiene 31 dias');
            break;
        case 9: alert('El mes de Septiembre tiene 30 dias');
            break;
        case 10: alert('El mes de Octubre tiene 31 dias');
            break;
        case 11: alert('El mes de Noviembre tiene 30 dias');
            break;
        case 12: alert('El mes de Diciembre tiene 31 dias');
            break;
        default: alert('El mes ingresado no es valido');
    }
}

mes = prompt('Ejercicio 10 - Ingrese mes')
cantidadDeDias(mes)