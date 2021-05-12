import "./tailwind.css"
import "./assets/css/main.css"

import { Product } from "./assets/js/components"

document.addEventListener("DOMContentLoaded", () => {
  const product = new Product()
  product.render()
})
