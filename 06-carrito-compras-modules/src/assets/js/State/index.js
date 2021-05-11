class State {
  cart = {}
  KEY = "cart"
  static instance
  static getInstance() {
    if (this.instance) {
      return this.instance
    }
    this.instance = new State()
    return this.instance
  }

  constructor() {
    if (localStorage.getItem(this.KEY)) {
      this.cart = JSON.parse(localStorage.getItem(this.KEY))
    }
  }

  add(product) {
    const { id } = product
    if (this.cart.hasOwnProperty(id)) {
      product.qty = this.cart[id].qty + 1
    }
    this.cart[id] = product
    console.log(product)
  }

  increment(id) {
    const product = this.cart[id]
    product.qty++
    this.cart[id] = { ...product }
  }
  decrement(id) {
    const product = this.cart[id]
    product.qty--
    if (product.qty !== 0) {
      this.cart[id] = { ...product }
    } else {
      delete this.cart[id]
    }
  }
  total() {
    const qtyTotal = this.get().reduce((acc, { qty }) => acc + +qty, 0)
    const total = this.get().reduce((acc, { qty, price }) => acc + +qty * +price, 0)
    return [qtyTotal, total]
  }

  get() {
    return Object.values(this.cart)
  }

  clear() {
    this.cart = {}
    localStorage.removeItem(this.KEY)
  }

  setLocalStorage() {
    localStorage.setItem(this.KEY, JSON.stringify(this.cart))
  }
}

export const cart = State.getInstance()
