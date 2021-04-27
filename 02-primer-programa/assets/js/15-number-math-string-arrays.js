// Number
// String
// Array

// NUMBER

const x = "1000.56231"

console.log("parseInt", parseInt(x))
console.log("parseInt", parseFloat(x))

// toFixed
const y = 199.123656
console.log("toFixed", y.toFixed(3))
console.log("toFixed", y.toFixed(1))
console.log("toFixed", y.toFixed(0))

// toExponential
const z = 1.243
console.log("toExponential", z.toExponential(2))

// toString
const w = 10
console.log("NUMERO ES= ", w)
console.log("toString", w.toString(), typeof w.toString())
console.log("toString", w.toString(16), typeof w.toString())
console.log("toString", w.toString(2), typeof w.toString())

// Math
// pow
console.log("pow", Math.pow(2, 3))

// raiz de un número
console.log("sqrt", Math.sqrt(25))

console.log("PI", Math.PI)

console.log("E", Math.E)

// min o max
console.log("max", Math.max(22, 1, 6, 7, 9, 10))
console.log("min", Math.min(22, 1, 6, 7, 9, 10, -1000))

// random
// [1:10]
const random = Math.floor(Math.random() * 10 + 1)
const random1 = Math.floor(Math.random() * 1000 + 100)
console.log("RANDOM", random)
console.log("RANDOM 1", random1)

// round
console.log("ROUND", Math.round(10.123456))

// abs
console.log("ABS", Math.abs(-1))

// sin | cos | tan
console.log("SIN", Math.sin(1))
console.log("COS", Math.cos(1))
console.log("TAN", Math.tan(1))

// String
const cad = "Hola desde la cadena L"
// ['H', 'o', 'l', 'a', ...., 19]
// [0, 1, 2, 3 ,4 ..., 19]
console.log("TAMAÑO DEL String", cad.length)
console.log(cad[cad.length - 1])

const cad1 = "Hola\nstring \n nombre \t Daniel"
console.log(cad1)

console.log("\u{2766} ✅ 🖥 🎨")

console.log(String.fromCharCode(93))

const cad2 = "@ @ @Javascript Vuejs React @"

console.log("charAt=", cad2.charAt(cad2.length - 1))

let concatenado = ""
for (let i = 0; i < cad2.length; i++) {
  concatenado += cad2.charAt(i) !== "@" ? cad2.charAt(i) : ""
}

// trim
console.log(concatenado.trim())
console.log("             CADENA        ".trim())

const cad3 = "Javascript Vuejs React"

// Mayusculas | Minusculas
console.log("MAYUS", cad3.toUpperCase())
console.log("MIN", cad3.toLowerCase())

console.log("SUBSTRING y INDEXOF")
// substr(start, end)
const cad4 = "Javascript Vuejs React"

const indexOf = cad4.indexOf("Vuex")

if (indexOf > 0) {
  console.log(cad4.substring(indexOf, cad4.length))
} else {
  console.log(cad4.substring(0, 10))
}

console.log("=== lastIndexOf === ")
const cad5 = "React Vue Svelte Vuex"

console.log("lastIndexOf", cad5.lastIndexOf("Vue"))
console.log("indexOf", cad5.indexOf("Vue"))

// includes | startsWith | endsWith

console.log("includes", "React Vue Svelte Vuex".includes("Vue"))
console.log("includes", "React Vue Svelte Vuex".includes("Angular"))

console.log("startsWith", "React Vue Svelte Vuex".startsWith("Vue"))

console.log("endsWith", "React Vue Svelte Vuex".endsWith("Vue"))

// slice

const cad6 = "ABCDEFGHIJK"

console.log("slice [0,3]", cad6.slice(-4, -2))

let caracteres = ""
for (let i = 32; i < 126; i++) {
  caracteres += String.fromCharCode(i)
}

console.log("CARACTERES:", caracteres)

// Array

// Forma #0
// const arr = new Array()

const arr = [1, 2, 3, 4, false, true, 22.33, [2, 3], { name: "Daniel", age: 26 }, null, undefined]
console.log(arr, typeof arr)

console.log("DEVUELVE ARR INDEX", arr[8])
console.log("LONGITUD ARR", arr.length)
