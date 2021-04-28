// Array

// Forma #0
// const arr = new Array()

// const arr = [1, 2, 3, 4, false, true, 22.33, [2, 3], { name: "Daniel", age: 26 }, null, undefined]
// console.log(arr, typeof arr)

// console.log("DEVUELVE ARR INDEX", arr[8])
// console.log("LONGITUD ARR", arr.length)

// concat
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [3, 5, 7]

// cad1 + cad2
console.log("ARR1 = ", arr1)
console.log("ARR2 = ", arr2)
console.log("CONCAT = ", arr1.concat(arr2))

// push | pop | shift | unshift

console.log("PUSH")
arr1.push(6)
arr1.push(6, 7)
console.log("ARR1 = ", arr1)

console.log("POP")
arr1.pop()
arr1.pop()
console.log("ARR1 =", arr1)

console.log("ARR2 = ", arr2)

console.log("SHIFT", arr2.shift())
arr2.unshift(8)
console.log("UNSHIFT", arr2)

const cadenas = ["1a", "3b", "5c", "7d"]
const products = [
  {
    price: 12,
    product: "Uva"
  },
  {
    price: 13,
    product: "Manzana"
  }
]

for (let i = 0; i < cadenas.length; i++) {
  console.log(cadenas[i])
}

// for x of arr
for (let cad of cadenas) {
  console.log(cad)
}

for (let product of products) {
  console.log(product)
}

// console.log("FOR IN")
// for (let product in products) {
//   console.log(product)
// }

// map
console.log("==========================")
const map = products.map(function (product) {
  const descuento = product.price - product.price * 0.1
  return {
    name: product.product,
    price: descuento,
    // descuento: descuento // version antigua
    descuento
  }
})
console.log("==========================")
console.log("==== Arrow Function")
// name: product.product,
//     price: descuento,
//     // descuento: descuento // version antigua
//     descuento
//     product.price - product.price * 0.1

const descuento = 0.2

// const mapArrow = products.map((product) => ({
//   price: product.price - product.price * descuento,
//   name: product.product
// }))

const discount = (product) => ({
  price: product.price - product.price * descuento,
  name: product.product
})

// const returnMap = (product) => {
//     return {
//         price: product.price - product.price * descuento,
//         name: product.product
//     }
// }

const mapArrow = products.map(discount)

console.log("PRODUCTS ORIGINALES", products)
console.log("MAP", mapArrow)

const products1 = [
  {
    price: 10,
    name: "Uva"
  },
  {
    price: 10,
    name: "Manzana"
  },
  {
    price: 10,
    name: "Melon"
  },
  {
    price: 10,
    name: "´Piña"
  },
  {
    price: 10,
    name: "Kiwi"
  }
]

// filter
const filter = products1.filter((product) => product.price <= 13)

// const arrEmpty = []
// for (const product of products1) {
//   if (product.price <= 13) {
//     arrEmpty.push(product)
//   }
// }

// console.log("FILTER OF ARR", arrEmpty)
const arrNumber = [1, 2, 3, 4, 5, 7, 8, 9]
const filterNumbers = arrNumber.filter((number) => number % 2 === 0)

console.log("FILTER", filter)
console.log("FILTER NUMBERS", filterNumbers)

// reduce

let acc = 0
for (const number of arrNumber) {
  acc += number
}

console.log("SUMA TOTAL", acc)

// reduce(cb(acc, val),initValue)
const total = arrNumber.reduce((acc, val) => acc + val, 0)
console.log("TOTAL SUMA REDUCE", total)

const totalProductsPrice = products1.reduce((acc, val) => acc + val.price, 0)

console.log("TOTAL SUMA REDUCE OBJECT", totalProductsPrice)

// Tarea reduce aplanar array
// [1,2,3,[2,3],[4,5,6],[2,5]]
// [1,2,3,2,3,4,5,6,2,5]

const arr3 = [1, 2, 3, [2, 3], [4, 5, 6], [2, 5]]
// flat | flatMap

const flatArr = arr3.flat(2)

console.log("ARR FLAT", arr3)
console.log("FLAT", flatArr)

// flatMap

// [1/2, 2/2, 3/2]
const flatMapArr = arr3.flatMap((val) => val / 2)
console.log("flatMapArr", flatMapArr)

// forEach
arr3.forEach((val, index) => {
  console.log("VALUE", val)
  console.log("INDEX", index)
  //   console.log("ARR", arr)
})

// find | findIndex

const searchProduct = products1.find((product) => product.name === "Uva")

// let productsSave
// for (const product of products1) {
//   if (product.name === "Uva") {
//     productsSave = product
//   }
// }

console.log("SEARCH PRODUCT", searchProduct)
// console.log("SEARCH PRODUCT OLD", productsSave)

const productIndex = products1.findIndex((product) => product.name === "Kiwi")
console.log("SEARCH INDEX PRODUCT", productIndex)

// indexOf | includes | join | split
const arrFrutas = ["Manzana", "Kiwi", "Papaya"]
const indexOfNumber = arrNumber.indexOf(9)
const indexOfFrutas = arrFrutas.indexOf("Kiwi")
console.log("INDEX OF NUMBERS", indexOfNumber)
console.log("INDEX OF FRUTAS", indexOfFrutas)

console.log("INCLUDES", ["Manzana", "Kiwi", "Papaya"].includes("Kiwi"))
console.log("INCLUDES", ["Manzana", "Kiwi", "Papaya"].includes("Kiwix"))

const join = [1, 2, 3, 4, 5, 6, 7, 8].join("*")
console.log("JOIN", join, typeof join)

const split = "HOLA MUNDO DESDE EL ARRAY".split(" ")
console.log("SPLIT", split, typeof join)

const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

// btoa > string a base64 | atob > base64 a string
// JSON stringify | parse

/* {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  } */

const arrayJwt = jwt.split(".")
const headerJwt = arrayJwt[1]
const parseJSON = JSON.parse(atob(headerJwt))
console.log(parseJSON.name)

// reverse
const revert = [1, 2, 3, 4, 5, 6, 7, 8].reverse()
console.log("REVERSE ARRAY", revert)

// sort
const sort = [3, 4, 5, 1, 2, 3, 5].sort((a, b) => b - a)
console.log("SORT ARRAY", sort)

const frutas = [
  {
    price: 1,
    name: "Uva"
  },
  {
    price: 10,
    name: "Manzana"
  },
  {
    price: 30,
    name: "Melon"
  }
]

const sortFrutas = frutas.sort((a, b) => b.price - a.price)
console.log("SORT OBJETC", sortFrutas)
