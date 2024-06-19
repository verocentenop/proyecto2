

const camaras = [
  {
    id: 1,
    name: 'EOS 10',
    price: 1099.99,
    img: './assets/eos10.png',
    model: 'Cámaras Mirrorless',
    description:
      'Da tus siguientes pasos en fotografía y vídeo con una cámara del Sistema EOS R mirrorless diseñada en torno a un sensor de tamaño APS-C.'
  },
  {
    id: 2,
    name: 'EOS R3',
    price: 3799.99,
    img: './assets/eos3.png',
    model: 'Cámaras Mirrorless',
    description:
      'Con la velocidad como prioridad, esta es la cámara mirrorless que los fotógrafos profesionales de deportes, noticias y naturaleza estaban esperando.'
  },
  {
    id: 3,
    name: 'EOS R5',
    price: 2610.09,
    img: './assets/eosr5.png',
    model: 'Cámaras Mirrorless',
    description:
      'Olvida todo lo que sabías de las cámaras mirrorless. El impecable rendimiento de la EOS R5 revolucionará tu fotografía y vídeo.x'
  },
  {
    id: 4,
    name: 'EOS Ra',
    price: 1599.99,
    img: './assets/eosra.png',
    model: 'Cámaras Mirrorless',
    description:
      'Una potente cámara mirrorless full frame para aficionados avanzados que buscan una herramienta de astrofotografía compacta y ligera.'
  },
  {
    id: 5,
    name: 'EOS 2000D',
    price: 599.99,
    img: './assets/eos2000d.png',
    model: 'Reflex digitales',
    description:
      'Disfruta de extraordinarias fotos de 24,1 megapíxeles y vídeos Full HD. Amplía tu creatividad con esta divertida y cómoda réflex.'
  },
  {
    id: 6,
    name: 'EOS 4000D',
    price: 449.99,
    img: './assets/eos 4000d.png',
    model: 'Reflex Digitales',
    description:
      'Disfruta de fotos creativas de calidad réflex y vídeos Full HD con esta sencilla e intuitiva EOS de 18 megapíxeles.'
  },
  {
    id: 7,
    name: 'EOS-1D X Mark III',
    price: 5999.99,
    img: './assets/eos1d.png',
    model: 'Reflex Digitales',
    description:
      'La vida está repleta de momentos irrepetibles. Conserva muchos más con la EOS-1D X Mark III y comparte tu historia visual con el resto del mundo.'
  },
  {
    id: 8,
    name: 'PowerShot PX',
    price: 259.99,
    img: './assets/power.png',
    model: 'Cámaras compactas',
    description:
      'Captura los momentos más preciados de la vida automáticamente con esta cámara inteligente que reconoce caras y se conecta a tu dispositivo inteligente'
  },
  {
    id: 9,
    name: 'PowerShot ZOOM',
    price: 315.99,
    img: './assets/powershot.png',
    model: 'Cámaras Compactas',
    description:
      'Una PowerShot de bolsillo para capturar esos mágicos momentos en familia o de naturaleza a 100 o 400 mm1, o a 800 mm con el multiplicador digital.'
  },
  {
    id: 10,
    name: 'Zoemini S2',
    price: 129.99,
    img: './assets/zoemini.png',
    model: 'Cámaras Instantáneas',
    description:
      'Haz fotos e imprímelas desde un solo dispositivo. Una cámara de 8 MP, tecnología Zink™ y poder guardar fotos en una tarjeta Micro SD: el combo perfecto para las fotos improvisadas.'
  },
  {
    id: 11,
    name: 'Impresora Zoemini',
    price: 244.99,
    img: './assets/impresora.png',
    model: 'Impresora',
    description:
      'Esta impresora de bolsillo elegante, compacta y ligera será el accesorio perfecto para tu dispositivo móvil allá donde vayas.'
  },
  {
    id: 12,
    name: 'PowerShot V10',
    price: 444.99,
    img: './assets/v10.png',
    model: 'Cámaras Vloggin',
    description:
      'Destaca online y mantén la discreción mientras grabas con la cámara para vlogging 4K, compacta y todo en uno de Canon.'
  },
  {
    id: 13,
    name: 'G7 X Mark IIIg7',
    price: 89.99,
    img: './assets/g7.png',
    model: 'Cámaras Vloggin',
    description:
      'Una cámara conectada que captura excelentes vídeos y fotos que encantarán a tus seguidores.'
  },
  {
    id: 14,
    name: 'EOS R8',
    price: 1499.99,
    img: './assets/r8.png',
    model: 'Cámaras Vloggin',
    description:
      'Da el salto a la fotografía y el vídeo Full Frame y haz realidad tus ambiciones creativas.'
  },
  {
    id: 15,
    name: 'IXUS 285 HS',
    price: 334.99,
    img: './assets/ixus2.png',
    model: 'Camaras Vloggin',
    description: 'Rendimiento y estilo conectados'
  },
  {
    id: 16,
    name: '10-18mm f/4.5-5.6 STM',
    price: 304.99,
    img: './assets/objetivo10-18.png',
    model: 'Objetivos EF-S',
    description:
      'Un asequible objetivo zoom STM ultra gran angular con estabilizador de imagen ideal para paisajes, viajes y vídeos. Para cámaras APS-C.'
  },
  {
    id: 17,
    name: '17-85mm f/4-5.6 IS USM',
    price: 269.99,
    img: './assets/17-85.png',
    model: 'Objetivos EF-S',
    description:
      'Un objetivo zoom USM con Estabilizador de la Imagen de uso general, ideal para viajes. Ideal para APS-C.'
  },
  {
    id: 18,
    name: 'Adaptador EF-EOS R',
    price: 119.99,
    img: './assets/ef-eosr.png',
    model: 'Adaptador EOS R',
    description:
      'El adaptador EF-EOS R con anillo de control ofrece conversión de montura e incorpora un anillo de control del objetivo.'
  },
  {
    id: 19,
    name: '18-135mm f/3.5-5.6 USM',
    price: 665.99,
    img: './assets/18-135.png',
    model: 'Objetivos EF-S',
    description:
      'Un objetivo zoom muy versátil con tecnología Nano USM para fotografía y vídeos a alta velocidad. Para cámaras APS-C.'
  },
  {
    id: 20,
    name: '18-55mm f/3.5-5.6 STM',
    price: 204.99,
    img: './assets/18-55.png',
    model: 'Objetivos EF-S',
    description:
      'Un asequible zoom estándar STM con Estabilizador de la Imagen, ideal para los inicios con la cámara EOS.'
  }
]

let model = ''

const models = []

const filtrar = () => {
  const filtered = []
  for (const camara of camaras) {
    if (model.includes(camara.model)) {
      filtered.push(camara)
    }
  }
  printProductos(filtered)
}

const createSelect = () => {
  const sectionCamaras = document.querySelector('#filtros')
  const selectModel = document.createElement('select')
  //!
  const defaultOption = document.createElement('option')
  defaultOption.textContent = 'Modelos'
  defaultOption.selected = true
  selectModel.appendChild(defaultOption)
  //!

  for (const model of models) {
    const option = document.createElement('option')

    option.value = model
    option.textContent = model

    selectModel.appendChild(option)
  }

  sectionCamaras.appendChild(selectModel)

  selectModel.addEventListener('change', (event) => {
    model = event.target.value
    filtrar()
  })
}

const fillModels = (camaras) => {
  models.splice(0)
  for (const camara of camaras) {
    if (!models.includes(camara.model)) {
      models.push(camara.model)
    }
  }
}
fillModels(camaras)

const printProductos = (productos) => {
  const sectionCamaras = document.querySelector('#camaras')
  sectionCamaras.innerHTML = ''

  for (const producto of productos) {
    const sectionCamara = document.createElement('article')
    const artImg = document.createElement('div')
    const img = document.createElement('img')
    const name = document.createElement('h3')
    const price = document.createElement('p')
    const description = document.createElement('p')

    img.src = producto.img
    name.textContent = producto.name
    price.textContent = producto.price + ' €'
    description.textContent = producto.description

    sectionCamara.append(artImg)
    artImg.append(img)
    sectionCamara.append(name)
    sectionCamara.append(price)
    sectionCamara.append(description)
    sectionCamaras.append(sectionCamara)
  }
}

printProductos(camaras)
createSelect()
