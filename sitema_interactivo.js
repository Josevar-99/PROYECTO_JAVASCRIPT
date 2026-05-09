//Declaramos las variables junto con los prompts para la pregunta al usuario 
let nombreUsuario = prompt("¿Cual es tu nombre?")
let edadTexto = prompt("¿Que edad tienes ?")
let edad = Number(edadTexto)

//Se realiza una validacion para que sea solo numeros 
if (isNaN(edad)){
    console.error("Error: Por favor,ingresa una edad valida en numeros ");
    alert("Error: Reinicia e ingresa solo numeros");
}
/*se realiza validaciones, sobre la edad con un else*/
else if (edad < 18) {
    alert("Hola,"+nombreUsuario+"eres menor de edad ¡Sigue aprendiendo y disfrutando del código!");
}else {
    alert("Hola,"+nombreUsuario+"eres mayor de edad ¡Prepárate para grandes oportunidades en el mundo de la programación!")

}