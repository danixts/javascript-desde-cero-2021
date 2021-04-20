// string to number
let numero = "3"
console.log(numero)
console.log(typeof numero)

numero = Number(numero)
console.log(numero)
console.log(typeof numero)

// string to number NaN
let cadena = "Hola"
console.log(cadena)
console.log(Number(cadena))

// boolean to number
let booleano = false
console.log(booleano)
console.log("Boleano ", Number(booleano))

// decimal to number
let flotante = "6.99999"
console.log(flotante)
console.log(Number(flotante))

// number to string
let numeroString = 10
console.log(numeroString, typeof numeroString)
console.log(String(numeroString))

// boolean to string
let booleanoString = false
console.log("booleano", booleanoString)
console.log("Boleano ", String(booleanoString), typeof String(booleanoString))

let arrArr = [1]
console.log("Array de datos ", String(arrArr), typeof String(arrArr))

// boolean values
console.log("CADENA -> ", Boolean(cadena))
console.log("CADENA VACIA -> ", Boolean(""))
console.log("CADENA VACIA CON UN ESPACIO -> ", Boolean(" "))
console.log("NUMERO 1 -> ", Boolean(1))
console.log("NUMERO 0 -> ", Boolean(0))
console.log("NULO -> ", Boolean(null))
console.log("undefined -> ", Boolean(undefined))
console.log("NaN -> ", Boolean(NaN))

// Otra forma
console.log("CADENA A NUMERO", parseInt(numero), typeof parseInt(numero))
console.log("CADENA A FLOAT ENTERO", parseInt(flotante), typeof parseInt(flotante))
console.log("CADENA A FLOAT ", parseFloat(flotante), typeof parseFloat(flotante))
console.log("NUMERO A STRING", numeroString.toString(), typeof numeroString.toString())

const decimal = 7.99999
console.log("CON DOS DECIMALES", decimal.toFixed(2))
