const CLAVE_STORAGE = "productos";

// cargamos desde el local storage si no hay datos devolvamos un array vacio

export function cargarProductos() {
    const datos = localStorage.getItem(CLAVE_STORAGE);

    if (!datos) {
        return [];
    }

    try {
        return JSON.parse(datos);
    } catch (error) {
        console.error("Error parseando productos desde localStorage:", error);
        localStorage.removeItem(CLAVE_STORAGE);
        return [];
    }
}

// se guarda el array en local storage

export function guardarProductos(productos) {
    localStorage.setItem(CLAVE_STORAGE, JSON.stringify(productos));
    console.log("Local storage actualizado:",productos)
}

//agregamos un producto al array 

export function agregarProducto(productos, nombre, precio, descripcion) {
    const nuevo = {
        id:        Date.now(),
        nombre:    nombre,
        precio:    Number(precio),
        descripcion:descripcion
    };
    productos.push(nuevo);
    guardarProductos(productos);
    return nuevo;
}

//eliminamos un producto del array

export function eliminarProducto(productos, id) {
    const indice = productos.findIndex(p => p.id === id);
    if(indice !== -1){
        productos.splice(indice,1)
        guardarProductos(productos);
    }
    return productos;
}
