// alert(" Hola Mundo desde el fichero en JavaScript 😎")
const { createApp, ref } = Vue
const App = {
  setup() {
    const name = ref("Daniel")
    const count = ref(0)
    const increment = () => count.value++
    return { name, increment, count }
  },
  template: /* html */ `
        <div>
        <p>{{ count }}</p>
            <button @click="increment">Incrementar</button>
        <p>{{ name }}</p>
        </div>
    `
}
createApp(App).mount("#app")
