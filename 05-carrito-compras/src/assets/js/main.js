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

/* APP */
const gridProduct = document.getElementById("app-product")
const listCart = document.getElementById("app-cart-list")
const totalCart = document.getElementById("app-cart-total")

/* TEMPLATES */
const templateProduct = document.getElementById("template-product").content
const templateCartList = document.getElementById("template-cart-list").content
const templateTotal = document.getElementById("template-cart-total").content

const fragment = document.createDocumentFragment()

let cart = {}

document.addEventListener("DOMContentLoaded", () => {
  renderProduct()
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"))
    renderCart()
  }
})

gridProduct.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-buy")) {
    createElementCart(e.target.parentNode)
    renderCart()
  }
})

listCart.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-minus")) {
    const id = e.target.dataset.id
    const product = cart[id]
    product.qty--
    if (product.qty !== 0) {
      cart[id] = { ...product }
      renderCart()
    } else {
      delete cart[id]
      renderCart()
    }
  }

  if (e.target.classList.contains("btn-plus")) {
    const id = e.target.dataset.id
    const product = cart[id]
    product.qty++
    cart[id] = { ...product }
    renderCart()
  }
})

const createElementCart = (data) => {
  const id = data.querySelector("button").dataset.id
  const name = data.querySelector(".text-name").textContent
  const price = data.querySelector(".text-price").textContent

  const product = {
    id,
    price,
    name,
    qty: 1
  }

  if (cart.hasOwnProperty(id)) {
    product.qty = cart[id].qty + 1
  }

  cart[id] = product
}

/* RENDERS */
const renderProduct = () => {
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
}

const renderCart = () => {
  listCart.innerHTML = ""
  Object.values(cart).forEach((product) => {
    const { id, price, name, qty } = product
    templateCartList.querySelector(".text-id").textContent = id
    templateCartList.querySelector(".text-name").textContent = name
    templateCartList.querySelector(".text-qty").textContent = qty
    templateCartList.querySelector(".text-total").textContent = +qty * +price
    templateCartList.querySelector(".btn-minus").dataset.id = id
    templateCartList.querySelector(".btn-plus").dataset.id = id
    const clone = templateCartList.cloneNode(true)
    fragment.appendChild(clone)
  })
  listCart.appendChild(fragment)
  localStorage.setItem("cart", JSON.stringify(cart))
  renderTotal()
}

const renderTotal = () => {
  totalCart.innerHTML = ""
  const qtyTotal = Object.values(cart).reduce((acc, { qty }) => acc + +qty, 0)
  const total = Object.values(cart).reduce((acc, { qty, price }) => acc + +qty * +price, 0)
  templateTotal.querySelector(".text-qty").textContent = qtyTotal
  templateTotal.querySelector(".text-total").textContent = total
  const clone = templateTotal.cloneNode(true)
  fragment.appendChild(clone)
  totalCart.appendChild(fragment)
}
