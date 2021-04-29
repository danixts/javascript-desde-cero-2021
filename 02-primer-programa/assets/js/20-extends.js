// extends > Herencia
class Persona {
  constructor(nombre, edad, planet) {
    this.name = nombre
    this.age = edad
    this.planet = planet
  }

  print() {
    console.log(`El nombre ${this.name}, la edad es ${this.age}`)
  }
}

class Raza extends Persona {
  raza = undefined
  constructor(name, age, planet) {
    super(name, age, planet)
    this.raza = "Guerrero Z"
  }
  print() {
    console.log(`El nombre es ${this.name}, la raza es ${this.raza}`)
    super.print()
  }
}

const Goku = new Raza("Goku", 27, "Vegita")

console.log(Goku)

Goku.print()
