let productos = [];
fetch("../js/productos.json")
  .then(response => response.json())
  .then(data => {
    productos = data;
    iniciarProductos(); 
  })
  .catch(error => console.error("Error:", error));

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

const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

abrir.addEventListener("click", () =>{
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () =>{
  nav.classList.remove("visible");
});

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
      title: "Vació",
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

regresarComprabtn.addEventListener("click", () => {
  vaciarCarrito();
  modal.style.display = "none";

  Swal.fire({
    title: "Gracias por su compra",
    text: "¡Gracias por su compra! Esperamos verlo nuevamente pronto.",
    imageUrl: '../assets/img/agradecimiento-compra.png',
    imageWidth: 300,
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
  if (!productos) {
    return; 
  }
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
  contenedorConfirmacion.innerHTML = ''; 

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