// este modulo es para la validacion de cada uno de los campos//
//valida cada uno de los campos que esten correctos//

export function validarCampos(nombre, precio, descripcion) {

    //verificamos que ningun campo este vacio//
    if(nombre === "" || precio === "" || descripcion === "") {
        return {
            valido: false,
            mensaje: "Todos los campos son obligatorios"
        };
    }

    //verificamos que sea un numero positivo 
    if(isNaN(precio) || Number(precio) <= 0) {
        return{
            valido:false,
            mensaje:"El precio debe ser un numero mayor a 0."
        };
    }

    //Todo correcto
    return{valido:true,mensaje:""};
}