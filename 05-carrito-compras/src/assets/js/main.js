// @ts-nocheck
const listProducts = [
  { id: 1, name: "Ciruelo", price: 20, url: "assets/images/ciruelo.png" },
  { id: 2, name: "Coco", price: 10, url: "assets/images/coco.png" },
  { id: 3, name: "Frutilla", price: 10, url: "assets/images/frutilla.png" },
  { id: 4, name: "Kiwi", price: 2, url: "assets/images/kiwi.png" },
  { id: 5, name: "Limon", price: 6, url: "assets/images/limon.png" },
  { id: 6, name: "Mango", price: 8, url: "assets/images/mango.png" },
  { id: 7, name: "Melon", price: 2, url: "assets/images/melon.png" },
  { id: 8, name: "Piña", price: 67, url: "assets/images/pina.png" },
  { id: 9, name: "Platano", price: 90, url: "assets/images/platano.png" },
  { id: 10, name: "Sandia", price: 56, url: "assets/images/sandia.png" },
  { id: 11, name: "Uva", price: 3, url: "assets/images/uva.png" }
]

const gridProduct = document.getElementById("app-product")
const templateProduct = document.getElementById("template-product").content
const fragment = document.createDocumentFragment()

document.addEventListener("DOMContentLoaded", () => {
  listProducts.forEach((product) => {
    const { id, url, name, price } = product
    templateProduct.querySelector("img").src = url
    templateProduct.querySelector("span").textContent = name
    templateProduct.querySelector("b").textContent = price
    templateProduct.querySelector("button").dataset.id = id
    const clone = templateProduct.cloneNode(true)
    fragment.appendChild(clone)
  })
  gridProduct.append(fragment)
})
