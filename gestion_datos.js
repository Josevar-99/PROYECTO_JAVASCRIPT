
const productos = {
    producto1:{
        id:1,
        nombre:"Laptop",
        precio:1500
    },
    producto2:{
        id:2,
        nombre:"Mouse",
        precio:25
    },
    producto3:{
        id:3,
        nombre:"Teclado",
        precio:45
    },
    producto4:{
        id:4,
        nombre:"Monitor",
        precio:3000
    }
};

console.log("Objeto de productos.");
console.log(productos);

//Set con valores repetidos
const numerosSet = new Set([1,2,3,4,2,3,5,1,6]);

console.log("Set original (sin duplicados):");
console.log(numerosSet);

//Se agrega un nuevo numero con este codigo
numerosSet.add(7);
console.log("\n Despues de agregar el 7:");
console.log(numerosSet);

//verificamos si el numero existe con este codigo
console.log("\n ¿Existe el numero 3?",numerosSet.has(3));
console.log("Existe el numero 9?",numerosSet.has(9));

//Eliminamos un numero con este codigo
numerosSet.delete(2);
console.log("\n Despues de eliminar el 2");
console.log(numerosSet);

//Recorremos el set con for..of
console.log("Recorriendo el Set con for..of");
for(const numero of numerosSet){
    console.log("Valor:",numero);
    
};

//Creamos un map que relaciona categoria con el nombre del producto

const productosMap = new Map();

// agregamos entradas al map con .set (clave,valor)

productosMap.set("Tecnologia","Laptop");
productosMap.set("Accesorios","Mouse");
productosMap.set("Perifericos","Teclado");
productosMap.set("Pantallas","Monitor");

console.log("Map de productos");
console.log(productosMap);

// con .get() obtenemos un valor especifico

console.log("\n Producto en categoria'Tecnologia':");
console.log(productosMap.get("Tecnologia"));

//Verificamos si una clave existe con .has()

console.log("\n ¿Existe la categoria 'Accesorios'?",productosMap.has("Accesorios"));
console.log("¿Existe la categoria 'Ropa'?",productosMap.has("Ropa"));

//Con esta linea de codigo vemos cuantas categorias tiene el Map

console.log("\n Total de Categorias",productosMap.size);


//ITERACIONES SOBRE ESTRUCTURAS DE DATOS

// For...in recorremos las propiedades de un Objeto

console.log("===FOR...IN sobre el objeto productos ===");

for(const clave in productos){
    const producto = productos[clave];
    console.log(`\nProducto:${clave}`);
    console.log(`ID:${producto.id}`);
    console.log(`Nombre:${producto.nombre}`);
    console.log(`precio:${producto.precio}`);   
}

//Objects.keys() lista solo las claves del objeto 

console.log("\n=== Objects.keys()===");
const claves = Object.keys(productos);
console.log("Claves del objeto:",claves);

//Object.values() lista solo los valores del objeto
console.log("\n===Objects.values()===");
const valores = Object.values(productos);
console.log("Valores del producto:",valores);

//Objects.entries() lista valores y claves juntos 
console.log("\n===Objects.entries()===");
Object.entries(productos).forEach(([clave,valor])=>{
    console.log(`${clave} nombre:${valor.nombre},precio:$${valor.precio}`); 
});

//For...of recorre el set
console.log("\===FOR...OF sobre el set===");
for(const numero of numerosSet){
    console.log("Numero en set:",numero);  
}

//Foreach recorre el map
console.log("\n===forEach() sobre el map===");
productosMap.forEach((valor,clave) =>{
    console.log(`Categoria:${clave} Producto:${valor}`);
    
});

//VALIDACIONES Y PRUEBAS

//Verifica que el producto tenga los campos correctos

const validarProducto = (producto) => {

    //verfica que esten los tres campos
    if(!producto.id||!producto.nombre||!producto.precio){
        console.log("Error:el producto esta incompleto");
        return false;
    }

    //verfica que el id numero sea positivo
    if(typeof producto.id !== "number"|| producto.id <= 0){
        console.log("Error:El id debe ser positivo",producto.id);
        return false
    }

    //verifica que el nombre sea texto y no este vacio
    if(typeof producto.nombre !== "string"|| producto.nombre.trim()===""){
        console.log("Error: El nombre no es valido",producto.nombre);
        return false
        
    }

    //verifica que el precio sea positivo
    if(typeof producto.precio !== "number"|| producto.precio <= 0){
        console.log("Error: El precio debe ser positivo",producto.precio);
        return false
    }
    
    console.log(`Prodcuto valido:${producto.nombre}`);
    return true;
    
};

//PRUEBAS DE VALIDACIONES

console.log("Probando validaciones");

//Producto completo y correctos

validarProducto({id:1,nombre:"Laptop",precio:1500});

//Le falta el precio

validarProducto({id:2,nombre:"Mouse"});

//Nombre vacio

validarProducto({id:3,nombre:"",precio:45});

//Precio negativo

validarProducto({id:4,nombre:"Monitor",precio:-300});

//Muestra todas las ESTRUCTURAS

console.log("lista completa de productos (objecto)");
Object.entries(productos).forEach(({clave,valor}) => {
    console.log(`${valor.nombre} -$${valor.precio}`);
});

//Numeros unicos set
console.log("Numeros unicos (Set)");

console.log([...numerosSet]);

//Categorias y productos map

console.log("Categorias y productos Map");
productosMap.forEach((valor,clave) => {
    console.log(`${clave}:${valor}`);
});






















