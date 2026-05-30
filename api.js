//fetch comunicacion con json server

const URL_BASE = "http://localhost:3000/productos"

// get obtener todos los productos 

export async function getProductos() {
    try{
        const respuesta = await fetch(URL_BASE);

        if(!respuesta.ok) throw new Error(`GET fallido: ${respuesta.status}`);

        const datos = await respuesta.json()
        console.log("GET productos:",datos);
        return datos;
    }catch (error) {
        console.error("Error en GET:", error.message);
        return null;
    }
}

// post agregar un producto nuevo 

export async function postProducto(producto) {
    try{
        const respuesta = await fetch(`${URL_BASE}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(producto)
        });

        if(!respuesta.ok) throw new Error(`POST fallido: ${respuesta.status}`);

        const datos = await respuesta.json();
        console.log("POST producto creado:", datos);
        return datos
        
    } catch (error) {
        console.error("Error en POST:",error.message);
        return null;    
    };
    
}

// Put Actualizar un producto por ID

export async function putProducto(id, productoActualizado) {
    try{
        const respuesta = await fetch(`${URL_BASE}/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json" },
            body:    JSON.stringify(productoActualizado)
        });

        if (!respuesta.ok) throw new Error(`PUT fallido: ${respuesta.status}`);

        const datos = await respuesta.json()
        console.log(" PUT producto actualizado:", datos);
    return datos;

  } catch (error) {
    console.error("Error en PUT:", error.message);
    return null;
  }
}


// Eliminar un producto por ID ────

export async function deleteProducto(id) {
  try {
    const respuesta = await fetch(`${URL_BASE}/${id}`, {
      method: "DELETE"
    });

    if (!respuesta.ok) throw new Error(`DELETE fallido: ${respuesta.status}`);

    console.log(`DELETE producto ID ${id} eliminado del servidor`);
    return true;

  } catch (error) {
    console.error("Error en DELETE:", error.message);
    return false;
  }
}
