// @ts-nocheck
import Data from "./Data/index.js"
import { Component } from "./Component/index.js"
import { cart } from "./State/index.js"

export class Product extends Component {
  constructor() {
    super("template-product", "app-product")
    this.Cart = new Cart()
    // this.render()
    this.event()
  }
  render() {
    Data.forEach((product) => {
      const { id, url, name, price } = product
      this.template.querySelector("img").src = url
      this.template.querySelector("span").textContent = name
      this.template.querySelector("b").textContent = price
      this.template.querySelector("button").dataset.id = id
      const clone = this.template.cloneNode(true)
      this.fragment.appendChild(clone)
    })
    this.root.append(this.fragment)
  }
  event() {
    document.addEventListener("DOMContentLoaded", () => {
      this.render()
      /* if (localStorage.getItem("cart")) {
          cart = JSON.parse(localStorage.getItem("cart"))
          renderCart()
        } */
    })
    this.root.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-buy")) {
        this.createElementCart(e.target.parentNode)
        this.Cart.render()
      }
    })
  }
  createElementCart(node) {
    const id = node.querySelector("button").dataset.id
    const name = node.querySelector(".text-name").textContent
    const price = node.querySelector(".text-price").textContent
    const product = {
      id,
      price,
      name,
      qty: 1
    }
    cart.add(product)
  }
}

export class Cart extends Component {
  constructor() {
    super("template-cart-list", "app-cart-list")
    this.Total = new Total()
    this.btnClear = document.getElementById("btn-clear")
    this.render()
    this.event()
  }

  render() {
    this.root.innerHTML = ""
    cart.get().forEach((product) => {
      const { id, price, name, qty } = product
      this.template.querySelector(".text-id").textContent = id
      this.template.querySelector(".text-name").textContent = name
      this.template.querySelector(".text-qty").textContent = qty
      this.template.querySelector(".text-total").textContent = +qty * +price
      this.template.querySelector(".btn-minus").dataset.id = id
      this.template.querySelector(".btn-plus").dataset.id = id
      const clone = this.template.cloneNode(true)
      this.fragment.appendChild(clone)
    })
    this.root.appendChild(this.fragment)
    this.Total.render()
    cart.setLocalStorage()
  }
  event() {
    this.btnClear.addEventListener("click", (e) => {
      cart.clear()
      this.render()
    })
    this.root.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-minus")) {
        const id = e.target.dataset.id
        cart.decrement(id)
        this.render()
      }

      if (e.target.classList.contains("btn-plus")) {
        const id = e.target.dataset.id
        cart.increment(id)
        this.render()
      }
    })
  }
}

export class Total extends Component {
  constructor() {
    super("template-cart-total", "app-cart-total")
    this.render()
  }
  render() {
    this.root.innerHTML = ""
    const [qtyTotal, total] = cart.total()
    this.template.querySelector(".text-qty").textContent = qtyTotal
    this.template.querySelector(".text-total").textContent = total
    const clone = this.template.cloneNode(true)
    this.fragment.appendChild(clone)
    this.root.appendChild(this.fragment)
  }
}
