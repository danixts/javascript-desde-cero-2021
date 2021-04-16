// Tipo string
let nombre = "Daniel Hola"

nombre = "123"

console.log(typeof nombre)

// Tipo numerico
let number = 357

number = 12.99

console.log(number, typeof number)

console.log(1 / 0)

console.log(Infinity)

console.log("cadena" / 10)

console.log(99999999999999999)

// BigInt
const bigNumber = 999999999999999999999n

console.log(bigNumber, typeof bigNumber)

// Template strings no es un tipo de dato es un tipo string
const literal = `BigNumber ${bigNumber}`

const precio = `Precio ${number}, Oferta ${number - 1}`

// console.log(literal, typeof literal)
console.log(precio)

// tipo booleano
const isNumber = true

console.log(typeof isNumber)

// tipo null
const isNull = null

console.log(isNull, typeof isNull)

// tipo undefined
const isUndefined = undefined

console.log(isUndefined, typeof isUndefined)

// tipo objeto
const objeto = {
  name: "Daniel",
  age: 26,
  isDate: false
}

console.log(objeto, typeof objeto)

/* Resumen de los tipos de datos en javascript */
// ===== string
// ===== number
// ===== bigint
// ===== boolean
// ===== null
// ===== undefined
// ===== object

/* Devuelve una cadena con el nombre del tipo de dato */
// typeof variable o typeof(variable)
