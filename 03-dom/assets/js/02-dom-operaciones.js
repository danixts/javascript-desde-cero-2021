const primero = document.getElementById("primero")
const span = document.querySelector("span")
const p = document.querySelector("p")

const etiqueta = document.createElement("div")
etiqueta.textContent = "Nueva etiqueta"
etiqueta.classList.add("bg-yellow-200", "text-yellow-900", "p-4")

// primero.appendChild(etiqueta)

// primero.insertBefore(etiqueta, p)
// insertBefore(nodeNew,nodoRef)

// otro forma
// insertAdjacentElement(position, insertedElement)
// insertAdjacentText(position, text)
// insertAdjacentHTML(position, text)

// primero.insertAdjacentElement("afterend", etiqueta)
// primero.insertAdjacentElement("beforebegin", etiqueta)

// primero.insertAdjacentElement("afterbegin", etiqueta)
// primero.insertAdjacentElement("beforeend", etiqueta)

// primero.insertAdjacentText("afterend", "Javascript DOM")

// const hola = "Hola desde el DOM"
// primero.insertAdjacentHTML("afterbegin", `<b>${hola}</b>`)

// remove()
// removeChild(node)
// replaceChild(new,old)

// span.remove()
// primero.removeChild(p)

primero.replaceChild(etiqueta, span)

// .cloneNode(true) | true > clona todo con sus hijos | false > solo clona el nodo

// NO SE DEBE HACER
// const clonePrimero = primero

const clonePrimero = primero.cloneNode(true)
const img = document.createElement("img")
img.src = "https://www.tonica.la/__export/1584386415176/sites/debate/img/2020/03/16/goku_saludando_portada.jpg_463833556.jpg"
img.classList.add("w-full")
clonePrimero.appendChild(img)
document.body.appendChild(clonePrimero)

// acceder a atributos del DOM

const main = document.querySelector("main")

console.log(main.hasAttributes())
console.log(main.hasAttribute("data-name"))

// main.hasAttribute(name|)
// main.hasAttributes()

const names = main.getAttributeNames()

// main.getAttribute()
// main.getAttributeNames()
console.log(names)
console.log(main.getAttribute("id"))
console.log(main.getAttribute("data-name"))

// main.removeAttribute(qualifiedName)
// main.setAttribute(qualifiedName, value)

main.setAttribute("data-age", "26")
main.removeAttribute("class")

console.log("RECUPERAMOS AGE:", main.dataset.age)
console.log("RECUPERAMOS AGE:", main.dataset.name)

main.dataset.planet = "vegita"

// console.log(main)

const fragment = document.createDocumentFragment()
const ul = document.createElement("ul")
// const ul1 = document.createElement("ul")
for (let i = 1; i <= 20; i++) {
  const li = document.createElement("li")
  li.dataset.id = `${i}`
  li.textContent = `✅ Item ${i}`
  fragment.appendChild(li)
}
ul.appendChild(fragment)
// ul1.appendChild(fragment)
primero.appendChild(ul)
// clonePrimero.appendChild(ul1)

{
  /* <main class="p-6" id="hola" data-name="daniel">
      <div id="primero" class="p-8">
        <span> Node SPAM </span>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptates recusandae, ipsum saepe dicta voluptatum optio fuga odio neque possimus! Id mollitia corporis vitae possimus
          veritatis quidem amet accusantium quis.
        </p>
      </div>
    </main> */
}
