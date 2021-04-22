/*
  while(condicion){
    code...
  }
*/

let limite = 5
while (limite < 10) {
  console.log(`= ${limite}`)
  limite = limite + 1
}

limite = 5

while (limite <= 20) {
  if (limite % 2 === 0) {
    console.log(`Numero = ${limite}`)
  }
  limite = limite + 1
}

limite = 5
while (limite <= 20) {
  console.log(`Numero = ${limite}`)
  if (limite === 10) {
    break
  }
  limite++
}

/*
  do {
    code...
  } while (condicion)
*/

let index = 0

do {
  console.log(`index = ${index}`)
  index++
} while (index <= 10)

console.log("============================")
index = 0
do {
  if (index % 2 === 1) {
    console.log(`index = ${index}`)
  }
  index++
} while (index <= 10)

/*
  for (inicio;condicion;pasos) {
    code ....
  }
*/
console.log("Bucle for")
for (let i = 4; i <= 20; i = i + 2) {
  console.log(`${i}x5 = ${i * 5}`)
}

console.log("Elavuar = ")
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`Numero = ${i}`)
  }
}

console.log("SIN INICIO EN EL FOR")
let indice = 1
for (; indice < 5; indice++) {
  console.log(`Numero ${indice}`)
}

// indice = 1
// for (; indice <= 5; ) {
// console.log(`Numero ${indice}`)
// if (indice === 2) continue
// }

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue
  console.log(`indice = ${i}`)
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    for (let k = 0; k < 5; k = k + 2) {
      console.log(`(i,j,k) = (${i},${j},${k})`)
    }
  }
}

/*
  switch(valor){
    case 'valor_x':   -->  if ( valor === 'valor_x')
      code...         --> if ( valor === 'valor_y')
      break;
    case 'valor_y':
      code....
      break;
    .
    .
    .
    default:
      code...
      break;
  }
*/

const URL = "FTP"

console.log("switch NORMAL")
switch (URL) {
  case "HTTPS":
    console.log("SITIO SEGURO")
    break
  case "HTTP":
    console.log("NO SEGURO")
    break
  default:
    console.log("NO ENCONTRADO")
}

console.log("switch case adicional")
switch (URL) {
  case "HTTPS":
    console.log("SITIO SEGURO")
    break
  case "FTP":
  case "HTTP":
    console.log("NO SEGURO")
    break
  default:
    console.log("NO ENCONTRADO")
}
