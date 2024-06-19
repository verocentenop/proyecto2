//COSAS ALEATORIAS QUE HE IDO PROBANDO Y NO TIENEN SENTIDO SEMANTICO


const MODELOS = []

let MODELO = ''
let ESTRELLAS = 0

const filtrar = () => {
  const filtered = []

  for (const zapa of zapatillas) {
    if (MODELO.includes(zapa.modelo) && ESTRELLAS <= zapa.estrellas) {
      filtered.push(zapa)
    }
  }

  printZapas(filtered)
}

const fillModelos = (zapas) => {
  MODELOS.splice(0)
  for (const zapa of zapas) {
    if (!MODELOS.includes(zapa.modelo)) {
      MODELOS.push(zapa.modelo)
    }
  }
}

fillModelos(zapatillas)

const createSelectModel = () => {
  const divFiltros = document.querySelector('#filtros')

  const selectModel = document.createElement('select')

  for (const modelo of MODELOS) {
    const option = document.createElement('option')

    option.value = modelo
    option.textContent = modelo

    selectModel.appendChild(option)
  }

  divFiltros.appendChild(selectModel)

  selectModel.addEventListener('change', (event) => {
    MODELO = event.target.value
    filtrar()
  })
}

const printZapas = (zapas) => {
  const divZapas = document.querySelector('#zapatillas')
  divZapas.innerHTML = ''

  let colorAnterior = ''

  for (const zapa of zapas) {
    const divZapa = document.createElement('div')
    const divImg = document.createElement('div')
    const img = document.createElement('img')
    const nombre = document.createElement('h3')
    const precio = document.createElement('p')
    const divEstrellas = document.createElement('div')
    const divColores = document.createElement('div')

    for (let i = 1; i <= 5; i++) {
      const estrella = document.createElement('div')
      estrella.className = 'estrella'
      if (i <= zapa.estrellas) {
        estrella.classList.add('rellena')
      }
      divEstrellas.appendChild(estrella)
    }

    for (const color of zapa.colores) {
      const colorHTML = document.createElement('div')

      colorHTML.className = 'color'
      colorHTML.style.backgroundColor = color

      divColores.appendChild(colorHTML)
    }

    divColores.className = 'colores'
    divZapa.className = 'flex-container'
    divImg.classList.add('imgContainer')
    divEstrellas.classList.add('estrellas', 'flex-container')
    img.src = zapa.img
    nombre.textContent = zapa.nombre
    precio.textContent = `${zapa.precio} €`

    let colorAleatorio = `var(--rtc-special-color-${
      Math.floor(Math.random() * 7) + 1
    })`

    while (colorAleatorio === colorAnterior) {
      colorAleatorio = `var(--rtc-special-color-${
        Math.floor(Math.random() * 7) + 1
      })`
    }

    colorAnterior = colorAleatorio

    divImg.style.backgroundColor = colorAleatorio

    divZapa.appendChild(divColores)
    divZapa.appendChild(divImg)
    divImg.appendChild(img)
    divZapa.appendChild(nombre)
    divZapa.appendChild(precio)
    divZapa.appendChild(divEstrellas)
    divZapas.appendChild(divZapa)
  }
}

printZapas(zapatillas)
createSelectModel()

//!____________________________________________________________

const FilterPrice = (precio) => {
  for (const camara of camaras) {
    if (camara.price <= precio) {
      return camara
    }
  }
}

const sectionFilters = document.createElement('section')
sectionFilters.id = 'filters'

const precioInput = document.createElement('input')
precioInput.type = 'number'
precioInput.id = 'precioInput'
precioInput.placeholder = 'Ingrese el precio'

const searchBtn = document.createElement('button')
searchBtn.id = 'buscarBtn'
searchBtn.textContent = 'Buscar'

const resetBtn = document.createElement('button')
resetBtn.id = 'resetBtn'
resetBtn.textContent = 'Borrar'

const resultSection = document.createElement('section')
resultSection.id = 'result'

sectionFilters.appendChild(precioInput)
sectionFilters.appendChild(searchBtn)
sectionFilters.appendChild(resetBtn)
document.body.appendChild(sectionFilters)
document.body.appendChild(resultSection)

searchBtn.addEventListener('click', () => {
  const precio = parseFloat(precioInput.value)
  const result = FilterPrice(precio)

  resultSection.innerHTML = ''

  if (result) {
    resultadoDiv.innerHTML = `
      <p><strong>Nombre:</strong> ${result.name}</p>
      <p><strong>Precio:</strong> $${result.price}</p>
      <p><strong>Modelo:</strong> ${result.model}</p>
      <p><strong>Descripción:</strong> ${result.description}</p>
      <img src="${resultado.img}" alt="${result.name}" style="max-width: 200px;">
    `
  } else {
    resultSection.innerHTML =
      '<p>No se encontró ninguna cámara con ese precio.</p>'
  }
})

resetBtn.addEventListener('click', () => {
  precioInput.value = ''
  resultSection.innerHTML = ''
})
