// @ts-nocheck
const inputName = document.getElementById("name")

// Revisar expresiones regulares
// inputName.addEventListener("change", function (e) {
//   const regex = String(e.target.value).match(/^(?!.*@.*@.*$)(?!.*@.*\-\-.*\..*$)(?!.*@.*\-\..*$)(?!.*@.*\-$)(.*@.+(\..{1,11})?)$/gi)
//   console.log(regex)
//   console.log(e.target.value)
// })

const form = document.querySelector("form")

// const props = { value: "Daniel", required: false, minLength: 2, maxLength: 20, min: 1, max: 10 }

function validate({ value, required, minLength, maxLength, min, max }) {
  let isValid = true
  if (required) {
    isValid = isValid && value.toString().trim().length !== 0
  }
  if (minLength !== null && typeof value === "string") {
    isValid = isValid && value.length >= minLength
  }
  if (maxLength !== null && typeof value === "string") {
    isValid = isValid && value.length <= maxLength
  }
  if (min !== null && typeof value === "number") {
    isValid = isValid && value >= min
  }
  if (max !== null && typeof value === "number") {
    isValid = isValid && value <= max
  }
  return isValid
}

form.addEventListener("submit", function (e) {
  e.preventDefault()
  const formData = new FormData(this)

  const name = formData.get("name")
  const age = formData.get("age")
  const planet = formData.get("planet")

  const validateName = { value: name, required: true, minLength: 4, maxLength: 10 }
  const validateAge = { value: +age, required: true, min: 10, max: 30 }
  const validatePlanet = { value: planet, required: true, minLength: 5, maxLength: 20 }
  if (validate(validateName) && validate(validateAge) && validate(validatePlanet)) {
    const objeto = { name, planet, age }
    console.log("FORMULARIO ENVIADO", objeto)
  } else {
    alert("Datos incorrectos")
  }
})

{
  /* <div class="container mx-auto">
      <h2 class="text-center font-bold text-2xl">Formulario con JavaScript</h2>
      <form class="flex flex-col mx-56 space-y-4">
        <div class="flex flex-col">
          <label for="">Name:</label>
          <input type="text" name="name" id="name" class="border border-gray-500 rounded-md p-1" />
        </div>
        <div class="flex flex-col">
          <label for="">Age:</label>
          <input type="text" name="age" id="age" class="border border-gray-500 rounded-md p-1" />
        </div>
        <div class="flex flex-col">
          <label for="">Planet</label>
          <input type="text" name="planet" id="planet" class="border border-gray-500 rounded-md p-1" />
        </div>
    
        <button type="submit" class="bg-blue-600 text-white py-2" />Enviar</button>
      </form>
    </div> */
}
