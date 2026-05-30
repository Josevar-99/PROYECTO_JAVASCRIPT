//  REFERENCIAS 

const divMensaje = document.getElementById("mensaje");
const listaEl    = document.getElementById("lista-productos");


//  MOSTRAR MENSAJE 

export function mostrarMensaje(texto, tipo, duracion = 3000) {
  divMensaje.textContent   = texto;
  divMensaje.className     = tipo;
  divMensaje.style.display = "block";

  setTimeout(() => {
    divMensaje.style.display = "none";
  }, duracion);
}


//  LEER Y LIMPIAR CAMPOS 

export function leerCampos() {
  return {
    nombre:      document.getElementById("nombre").value.trim(),
    precio:      document.getElementById("precio").value.trim(),
    descripcion: document.getElementById("descripcion").value.trim()
  };
}

export function limpiarCampos() {
  document.getElementById("nombre").value      = "";
  document.getElementById("precio").value      = "";
  document.getElementById("descripcion").value = "";
}


//  CREAR UN <li> CON BOTÓN ELIMINAR ────────

function crearElementoLista(producto, onEliminar) {
  const li = document.createElement("li");
  li.setAttribute("data-id", producto.id); // guardamos el ID en el DOM

  // Texto con la info del producto
  const span = document.createElement("span");
  span.textContent = `${producto.nombre} — $${producto.precio} | ${producto.descripcion}`;

  // Botón eliminar
  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = " Eliminar";
  btnEliminar.classList.add("btn-eliminar");

  // Al hacer clic, ejecuta la función que viene de app.js
  btnEliminar.addEventListener("click", () => onEliminar(producto.id));

  // appendChild para construir el <li>
  li.appendChild(span);
  li.appendChild(btnEliminar);

  return li;
}


// RENDERIZAR LA LISTA COMPLETA 

// Recibe el array y el callback de eliminación

export function renderizarLista(productos, onEliminar) {
  // removeChild para limpiar los <li> anteriores uno a uno
  while (listaEl.firstChild) {
    listaEl.removeChild(listaEl.firstChild);
  }

  if (productos.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No hay productos agregados aun.";
    listaEl.appendChild(li);
    return;
  }

  productos.forEach(producto => {
    const li = crearElementoLista(producto, onEliminar);
    listaEl.appendChild(li); // 
  });

  console.log(" DOM actualizado:", productos.length, "producto(s).");
}
