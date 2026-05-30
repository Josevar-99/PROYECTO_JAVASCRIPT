import { validarCampos }                            from "./validacion.js";
import { cargarProductos, agregarProducto,
         eliminarProducto }                         from "./productos.js";
import { mostrarMensaje, leerCampos,
         limpiarCampos, renderizarLista }           from "./ui.js";
import { getProductos, postProducto,
         deleteProducto }                           from "./api.js";
// Añadido: wrapper para capturar errores de carga del módulo
try {

// ── 1. ESTADO GLOBAL ───────────────────────────
// Se carga desde Local Storage al iniciar 

let productos = cargarProductos();


// ── 2. FUNCIÓN CENTRAL: actualizar vista ───────
// Mantiene DOM y Local Storage sincronizados 

function actualizar() {
  renderizarLista(productos, manejarEliminar);
}


// INICIALIZACIÓN 
// Al cargar la página, renderiza lo que hay en Local Storage 

actualizar();
console.log("App iniciada. Productos en Local Storage:", productos);


//  MANEJAR ELIMINACIÓN 
// elimina del DOM | elimina del Storage | DELETE a API

async function manejarEliminar(id) {
  // Eliminamos del array y del Local Storage
  productos = eliminarProducto(productos, id);

  // DELETE al servidor
  const ok = await deleteProducto(id);

  if (ok) {
    mostrarMensaje(" Producto eliminado correctamente.", "exito");
  } else {
    mostrarMensaje("Eliminado localmente, pero falló en el servidor.", "error");
  }

  // Actualizamos el DOM
  actualizar();
}


// Agregar producto 
// agregamos al DOM guardamos en Storage, POST a la API

const btnAgregar = document.getElementById("btn-agregar");

btnAgregar.addEventListener("click", async function () {

  // Leemos y validamos campos
  const { nombre, precio, descripcion } = leerCampos();
  const resultado = validarCampos(nombre, precio, descripcion);

  if (!resultado.valido) {
    mostrarMensaje(resultado.mensaje, "error");
    console.error(" Validación fallida:", resultado.mensaje);
    return;
  }

  // Guardamos en array local y Local Storage 
  const nuevo = agregarProducto(productos, nombre, precio, descripcion);

  // POST al servidor
  const respuesta = await postProducto(nuevo);

  if (respuesta) {
    mostrarMensaje(` "${nombre}" agregado y sincronizado.`, "exito");
  } else {
    mostrarMensaje(` "${nombre}" guardado localmente. Sin conexión al servidor.`, "exito");
  }

  // Actualizamos DOM y limpiamos formulario
  actualizar();
  limpiarCampos();
});


//  EVENTO: Sincronizar con API 
// GET al servidor y reemplaza la vista con los datos remotos

const btnSincronizar = document.getElementById("btn-sincronizar");

btnSincronizar.addEventListener("click", async function () {

  mostrarMensaje(" Sincronizando...", "exito", 1000);

  const datos = await getProductos();

  if (!datos) {
    mostrarMensaje(" No se pudo conectar al servidor.", "error");
    return;
  }

  // Reemplazamos el estado local con los datos del servidor
  productos = datos;

  // Guardamos en Local Storage lo que vino del servidor 
  localStorage.setItem("productos", JSON.stringify(productos));

  actualizar();
  mostrarMensaje(`✅ Sincronizado: ${productos.length} producto(s) obtenidos.`, "exito");
});

} catch (e) {
  console.error('APP MODULE ERROR:', e && e.stack ? e.stack : e);
  throw e;
}