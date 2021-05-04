// @ts-nocheck
const templateList = document.getElementById("li").content
const app = document.getElementById("app")

const fragment = document.createDocumentFragment()

// for (let i = 1; i <= 10; i++) {
//   const b = templateList.querySelector("strong")
//   b.textContent = `🖥 ${i}`
//   const cloneTeamplate = templateList.cloneNode(true)
//   fragment.appendChild(cloneTeamplate)
// }

for (let i = 1; i <= 10; i++) {
  const li = templateList.querySelector("li")
  li.innerHTML = `<b>💻 ${i}</b>`
  const cloneTeamplate = templateList.cloneNode(true)
  fragment.appendChild(cloneTeamplate)
}

app.appendChild(fragment)

{
  /* 
  <div id="app"></div>
  <template id="li">
    <li>
      <span>Número: <strong></strong></span>
    </li>
  </template> 
  */
}
