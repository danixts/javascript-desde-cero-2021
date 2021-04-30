const ul = document.querySelector("ul")
// const paragraph = document.querySelector("#paragraph") // id > #{name}
const paragraphClass = document.querySelector(".paragraph") // class > .{name}

// const ul = document.querySelector("ul")

console.log(ul)
// console.log(paragraph)
console.log(paragraphClass)

console.log(document.body)
console.log(document.head)

const paragraphId = document.getElementById("paragraph")

console.log(paragraphId)

const ulMultiple = document.querySelectorAll("ul")
const divMultiple = document.querySelectorAll("div")

console.log(ulMultiple)
console.log(divMultiple)

ulMultiple.forEach((el, index) => {
  el.style.backgroundColor = "purple"
  el.style.color = "white"
  el.style.padding = "1rem"
  el.style.borderRadius = "6px"
  el.style.marginTop = "1rem"

  let template = ""
  for (let i = 1; i <= 3; i++) {
    template += /* html */ `<li> Elemento ${index + i}<li/>`
  }
  //   el.innerText = "Nuevo elemento"
  el.innerHTML = template
})

const paragraph = document.querySelector("#paragraph")

paragraph.classList.add("text-2xl")
paragraph.classList.add("text-white")
paragraph.classList.add("bg-red-600")
paragraph.classList.add("p-4")
paragraph.classList.add("rounded-md")

// paragraph.classList.remove("p-4")
// paragraph.classList.remove("rounded-md")

// paragraph.classList.toggle("active") // active | '' | active
const p = document.createElement("h3")
p.textContent = "Lorem ipsum dolor sit amet."
p.classList.add("text-red-900")
p.classList.add("mt-6")
paragraph.appendChild(p)

// paragraph.append(p)
