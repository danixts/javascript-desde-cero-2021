class Persona {
  static newConstructor({ name, age, planet }) {
    // return new Persona(obj_x.name, obj_x.age, obj_x.planet)
    return new Persona(name, age, planet)
  }

  constructor(name = "", age = 0, planet = "") {
    this.name = name
    this.age = age
    this.planet = planet
  }
  // constructor(name = "", age = 0, planet = ""){}

  print() {
    console.log(`El nombre es ${this.name}, la edad es ${this.age}, el planeta es ${this.planet}`)
  }
}

const Vegeta = {
  name: "Vegeta",
  age: 28,
  planet: "Vegita"
}

const Goku = new Persona("Goku", 27, "Vegita")
const VegetaObject = Persona.newConstructor(Vegeta)

Goku.print()
VegetaObject.print()
