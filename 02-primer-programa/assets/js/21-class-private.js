// # > private

class Forma {
  #area = 0

  constructor(base, altura) {
    this.base = base
    this.altura = altura
    this.#area = this.base * this.altura
  }

  calcArea() {
    console.log("La area es:", this.#area)
  }
}

const cuadrado = new Forma(6, 6)

cuadrado.calcArea()
