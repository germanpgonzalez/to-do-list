// Obtengo el botón limpiar
const btnlimpiar = document.getElementById("btn-limpiar");
// Obtengo el boton enviar
const btnenviar = document.getElementById("btn-enviar");
// Obtengo el input para ingresar tareas
const input = document.getElementById("input-text");
// Obtengo la lista de items
let items = document.getElementById("items");


// Le agrego la función al apretar el botón limpiar
btnlimpiar.addEventListener("click", limpiar);
// Le agrego la función agregar item al botón enviar
btnenviar.addEventListener("click",agregarItem);



function limpiar(){
    input.value = "";
}


function agregarItem(event){
    event.preventDefault();
    //Obtengo el item ingresado
    newItem = input.value;
    //Creo el nuevo li
    let newLi = document.createElement('li');
    //Le asigno la clase al elemento li
    newLi.className = "tarea";
    //Le agrego el elemento ingresado por el input al li creado
    newLi.appendChild(document.createTextNode(newItem));

    //Creo el botón eliminar
    let btnDel = document.createElement('button');
    //Le agrego la clase al botón
    btnDel.className = "btn-eliminar";
    //Le agrego el texto al botón
    btnDel.innerHTML = "x";
    //Agrego el botón al nuevo elemento Li
    newLi.appendChild(btnDel);
    
    //Agrego el nuevo elemento creado a la lista de items
    items.appendChild(newLi);
}
