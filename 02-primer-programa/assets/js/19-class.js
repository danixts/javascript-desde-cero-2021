// Clases
class Persona {
  static COUNT = 0

  static get getCount() {
    return `Tienes ${Persona.COUNT} instances`
  }

  get getAge() {
    return this.age * 2
  }

  set setName(name) {
    this.name = name
  }

  constructor(nombre = "No tengo", edad = -1) {
    this.name = nombre
    this.age = edad

    Persona.COUNT++
  }

  print() {
    console.log(`El nombre ${this.name}, la edad es ${this.age}`)
  }
}

const Goku = new Persona("Goku", 27)
const Vegeta = new Persona("Vegeta", 28)

console.log(typeof Goku, typeof Vegeta)
console.log(Goku, Vegeta)
Goku.print()

console.log(Persona.getCount)
console.log("Goku", Goku.getAge)

Vegeta.print()
Vegeta.setName = "Trunks"
Vegeta.print()
