// closure
const contador = (function () {
  let count = 0

  function increment() {
    return count++
  }

  function decrement() {
    return count--
  }

  function value() {
    return count
  }

  return {
    increment,
    decrement
  }
})()

// objetos
const obj = {
  name: "Goku",
  edad: 27,
  print() {
    console.log(`El nombre ${this.name}, la edad es ${this.edad}`)
  }
}

const obj2 = {
  name: "Vegeta",
  edad: 28,
  print() {
    console.log(`El nombre ${this.name}, la edad es ${this.edad}`)
  }
}

obj.print()
obj2.print()

// funcion como objeto
function Persona(name, edad) {
  this.name = name
  this.edad = edad

  this.print = function () {
    console.log(`El nombre ${this.name}, la edad es ${this.edad}`)
  }
}

const Goku = new Persona("Goku", 27)
const Vegeta = new Persona("Vegeta", 28)

console.log(typeof Goku, typeof Vegeta)

Goku.print()
Vegeta.print()
