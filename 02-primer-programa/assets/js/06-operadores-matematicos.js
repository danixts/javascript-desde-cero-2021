let a = 7
let b = 11

// Operadores basicos
// + - * / %
console.log("a =", a, "b = ", b)
console.log("SUMA ENTEROS", "a + b= ", a + b)
console.log("RESTA ENTEROS", "a - b= ", a - b)
console.log("MULTI ENTEROS", "a * b= ", a * b)
console.log("DIV ENTEROS", "a / b= ", a / b)
console.log("MODULO ENTEROS", "a % b= ", a % b)

let x = 2
let y = 10
// Operador de elevacion
console.log("x =", x, "y = ", y)
console.log("x^y", x ** y)
console.log("Otra forma -> x^y", Math.pow(x, y))

// Operaciones con cadenas
let cad1 = "Hola"
let cad2 = "Mundo"

console.log("cad1 =", cad1, "cad2 = ", cad2)
console.log("SUMA STRING", "a + b= ", cad1 + cad2)
console.log("RESTA STRING", "a - b= ", cad1 - cad2)
console.log("MULTI STRING", "a * b= ", cad1 * cad2)
console.log("DIV STRING", "a / b= ", cad1 / cad2)
console.log("MODULO STRING", "a % b= ", cad1 % cad2)

const print = cad1 + " " + cad2 + "x=" + x + cad2 + cad1
console.log(print)

const templateString = `CADENA= ${cad1} ${cad2}, MULTI x=${x} y=${y} -> x^y= ${x ** y}`
console.log(templateString)

// Cadenas y numeros
let x1 = "2"
let y2 = 3

console.log(`x1=${x1}, y2=${y2} = ${Number(x1) + y2}`)
console.log(`x1=${x1}, y2=${y2} = ${x1 ** y2}`)
console.log(`true + true = ${true + true}`)
console.log(`true - true = ${true - true}`)

// Cadena y decimal
let u = 3.1416
let v = "2.357"
let vx = "2b"
console.log(`u=${u}, v=${v} = ${u + Number(v)}`)
console.log(`u=${u}, v=${v} = ${u * v}`) // number * number
console.log(`u=${u}, vx=${vx} = ${u * vx}`)

// Operador unario
console.log(`V= ${v}, V tipo string= ${typeof v}, V tipo numero= ${typeof +v}`)
console.log(`booleano = ${+true}`)
console.log(`string a numero = ${+"cadena"}`)
console.log(+"10" + 20 * "10")

// Atajos + - * / %
let suma = a + b
// suma = suma + 7

// suma -= 7
// suma *= 7
// suma /= 7
// suma %= 7
suma += 7
console.log("SUMA ATAJO", suma)
suma++
console.log("SUMA ++", suma)
suma--
console.log("SUMA --", suma)
++suma
console.log("SUMA ++ INVERTIDO", suma)
--suma
console.log("SUMA -- INVERTIDO", suma)

let suma_1 = 0
// suma = suma + 1
suma_1++
// suma = 1 + suma
++suma_1
console.log("SUMA IZQ DER", suma_1)

let suma_2 = (2 + 3, 5 + 7)
console.log(suma_2)
