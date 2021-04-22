// function saludo() {
//   console.log("Hola que tal soy Goku!!")
// }

// saludo()
// saludo()
// saludo()
// saludo()
// saludo()

let name = "Daniel"

// function saludo(name) {
//   console.log(`Hola soy ${name}!!!`)
// }

saludo("Goku")
saludo("Coco")

function mensaje() {
  let mensaje = `Hola ${name}`
  console.log(mensaje)
}

mensaje()

function suma(a, b) {
  return a + b
}

console.log(typeof saludo)
console.log(typeof suma(2, 5))

// 6! = 1 * 2 * 3 * 4 * 5 * 6
function factorial(num) {
  let factorial = 1
  for (let i = 1; i <= num; i++) {
    factorial *= i
  }
  return factorial
}

// 3! = 1 * 2 * 3
console.log("factorial(3)", factorial(3))
console.log("factorial(6)", factorial(6))
console.log("factorial(8)", factorial(8))

console.log(2 ** 3)

// # Mini tarea
// Crear una funcion que que evele un numero x a un numero y
// 2 ^ 3 = 8

function factorial(num) {
  let factorial = 1
  let concat = ""
  for (let i = 1; i <= num; i++) {
    concat += i.toString() + "*"
    factorial *= i
  }
  return `(${num}!) = ${concat} = ${factorial}`
}

console.log(factorial(5))

// opcion antigua
function saludo(name) {
  if (name === undefined) {
    name = "Goku"
  }
  console.log(`Hola soy ${name}!!!`)
}

// version mas actual
// function saludo(name = "Goku") {
//   console.log(`Hola soy ${name}!!!`)
// }

console.log("========= UNDEFINED")
saludo()

/* function isTrue(valor) {
  if (valor) {
    // code....
    return "ES VERDADERO"
  } else {
    // code....
    return "ES FALSO"
  }
} */

function isTrue(valor) {
  if (valor) {
    // code....
    return "ES VERDADERO"
  }
  return `Valor = ${valor}`
}

console.log(isTrue(true))
console.log(isTrue(false))
