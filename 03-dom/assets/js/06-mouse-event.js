const body = document.documentElement

document.addEventListener("mousemove", function (e) {
  body.style.setProperty("--mx", `${e.clientX}px`)
  body.style.setProperty("--my", `${e.clientY}px`)
})
