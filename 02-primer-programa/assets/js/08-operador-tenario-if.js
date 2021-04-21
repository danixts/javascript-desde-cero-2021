const edad = 26

if (edad === 26) {
  console.log("SI ES IGUAL")
}

if (edad === 26) {
  console.log("SI ES IGUAL")
} else {
  console.log("NO ES IGUAL")
}

if (edad === 26) {
  console.log("SI ES IGUAL")
} else if (edad >= 27) {
  console.log("SI ES IGUAL MAYOR A 27")
} else {
  console.log("EL IF DOBLE")
}

if (1) {
  console.log("SOY EL UNO")
} else {
  console.log("OTRO VALOR")
}

if (0) {
  console.log("SOY EL UNO")
} else {
  console.log("OTRO VALOR")
}

if (!null) {
  console.log("SOY EL NULO")
} else {
  console.log("NOY EL NULO")
}

console.log(!null)

// (expresion) ? verdadero : false
const valor = 0 === false ? "SI" : "NO"
console.log(valor)

const ternarioMultiple = edad < 10 ? "Es menor" : edad <= 26 ? "Daniel" : edad < 65 ? "Verdadero" : "Falso"

console.log(ternarioMultiple)
