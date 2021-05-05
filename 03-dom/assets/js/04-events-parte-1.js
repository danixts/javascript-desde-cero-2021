// @ts-nocheck
// const btnIncrement = document.getElementById("increment")
// const btnDecrement = document.getElementById("decrement")
// const text = document.querySelector("span")

// function increment(event){

// }

// const increment = () => {

// }

// let count = 1
// text.textContent = `${count}`
// btnDecrement.addEventListener("click", function (e) {
//   console.log("DECREMENT")
//   text.textContent = `${count > 0 ? count-- : "0"}`
// })

// btnIncrement.addEventListener("click", (e) => {
//   console.log("INCREMENT")
//   text.textContent = `${count++}`
// })

/* <!-- <div class="container mx-auto flex justify-center items-center py-56">
<div class="bg-blue-100 p-8 rounded-md flex flex-col justify-center items-center">
  <span class="text-3xl font-bold text-blue-900">1</span>
  <div class="flex flex-row space-x-4 mt-4">
    <button class="bg-blue-600 px-4 py-2 text-white" id="decrement">Decrement</button>
    <button class="bg-blue-600 px-4 py-2 text-white" id="increment">Increment</button>
  </div>
</div>
</div> -->

<!-- 0 - 255 para los valores Red Green Blue | alpha 0 - 1 -->
<!-- rgba(255,255,255,1) --> */

// rgb
const red = document.getElementById("red")
const green = document.getElementById("green")
const blue = document.getElementById("blue")
const rgbText = document.getElementById("rgb")
const main = document.getElementById("main")
function renderColor() {
  const r = red.value
  const g = green.value
  const b = blue.value

  main.style.borderWidth = `${r / 10}px`
  red.nextElementSibling.textContent = r
  green.nextElementSibling.textContent = g
  blue.nextElementSibling.textContent = b
  rgbText.textContent = `rgb(${r},${g},${b})`

  document.body.style.backgroundColor = `rgb(${r},${g},${b})`
}

red.addEventListener("input", renderColor)

green.addEventListener("input", renderColor)

blue.addEventListener("input", renderColor)

{
  /* <div class="bg-white rounded-lg border-2 border-black m-6" id="main">
      <div id="rgb" class="container mx-auto text-center pt-8 font-bold text-3xl">rgb(1,1,1)</div>
      <div class="container mx-auto text-center p-4">
        <div>
          RED
          <input type="range" id="red" min="0" max="255" value="0" />
          <span>0</span>
        </div>
        <div>
          GREEN
          <input type="range" id="green" min="0" max="255" value="0" />
          <span>0</span>
        </div>
        <div>
          BLUE
          <input type="range" id="blue" min="0" max="255" value="0" />
          <span>0</span>
        </div>
      </div>
    </div> */
}
