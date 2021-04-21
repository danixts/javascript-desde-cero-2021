const anio = 2021
const mes = 4
const dia = 20

// expresion a && expresion b
// console.log("OPERADOR AND", a && b)

console.log("true && true", true && true)
console.log("true && false", true && false)
console.log("false && true", false && true)
console.log("false && false", false && false)

if (anio == 2021 && dia == 20 && mes == 3) {
  console.log("SI ES 2021 con dia 20 y mes abril")
} else {
  console.log("NO NO NO!")
}

// OPERADOR OR
console.log("true || true", true || true)
console.log("true || false", true || false)
console.log("false || true", false || true)
console.log("false || false", false || false)

const mensaje = anio == 2021 || dia == 21 || mes == 5 ? "SI AÑO 2021" : "Ups!!"
console.log(mensaje)

const valor = anio == 2020 || "ALGUN VALOR"
console.log("VALOR DEVUELTO = ", valor)
console.log("VALOR DEVUELTO BOOLEANO = ", Boolean(valor))
console.log("VALOR DEVUELTO NEGADO = ", !valor)
if (!valor) {
  console.log("NO ES 2021")
} else {
  console.log("ES 2021")
}

const valor1 = "ALGUN VALOR" || "ALGUN VALOR POR DERECHA"
const valor2 = undefined || "ALGUN VALOR"
console.log("BOOLEANO = ", valor)
console.log("NULL = ", valor1)
console.log("UNDEFINED = ", valor2)

console.log("NEGADO ========")
console.log("NEGADO true", !true)
console.log("NEGADO false", !false)

if ((anio == 2020 && mes == 4) || dia == 21) {
  console.log("AÑO 2021 mes abril")
}

if ((anio == 2020 && mes == 4) || dia == 20) {
  console.log("AÑO 2021 mes abril")
}
