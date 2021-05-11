const resta = (a, b) => {
  console.log("RESTA")
  return a - b
}

const restaDouble = (a, b) => {
  console.log("RESTA DOUBLE")
  return (a - b) * 2
}

export const restaTrile = (a, b) => {
  console.log("RESTA TRIPLE")
  return a * 3 - b
}

export { resta, restaDouble }
