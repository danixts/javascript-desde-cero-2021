// const saludar = function () {
//   console.log(`Hola desde una variable`)
// }

// saludar("")

const saludar = function (name) {
  console.log(`Hola soy ${name}`)
}
saludar("")
saludar("Daniel")

const sumar = function (a, b) {
  return a + b
}

console.log(sumar(10, 10))

const restar = sumar(2, 2) - 3
const multiplicar = sumar(3, 7) * 10

console.log("RESTAR FUNCION= ", restar)
console.log("MULTI FUNCION= ", multiplicar)

// funcion (param, funcion)
function queDia(dia, mensaje) {
  if (dia === 22) {
    mensaje("Es dia 22")
  } else {
    console.log("Dia no valido")
  }
}

console.log("============ DENTRO DE UNA FUNCION")
queDia(25, function (mensaje) {
  console.log(mensaje)
})

console.log("============ GUARDO LA FUNCION")
const mensaje = function (mensaje) {
  console.log(mensaje)
}

queDia(22, mensaje)

const comprar = function (producto, mensaje, precio) {
  if (producto === "cafe") {
    mensaje("TENGO CAFE", precio)
  } else {
    console.log(`El producto no es valido ${producto}`)
  }
}

const imprimeCafe = function (mensaje, precio) {
  console.log(mensaje)
  precio()
}

const imprimePrecio = function () {
  console.log("El precio es 10")
}

comprar("cafe", imprimeCafe, imprimePrecio)
