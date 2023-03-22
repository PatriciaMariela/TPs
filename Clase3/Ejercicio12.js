// Se pide realizar un script para una tienda de coches: Si el coche a la venta es un Ford
// Fiesta (código "fiesta"), el descuento es de un 5%. Si el coche a la venta es un Ford
// Focus (código "focus"), el descuento es del 10%. El usuario introduce el artículo a
// través de su código y el script saca el descuento correspondiente por la consola.

function descuentoCoche(codigo) {
    precioFiesta = 50000
    precioFocus = 80000
    if (codigo == 'fiesta') {
        descuento = (precioFiesta * 0.05)
    } else if (codigo == 'focus') {
        descuento = (precioFocus * 0.1)
    } else {
        alert('El codigo ingresado no es valido')
    }
    return alert('El descuento correspondiente es: $'+ descuento)
}

codigo = prompt('Ejercicio 12 - Ingrese codigo de descuento:')
descuentoCoche(codigo)