const productos = [
  {
    //CATEGORIA CARDSETS
    codigo: 1,
    nombre: "Pokémon Caja Alakazam ex 151 Pokémon",
    precio: 18100,
    imagen: "../assets/img/pokemon-151-alakazam-collection.png",
    seccion: "cardsets",
  },
  {
    codigo: 2,
    nombre: "Pokémon Caja Eevee Evolutions Premium Collection",
    precio: 72400,
    imagen: "../assets/img/eevee-evolutions-premium-collection.png",
    seccion: "cardsets",
  },
  {
    codigo: 3,
    nombre: "Pokémon Caja Charizard ex Premium Collection",
    precio: 42200,
    imagen: "../assets/img/Pokemon-TCG-Charizard-ex-Premium-Collection.png",
    seccion: "cardsets",
  },
  {
    codigo: 4,
    nombre: "Pokémon Caja Ho-Oh Poderes Supremos Leyendas Luminosas",
    precio: 120600,
    imagen:
      "../assets/img/Pokémon Caja Ho-Oh Poderes Supremos Leyendas Luminosas 2017.png",
    seccion: "cardsets",
  },
  {
    codigo: 5,
    nombre: "Pokémon Crown Zenith Morpeko V Unión Box",
    precio: 36400,
    imagen: "../assets/img/Pokémon  Crown Zenith Morpeko V Unión Box.png",
    seccion: "cardsets",
  },
  {
    codigo: 6,
    nombre: "Pokémon Ultra Beast Gx Colección 2018",
    precio: 102500,
    imagen: "../assets/img/buzzwole-gx-premium-collection.png",
    seccion: "cardsets",
  },
  {
    codigo: 7,
    nombre: "Pokémon Colección Mimikyu ex 2023",
    precio: 17500,
    imagen: "../assets/img/Pokémon Colección Mimikyu ex.png",
    seccion: "cardsets",
  },
  {
    codigo: 8,
    nombre: "Pokémon Caja Arceus V Figure Collection",
    precio: 24100,
    imagen: "../assets/img/Pokémon Caja Arceus V Figure Collection.png",
    seccion: "cardsets",
  },
  {
    codigo: 9,
    nombre: "Pokémon Palkia Forma Origen VSTAR Premium Collections",
    precio: 30200,
    imagen:
      "../assets/img/Pokémon Palkia Forma Origen VSTAR Premium Collections.png",
    seccion: "cardsets",
  },
  {
    codigo: 10,
    nombre: "Pokémon Mewtwo V-Union Special Collection",
    precio: 34200,
    imagen: "../assets/img/cardsets mewtwo.png",
    seccion: "cardsets",
  },
  {
    codigo: 11,
    nombre: "Pokémon Caja Annihilape ex",
    precio: 20500,
    imagen: "../assets/img/Pokémon Caja Annihilape ex.png",
    seccion: "cardsets",
  },
  {
    codigo: 12,
    nombre: "Pokémon Caja Infernape V",
    precio: 20500,
    imagen: "../assets/img/Pokémon Caja Infernape V.png",
    seccion: "cardsets",
  },

  //CATEGORIA BOOSTERS
  {
    codigo: 13,
    nombre: "Pokémon Caja 36 Paldea Evolved",
    precio: 89900,
    imagen:
      "../assets/img/Pokémon  Caja 36 Paldea Evolved.png",
    seccion: "boosters",
  },
  {
    codigo: 14,
    nombre: "Pokémon Caja 36 Obsidian Flames",
    precio: 89900,
    imagen:
      "../assets/img/Pokémon Caja 36 Obsidian Flames.png",
    seccion: "boosters",
  },
  {
    codigo: 15,
    nombre: "Pokémon Caja 36 Sobre Tempestad Plateada",
    precio: 95900,
    imagen:
      "../assets/img/Pokémon  Caja 36 Sobre Tempestad Plateada.png",
    seccion: "boosters",
  },
  {
    codigo: 16,
    nombre: "Pokémon Caja 36 Sobres Battle Styles",
    precio: 89900,
    imagen:
      "../assets/img/Sobres_Battle_Styles_Inglés-removebg-preview.png",
    seccion: "boosters",
  },
  {
    codigo: 17,
    nombre: "Pokémon Caja 36 Sobres Fusion Strike",
    precio: 92300,
    imagen: "../assets/img/Sobres_Fusion_Strike-removebg-preview.png",
    seccion: "boosters",
  },
  {
    codigo: 18,
    nombre: "Pokémon Caja 18 Sobres Darkness Ablaze",
    precio: 60000,
    imagen:
      "../assets/img/Pokémon  Caja 18 Sobres Darkness Ablaze.png",
    seccion: "boosters",
  },
  {
    codigo: 19,
    nombre: "Pokémon Caja 18 Sobres Escarlata y Púrpura",
    precio: 44900,
    imagen:
      "../assets/img/Pokémon  Caja 18 Escarlata y Púrpura.png",
    seccion: "boosters",
  },
  {
    codigo: 20,
    nombre: "Pokémon Caja 36 Sobres Escarlata y Púrpura",
    precio: 74000,
    imagen:
      "../assets/img/purpuraescarlata.png",
    seccion: "boosters",
  },
  {
    codigo: 21,
    nombre: "Pokémon Caja 36 Sobres Sword & Shield Dark Ablaze",
    precio: 96300,
    imagen:
      "../assets/img/Sword & Shield Dark Ablaze.png",
    seccion: "boosters",
  },
  {
    codigo: 22,
    nombre: "Pokémon Caja 36 Sobres Evolving Skies",
    precio: 87700,
    imagen:
      "../assets/img//evolving skies.jpg",
    seccion: "boosters",
  },
  {
    codigo: 23,
    nombre: "Pokémon Caja 36 Sobres Forbidden Light",
    precio: 87900,
    imagen:
      "../assets/img/Forbidden Light.png",
    seccion: "boosters",
  },
  {
    codigo: 24,
    nombre: "Pokémon Caja 36 Sobres Evolutions",
    precio: 93500,
    imagen:
      "../assets/img/Evolutions.png",
    seccion: "boosters",
  },

  //CATEGORIA ELITEBOX
  {
    codigo: 25,
    nombre: "Pokémon GO Caja Élite de Entrenamiento",
    precio: 30000,
    imagen:
      "../assets/img/caja elite mewtwo.png",
    seccion: "elitebox",
  },
  {
    codigo: 26,
    nombre: "Pokémon Caja Élite de Entrenador Obsidian Flames",
    precio: 30000,
    imagen:
      "../assets/img/Caja_Élite_de_Entrenador_Obsidian_Flames-removebg-preview.png",
    seccion: "elitebox",
  },
  {
    codigo: 27,
    nombre: "Pokémon Elite Trainer Box Crown Zenith",
    precio: 42000,
    imagen:
      "../assets/img/Pokémon  Elite Trainer Box Crown Zenith.png",
    seccion: "elitebox",
  },
  {
    codigo: 28,
    nombre: "Pokémon Caja Élite de Entrenador 151 Pokémon",
    precio: 36000,
    imagen:
      "../assets/img/Caja_Élite_de_Entrenador_151-removebg-preview.png",
    seccion: "elitebox",
  },
  {
    codigo: 29,
    nombre: "Pokémon Caja Élite Vivid Voltage",
    precio: 36000,
    imagen:
      "../assets/img/Pokémon Caja Élite Vivid Voltage.png",
    seccion: "elitebox",
  },
  {
    codigo: 30,
    nombre: "Pokémon Caja Élite de Entrenador Resplandor Astral",
    precio: 49800,
    imagen:
      "../assets/img/Pokémon Caja Élite de Entrenador Resplandor Astral.png",
    seccion: "elitebox",
  },
  {
    codigo: 31,
    nombre: "Pokémon Caja Élite Coleccion Poderes Supremos - Charizard",
    precio: 72000,
    imagen:
      "../assets/img/caja charizard.png",
    seccion: "elitebox",
  },
  {
    codigo: 32,
    nombre: "Pokémon Caja Élite de Entrenador Majestad de Dragones",
    precio: 89900,
    imagen:
      "../assets/img/Pokémon  Caja Élite de Entrenador Majestad de Dragones.png",
    seccion: "elitebox",
  },
  {
    codigo: 33,
    nombre: "Pokémon Caja Élite en Entrenador Evoluciones en Paldea ",
    precio: 36000,
    imagen:
      "../assets/img/Pokémon Caja Élite en Entrenador Evoluciones en Paldea.png",
    seccion: "elitebox",
  },
  {
    codigo: 34,
    nombre: "Pokémon Caja Élite Luz Prohibida",
    precio: 60000,
    imagen:
      "../assets/img/Pokémon  Caja Élite Luz Prohibida.png",
    seccion: "elitebox",
  },
  {
    codigo: 35,
    nombre: "Pokémon Caja Élite de Destinos Brillantes",
    precio: 56400,
    imagen:
      "../assets/img/destinos brillantes.png",
    seccion: "elitebox",
  },
  {
    codigo: 36,
    nombre: "Pokémon Caja Élite de Tempestad Plateada",
    precio: 37800,
    imagen:
      "../assets/img/Tempestad Plateda.png",
    seccion: "elitebox",
  },
  
];

let abrirCompras = document.querySelector(".carrito");
let cerrarCompras = document.querySelector(".cerrar-tienda");
let lista = document.querySelector(".lista");
let listaPago = document.querySelector(".lista-pago");
let cuerpo = document.querySelector("body");
let total = document.querySelector(".total-pagar");
let cantidad = document.querySelector(".cantidad-carrito");
let listaProductos = [];
const seccionesUl = {
  cardsets: document.querySelector(".productos-cardsets"),
  boosters: document.querySelector(".productos-boosters"),
  elitebox: document.querySelector(".productos-elitebox"),
};

abrirCompras.addEventListener("click", () => {
  cuerpo.classList.add("active");
});

cerrarCompras.addEventListener("click", () => {
  cuerpo.classList.remove("active");
});


function cargarProductosLocalStorage() {
  const productosEnLocalStorage = localStorage.getItem("productosCarrito");
  if (productosEnLocalStorage) {
    listaProductos = JSON.parse(productosEnLocalStorage);
  }
}

function guardarProductosLocalStorage() {
  localStorage.setItem("productosCarrito", JSON.stringify(listaProductos));
}

function iniciarProductos() {
  productos.forEach((value, key) => {
    const { codigo, nombre, precio, imagen, seccion } = value;

    if (seccionesUl[seccion]) {
      const newDiv = document.createElement("li");
      newDiv.innerHTML = `
        <div class="box">
          <p class="producto-pokemon">${nombre}</p>
          <img src="${imagen}" class="model">
          <div class="detalles"><p>₡${precio}</p></div>
          <button onclick="agregarCarrito(${key})" class="boton-agregar-carrito">Agregar al carrito</button>
        </div>
      `;

      seccionesUl[seccion].appendChild(newDiv);
    }
  });
}



function agregarCarrito(key) {
  if (!listaProductos[key]) {
    listaProductos[key] = { ...productos[key], cantidad: 1 };
  } else {
    listaProductos[key].cantidad++;
  }
  guardarProductosLocalStorage();
  recargarCarrito();
}

function recargarCarrito() {
  listaPago.innerHTML = "";
  let contar = 0;
  let precioPagar = 0;

  listaProductos.forEach((value, key) => {
    if (value) {
      precioPagar += value.precio * value.cantidad;
      contar += value.cantidad;

      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
        <div><img src="${value.imagen}"/></div>
        <div>${value.nombre}</div>
        <div>₡${(value.precio * value.cantidad).toLocaleString()}</div>
        <div>${value.cantidad}</div>
        <div>
          <button onclick="actualizarCantidad(${key}, -1)">-</button>
          <div class="contar">${value.cantidad}</div>
          <button onclick="actualizarCantidad(${key}, 1)">+</button>
        </div>
      `;
      listaPago.appendChild(newDiv);
    }
  });

  total.innerText = `₡${precioPagar.toLocaleString()}`;
  cantidad.innerText = contar;
}

function actualizarCantidad(key, cambio) {
  if (listaProductos[key]) {
    if (cambio === -1 && listaProductos[key].cantidad > 1) {
      listaProductos[key].cantidad--;
    } else if (cambio === 1) {
      listaProductos[key].cantidad++;
    } else if (cambio === -1 && listaProductos[key].cantidad === 1) {
      delete listaProductos[key];
    }
  }
  recargarCarrito();
  guardarProductosLocalStorage();
}
cargarProductosLocalStorage();
iniciarProductos();
recargarCarrito();

