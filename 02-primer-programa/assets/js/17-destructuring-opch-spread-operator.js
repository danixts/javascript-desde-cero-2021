// destructiring
const product = {
  name: "Uva",
  price: 10,
  color: "Morado"
}

const { name, price } = product

console.log(`El nombre es ${name} el precio es ${price}`)
console.log(`El nombre es ${product.name} el precio es ${product.price} el color es ${product.color}`)

const arr = [product, 12]

const [nombre, precio] = arr

console.log("NOMBRE", nombre, "PRECIO", precio)

const products1 = [
  {
    price: 1,
    name: "Uva"
  },
  {
    price: 10,
    name: "Manzana"
  },
  {
    price: 12,
    name: "Melon"
  },
  {
    price: 20,
    name: "´Piña"
  },
  {
    price: 50,
    name: "Kiwi"
  }
]

const filter = products1.filter(({ price }) => price <= 13)

console.log("FILTER DESCTRUCT", filter)

const calculaPrecio = (price) => {
  const discount = price - 0.1 * price
  const priceDouble = price * price
  const increment = () => price + 1
  return {
    discount,
    doble: priceDouble,
    increment
  }
}

const price1 = 20

const { discount: descuento, doble, increment } = calculaPrecio(price)

console.log("Calcula Precio", calculaPrecio(price))
console.log("El descuento es", descuento, "el doble del precio es", doble, "Incrementa en", increment())

// const [isShow, setIsShow] = useState(false)

// router.get("/hola", (req, res) => {
//   const { price, name } = req.body | params | query
//   req.body.price
//   req.body.name
// })

// spread operator
const arr2 = [1, 2, 3, 4]
const arr3 = [5, 6, 7, 8]

const arr4 = [...arr2, ...arr3]

// arr2.concat(arr3)
console.log(arr4)

const sumar = (...agrs) => agrs.reduce((acc, val) => acc + val, 0)

console.log("SUMA", sumar(10, 2, 3, 32, 45, 67))

const obj1 = { id: 1 }
const obj2 = { id: 1 }

const obj3 = obj1
console.log(obj1 === obj3)

// optional chainig | ?
const persona = {
  name: "Goku",
  edad: 27,
  planet: "Vegita",
  transforms: ["SS1", "SS2", "SS3"]
}

console.log(`El planeta de ${persona.name} planeta ${persona?.planet}`)
console.log("Transforms", persona?.transforms)
