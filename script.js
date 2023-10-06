// Obtengo el botón limpiar
const btnlimpiar = document.getElementById("btn-limpiar");
// Obtengo el boton enviar
const btnenviar = document.getElementById("btn-enviar");
// Obtengo el input para ingresar tareas
const input = document.getElementById("input-text");
// Obtengo el div de donde se agregan las lista
let lista = document.getElementsByClassName("lista-tareas");

// Le agrego la función al apretar el botón limpiar
btnlimpiar.addEventListener("click", limpiar);
// Le agrego la función agregar item al botón enviar
btnenviar.addEventListener("click",agregarItem);


function limpiar(){
    console.log("Apretando el botón Limpiar")
    input.value = "";
}


function agregarItem(event){
    event.preventDefault();
    console.log("Apretando botón enviar");
    //Creo el nuevo li
    let newLi = document.createElement('li');
    //Le asigno la clase al elemento li
    newLi.className = "tarea";
    //Obtengo el item ingresado
    newItem = input.value;
    console.log(newItem);
    newLi.appendChild(document.createTextNode(newItem));
    //Agrego el nuevo elemento a la lista de items
    lista.appendChild(newLi);
}


console.log(lista);