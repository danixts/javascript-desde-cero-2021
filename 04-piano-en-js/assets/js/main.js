// @ts-nocheck
addEventListener("DOMContentLoaded", () => {
  const keys = document.querySelectorAll(".key")
  const note = document.querySelector(".note__text")

  function playNote(e) {
    // console.log("TECLA", e.code)
    const audio = document.querySelector(`audio[data-key="${e.code}"]`)
    const key = document.querySelector(`.key[data-key="${e.code}"]`)
    if (!key) return
    const keyText = key.dataset.note
    key.classList.add("active")
    note.textContent = keyText
    note.classList.add("active")
    audio.currentTime = 0
    audio.play()
  }

  keys.forEach((key) => {
    key.addEventListener("transitionend", function (e) {
      this.classList.remove("active")
      note.classList.remove("active")
    })
  })

  window.addEventListener("keydown", playNote)

  //   window.addEventListener("keypress", (e) => {
  //     console.log("keypress", e)
  //   })
  //   window.addEventListener("keyup", (e) => {
  //     console.log("KEYUP", e)
  //   })
})

// Notes Ñ P Ñ P Ñ J L K H A D H J

// Practica reproductor musical
