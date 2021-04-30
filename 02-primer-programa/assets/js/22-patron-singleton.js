// singleton
class Singleton {
  static instance

  number = 0
  constructor(number = 0) {
    if (!!Singleton.instance) {
      return Singleton.instance
    }
    Singleton.instance = this
    this.number = number
  }
  print() {
    console.log(`El numero es: ${this.number}`)
  }

  sumar(x) {
    console.log("Suma es:", this.number + x)
  }
}

const number1 = new Singleton(1)
const number2 = new Singleton(2)
const number3 = new Singleton(3)

number1.print()
number2.print()
number3.print()

number1.sumar(20)
number2.sumar(50)
number3.sumar(100)
