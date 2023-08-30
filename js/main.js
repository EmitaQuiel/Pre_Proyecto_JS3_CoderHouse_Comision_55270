const productos = [
  {
    //CATEGORIA CARDSETS
    codigo: 1,
    nombre: "Pokémon Caja Alakazam ex 151 Pokémon",
    precio: 18100,
    imagen: "../assets/img/Cardsets/pokemon-151-alakazam-collection.png",
    seccion: "cardsets",
  },
  {
    codigo: 2,
    nombre: "Pokémon Caja Eevee Evolutions Premium Collection",
    precio: 72400,
    imagen: "../assets/img/Cardsets/eevee-evolutions-premium-collection.png",
    seccion: "cardsets",
  },
  {
    codigo: 3,
    nombre: "Pokémon Caja Charizard ex Premium Collection",
    precio: 42200,
    imagen:
      "../assets/img/Cardsets/Pokemon-TCG-Charizard-ex-Premium-Collection.png",
    seccion: "cardsets",
  },
  {
    codigo: 4,
    nombre: "Pokémon Caja Ho-Oh Poderes Supremos Leyendas Luminosas",
    precio: 120600,
    imagen:
      "../assets/img/Cardsets/Pokémon Caja Ho-Oh Poderes Supremos Leyendas Luminosas 2017.png",
    seccion: "cardsets",
  },
  {
    codigo: 5,
    nombre: "Pokémon Crown Zenith Morpeko V Unión Box",
    precio: 36400,
    imagen:
      "../assets/img/Cardsets/Pokémon  Crown Zenith Morpeko V Unión Box.png",
    seccion: "cardsets",
  },
  {
    codigo: 6,
    nombre: "Pokémon Ultra Beast Gx Colección 2018",
    precio: 102500,
    imagen: "../assets/img/Cardsets/buzzwole-gx-premium-collection.png",
    seccion: "cardsets",
  },
  {
    codigo: 7,
    nombre: "Pokémon Colección Mimikyu ex 2023",
    precio: 17500,
    imagen: "../assets/img/Cardsets/Pokémon Colección Mimikyu ex.png",
    seccion: "cardsets",
  },
  {
    codigo: 8,
    nombre: "Pokémon Caja Arceus V Figure Collection",
    precio: 24100,
    imagen:
      "../assets/img/Cardsets/Pokémon Caja Arceus V Figure Collection.png",
    seccion: "cardsets",
  },
  {
    codigo: 9,
    nombre: "Pokémon Palkia Forma Origen VSTAR Premium Collections",
    precio: 30200,
    imagen:
      "../assets/img/Cardsets/Pokémon Palkia Forma Origen VSTAR Premium Collections.png",
    seccion: "cardsets",
  },
  {
    codigo: 10,
    nombre: "Pokémon Mewtwo V-Union Special Collection",
    precio: 34200,
    imagen: "../assets/img/Cardsets/cardsets mewtwo.png",
    seccion: "cardsets",
  },
  {
    codigo: 11,
    nombre: "Pokémon Caja Annihilape ex",
    precio: 20500,
    imagen: "../assets/img/Cardsets/Pokémon Caja Annihilape ex.png",
    seccion: "cardsets",
  },
  {
    codigo: 12,
    nombre: "Pokémon Caja Infernape V",
    precio: 20500,
    imagen: "../assets/img/Cardsets/Pokémon Caja Infernape V.png",
    seccion: "cardsets",
  },

  //CATEGORIA BOOSTERS
  {
    codigo: 13,
    nombre: "Pokémon Caja 36 Paldea Evolved",
    precio: 89900,
    imagen: "../assets/img/Boosters/Pokémon  Caja 36 Paldea Evolved.png",
    seccion: "boosters",
  },
  {
    codigo: 14,
    nombre: "Pokémon Caja 36 Obsidian Flames",
    precio: 89900,
    imagen: "../assets/img/Boosters/Pokémon Caja 36 Obsidian Flames.png",
    seccion: "boosters",
  },
  {
    codigo: 15,
    nombre: "Pokémon Caja 36 Sobre Tempestad Plateada",
    precio: 95900,
    imagen:
      "../assets/img/Boosters/Pokémon  Caja 36 Sobre Tempestad Plateada.png",
    seccion: "boosters",
  },
  {
    codigo: 16,
    nombre: "Pokémon Caja 36 Sobres Battle Styles",
    precio: 89900,
    imagen:
      "../assets/img/Boosters/Sobres_Battle_Styles_Inglés-removebg-preview.png",
    seccion: "boosters",
  },
  {
    codigo: 17,
    nombre: "Pokémon Caja 36 Sobres Fusion Strike",
    precio: 92300,
    imagen: "../assets/img/Boosters/Sobres_Fusion_Strike-removebg-preview.png",
    seccion: "boosters",
  },
  {
    codigo: 18,
    nombre: "Pokémon Caja 18 Sobres Darkness Ablaze",
    precio: 60000,
    imagen:
      "../assets/img/Boosters/Pokémon  Caja 18 Sobres Darkness Ablaze.png",
    seccion: "boosters",
  },
  {
    codigo: 19,
    nombre: "Pokémon Caja 18 Sobres Escarlata y Púrpura",
    precio: 44900,
    imagen: "../assets/img/Boosters/Pokémon  Caja 18 Escarlata y Púrpura.png",
    seccion: "boosters",
  },
  {
    codigo: 20,
    nombre: "Pokémon Caja 36 Sobres Escarlata y Púrpura",
    precio: 74000,
    imagen: "../assets/img/Boosters/purpuraescarlata.png",
    seccion: "boosters",
  },
  {
    codigo: 21,
    nombre: "Pokémon Caja 36 Sobres Sword & Shield Dark Ablaze",
    precio: 96300,
    imagen: "../assets/img/Boosters/Sword & Shield Dark Ablaze.png",
    seccion: "boosters",
  },
  {
    codigo: 22,
    nombre: "Pokémon Caja 36 Sobres Evolving Skies",
    precio: 87700,
    imagen: "../assets/img/Boosters/evolving skies.jpg",
    seccion: "boosters",
  },
  {
    codigo: 23,
    nombre: "Pokémon Caja 36 Sobres Forbidden Light",
    precio: 87900,
    imagen: "../assets/img/Boosters/Forbidden Light.png",
    seccion: "boosters",
  },
  {
    codigo: 24,
    nombre: "Pokémon Caja 36 Sobres Evolutions",
    precio: 93500,
    imagen: "../assets/img/Boosters/Evolutions.png",
    seccion: "boosters",
  },

  //CATEGORIA ELITEBOX
  {
    codigo: 25,
    nombre: "Pokémon GO Caja Élite de Entrenamiento",
    precio: 49900,
    imagen: "../assets/img/Elitebox/caja elite mewtwo.png",
    seccion: "elitebox",
  },
  {
    codigo: 26,
    nombre: "Pokémon Caja Élite de Entrenador Obsidian Flames",
    precio: 36700,
    imagen:
      "../assets/img/Elitebox/Caja_Élite_de_Entrenador_Obsidian_Flames-removebg-preview.png",
    seccion: "elitebox",
  },
  {
    codigo: 27,
    nombre: "Pokémon Elite Trainer Box Crown Zenith",
    precio: 42000,
    imagen:
      "../assets/img/Elitebox/Pokémon  Elite Trainer Box Crown Zenith.png",
    seccion: "elitebox",
  },
  {
    codigo: 28,
    nombre: "Pokémon Caja Élite de Entrenador 151 Pokémon",
    precio: 36000,
    imagen:
      "../assets/img/Elitebox/Caja_Élite_de_Entrenador_151-removebg-preview.png",
    seccion: "elitebox",
  },
  {
    codigo: 29,
    nombre: "Pokémon Caja Élite Vivid Voltage",
    precio: 36000,
    imagen: "../assets/img/Elitebox/Pokémon Caja Élite Vivid Voltage.png",
    seccion: "elitebox",
  },
  {
    codigo: 30,
    nombre: "Pokémon Caja Élite de Entrenador Resplandor Astral",
    precio: 49800,
    imagen:
      "../assets/img/Elitebox/Pokémon Caja Élite de Entrenador Resplandor Astral.png",
    seccion: "elitebox",
  },
  {
    codigo: 31,
    nombre: "Pokémon Caja Élite Coleccion Poderes Supremos - Charizard",
    precio: 72000,
    imagen: "../assets/img/Elitebox/caja charizard.png",
    seccion: "elitebox",
  },
  {
    codigo: 32,
    nombre: "Pokémon Caja Élite de Entrenador Majestad de Dragones",
    precio: 89900,
    imagen:
      "../assets/img/Elitebox/Pokémon  Caja Élite de Entrenador Majestad de Dragones.png",
    seccion: "elitebox",
  },
  {
    codigo: 33,
    nombre: "Pokémon Caja Élite en Entrenador Evoluciones en Paldea ",
    precio: 36000,
    imagen:
      "../assets/img/Elitebox/Pokémon Caja Élite en Entrenador Evoluciones en Paldea.png",
    seccion: "elitebox",
  },
  {
    codigo: 34,
    nombre: "Pokémon Caja Élite Luz Prohibida",
    precio: 60000,
    imagen: "../assets/img/Elitebox/Pokémon  Caja Élite Luz Prohibida.png",
    seccion: "elitebox",
  },
  {
    codigo: 35,
    nombre: "Pokémon Caja Élite de Destinos Brillantes",
    precio: 56400,
    imagen: "../assets/img/Elitebox/destinos brillantes.png",
    seccion: "elitebox",
  },
  {
    codigo: 36,
    nombre: "Pokémon Caja Élite de Tempestad Plateada",
    precio: 37800,
    imagen: "../assets/img/Elitebox/Tempestad Plateda.png",
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
let overlay = document.querySelector(".overlay");
let listaProductos = [];
const seccionesUl = {
  cardsets: document.querySelector(".productos-cardsets"),
  boosters: document.querySelector(".productos-boosters"),
  elitebox: document.querySelector(".productos-elitebox"),
};
const btn = document.querySelector("#vaciar-carrito-btn");
const totalPagarElement = document.querySelector(".finalizar-compra");
const finalizarCompraBtn = document.querySelector(".finalizar-compra");
const modal = document.getElementById("modal");
const regresarComprabtn = document.getElementById("regresarCompraBtn");

abrirCompras.addEventListener("click", () => {
  cuerpo.classList.add("active");
  overlay.classList.add("active");
});

cerrarCompras.addEventListener("click", () => {
  cuerpo.classList.remove("active");
  overlay.classList.remove("active");
});

btn.addEventListener("click", () => {
  if (listaProductos.length > 0) {
    Swal.fire({
      title: "Genial",
      text: "Se vació el carrito!",
      icon: "success",
      confirmButtonText: "Cool",
    });
    vaciarCarrito();
  } else {
    Swal.fire({
      title: "Carrito vacío",
      text: "El carrito ya está vacío.",
      icon: "info",
      confirmButtonText: "Entendido",
    });
  }
});

totalPagarElement.addEventListener("click", () => {
  if (listaProductos.length === 0) {
    Swal.fire({
      title: "Carrito vacío",
      text: "El carrito está vacío. Agrega productos antes de proceder al pago.",
      icon: "info",
      confirmButtonText: "Entendido",
    });
  } else {
    modal.style.display = "block";
    generarContenidoConfirmacion();
  }
});

finalizarCompraBtn.addEventListener("click", () => {
  if (listaProductos.length === 0) {
    Swal.fire({
      title: "Carrito vacío",
      text: "El carrito está vacío. Agrega productos antes de proceder al pago.",
      icon: "info",
      confirmButtonText: "Entendido",
    });
  } else {
    modal.style.display = "block";
    generarContenidoConfirmacion();
  }
});

const regresarCompraBtn = document.getElementById("regresarCompraBtn");
regresarCompraBtn.addEventListener("click", () => {
  listaProductos = [];
  listaPago.innerHTML = "";
  guardarProductosLocalStorage();
  total.innerText = "₡0"; 
  cantidad.innerText = "0";

  modal.style.display = "none";

  Swal.fire({
    title: "Gracias por su compra",
    text: "¡Gracias por su compra! Esperamos verlo nuevamente pronto.",
    icon: "success",
    confirmButtonText: "Aceptar",
  });
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
          <button class="boton-agregar-carrito">Agregar al carrito</button>
        </div>
      `;
      seccionesUl[seccion].appendChild(newDiv);

      const botonAgregarCarrito = newDiv.querySelector(".boton-agregar-carrito");
      botonAgregarCarrito.addEventListener("click", () => {
        Swal.fire({
          title: "Producto agregado",
          text: "El producto ha sido agregado al carrito.",
          imageUrl: '../assets/img/bulbasur-tenencia.png',
          imageWidth: 250,
          confirmButtonText: "Aceptar",
        });
        agregarCarrito(key);
      });
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
        <div class="botones-productos">
          <button onclick="actualizarCantidad(${key}, -1)">-</button>
          <div class="contar">${value.cantidad}</div>
          <button onclick="actualizarCantidad(${key}, 1)">+</button>
          <button id="boton-eliminar-producto"; onclick="eliminarProducto(${key})"><img src="../assets/img/eliminar.png"></button>
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

function vaciarCarrito() {
  listaProductos = [];
  guardarProductosLocalStorage();
  recargarCarrito();
}

function eliminarProducto(key) {
  if (listaProductos[key]) {
    delete listaProductos[key];
    listaProductos = listaProductos.filter((producto) => producto !== null);
    recargarCarrito();
    guardarProductosLocalStorage();
  }
}

function generarContenidoConfirmacion() {
  const contenedorConfirmacion = document.querySelector('.contenedor-productos-confirmacion');
  contenedorConfirmacion.innerHTML = ''; // Limpiamos el contenido previo

  let contar = 0;
  let precioPagar = 0;

  listaProductos.forEach((value, key) => {
    if (value) {
      precioPagar += value.precio * value.cantidad;
      contar += value.cantidad;

      let newDiv = document.createElement('ul');
      newDiv.classList.add('li-procesar');
      newDiv.innerHTML = `
        <div class="nombre-producto">Nombre:&nbsp;${value.nombre}</div>
        <div class="cantidad-producto">Cantidad:&nbsp;${value.cantidad}</div>
        <div class="precio-producto">Precio:&nbsp;₡${(value.precio * value.cantidad).toLocaleString()}</div>
        <hr>
      `;
      contenedorConfirmacion.appendChild(newDiv);
    }
  });


  let totalDiv = document.createElement('div');
  totalDiv.classList.add('total-pagar-confirmacion');
  totalDiv.innerHTML = `Total pagado:&nbsp;₡${precioPagar.toLocaleString()}</p>`;
  contenedorConfirmacion.appendChild(totalDiv);
}

cargarProductosLocalStorage();
iniciarProductos();
recargarCarrito();








  


