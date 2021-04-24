/*
    # Forma 1
    const nombreFuncion = () => devuelteValor // retorna un valor
    # Forma 2
    const nombreFuncion = () => {
        code ...
    }
    # Forma 3
    const nombreFuncion = () => {
        return devuelValor
    }
*/

/* 
    function (parametro)
             (parametro) => 
*/

// const suma = (a, b) => {
//   return a + b
// }

const suma = (a, b) => a + b

console.log("SUMA DE 12 + 12 =", suma(12, 12))

const factorial = (num) => {
  let factorial = 1
  for (let i = 1; i <= num; i++) {
    factorial *= i
  }
  return factorial
}

console.log(factorial(3))
console.log(factorial(6))
