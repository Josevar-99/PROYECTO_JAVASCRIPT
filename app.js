//ELEMENTOS DE SELECCION DEL DOM//

const inputNota = document.getElementById("inputNota");//elegimos el getElementById
const btnAgregar = document.getElementById("btnAgregar");
const listaNotas = document.querySelector("#listaNotas")//En este elegimos querySelector

//Verificamos que los elementos existan en consola

console.log("Input:",inputNota);
console.log("Boton",btnAgregar);
console.log("Lista",listaNotas);

//Cargar notas desde Local Storage, se recuperan las notas guardadas al iniciar 

//si hay notas las muestra si no,se muestra un array vacio
let notas = JSON.parse(localStorage.getItem("notas"))|| [];

//Mostramos en consola cuantas notas se cargaron
console.log(`Notas cargadas desde local Storage:${notas.length}`);

//Renderizamos cada nota recuperada
notas.forEach(function(texto) {
    renderizarNota(texto);
});

//Agregar notas al Dom, se ejecuta a hacer click en el boton agregar

btnAgregar.addEventListener("click",function(){

    //leemos el valor del input y se eliminan espacios al inicio y final 
    const texto = inputNota.value.trim();

    //Validamos que no hayan notas vacias
    if(texto === ""){
        alert("Por favor escribe algo antes de agregar.");
        return;
    }

    //Se guarda la nota en el array y en el local storage
    notas.push(texto);
    localStorage.setItem("notas",JSON.stringify(notas));
    console.log(`Nota agregada:"${texto}"| Total:${notas.length}`);
    
    //Creamos y mostramos la nota en el Dom
    renderizarNota(texto);

    //Limpiamos el input y devolvemos el foco
    inputNota.value = "";
    inputNota.focus();
});

//Funcion de Renderizar la nota en el Dom, la usamos para agregar y cargar desde Local Storage

function renderizarNota(texto){

    //Creamos el elemento <li>
    const li = document.createElement("li");

    //Asignamos el texto con textContent (los campos necesarios)
    li.textContent = texto;

    //Creamos el boton elminar
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.className = "btnEliminar";

    //Eliminamos la nota del Dom , se ejecuta cuando hacemos click en eliminar 
    
    btnEliminar.addEventListener("click",function(){
        //Removemos el <li> del Dom con removechild
        listaNotas.removeChild(li);

        //Quitamos la nota del array
        notas = notas.filter(function(n){return n!== texto; });

        //Actualizamos Local Storage con el array nuevo
        localStorage.setItem("notas",JSON.stringify(notas));

        console.log(`Nota eliminada: "${texto}"| Restantes:${notas.length}`);
        
    });

    //Insertamos el boton dentro del <li>
    li.appendChild(btnEliminar);

    //Insertamos el <li> dentro del <ul>
    listaNotas.appendChild(li);

}