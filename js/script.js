

let nombre = "";
while (nombre === "" || isNaN(nombre) === false) {
    nombre = prompt("Ingrese su nombre")
    if (nombre === "") {
        alert("Un texto vacío no es válido. Por favor, ingrese su nombre correctamente.")
    } else if (isNaN(nombre) === false) {
        alert("El nombre no puede ser un número. Por favor, ingrese un nombre válido.")
    } else {
        alert("¡Hola " + nombre + " bienvenido!")
    }
}

console.log(nombre)


let edad = prompt("Por favor, ingrese su edad")

while (isNaN(edad) || edad < 18) {
    alert("Recuerde que los productos solo pueden ser comprados con la supervisión de un adulto.")
    edad = prompt("Por favor, ingrese su edad nuevamente:")
}

alert("Aquí tiene nuestra lista de objetos a la venta:\n1\n2\n3")

console.log(edad)

let productoElegido

do {
    productoElegido = parseInt(prompt("Ingrese el número del producto deseado"))

    switch (productoElegido) {
        case 1:
            alert("Ha elegido el producto 1. ¡Muchas gracias!")
            break
        case 2:
            alert("Ha elegido el producto 2. ¡Muchas gracias!")
            break
        case 3:
            alert("Ha elegido el producto 3. ¡Muchas gracias!")
            break
        default:
            alert("Lo sentimos, no contamos con ese producto.")
            break
    }
} while (productoElegido < 1 || productoElegido > 3)


function saludar(nombreimgresado){
    console.log ("chua " + nombreimgresado + " gracias por su compra")
}
saludar(nombre)