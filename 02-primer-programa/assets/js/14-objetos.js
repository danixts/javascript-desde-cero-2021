/* `
 string
 number
 bigint
 boolean
 null
 undefined
 symbol
*/

/*
 {
     "key" : "value",
 }
*/

const objeto = {
  name: "Daniel",
  edad: 26,
  ciudad: "La Paz",
  nacionalidad: "Boliviana",
  imprime: () => {
    console.log("SOY IMPRIME")
  },
  juegos: "Dota"
}

console.log("OBJETO", objeto)
// Forma #1
console.log("Mi nombre es", objeto["name"])
console.log("Soy la funcion", objeto["imprime"]()) // objecto["imprime"] = imprime()
console.log("OBJETO VACIO", {}, typeof {})

// if (objeto["name"] !== undefined)
if (objeto["name"]) {
  console.log("El nombre es", objeto["name"])
} else {
  console.log("El nombre no existe")
}

// Fomra #2
/* nombreObjeto.{alguna key} */
console.log("NOMBRE FORMA 2", objeto.name)
console.log(`Mi nombre es ${objeto.name}, edad es ${objeto.edad}, ciudad ${objeto.ciudad}, nacionalidad ${objeto.nacionalidad}`)

objeto.imprime()

const objeto2 = {
  name: "Daniel",
  edad: 26,
  ciudad: "La Paz",
  nacionalidad: "Boliviana",
  imprime: () => {
    console.log("SOY IMPRIME")
  },
  juego: {
    name: "Dota",
    dificultad: "MEDIA",
    isGood: true
  }
}
// Forma #1
console.log("OBJETO 2 forma 1", objeto2["juego"])
console.log("OBJETO 2 forma 1", objeto2["juego"]["dificultad"])

// Forma #2
console.log("OBJETO 2 forma 2", objeto2.juego.name)
console.log("OBJETO 2 SIN KEY forma 2", objeto2.juego)

// comparar objetos
const producto1 = {
  name: "Uva",
  price: 10
}

const producto3 = {
  name: "Uva",
  price: 10
}

const producto2 = {
  name: "Sandia",
  price: 10
}

const producto4 = producto1

console.log("COMPARAR OBJETO", producto1 === producto3)
console.log("COMPARAR REFERENCIA DEL OBJETO", producto1.name === producto3.name)
console.log("COMPARAR OBJETO IGUAL", producto4 === producto1)
