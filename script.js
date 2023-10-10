// Obtengo el botón limpiar
const btnlimpiar = document.getElementById("btn-limpiar");
// Obtengo el boton enviar
const btnenviar = document.getElementById("btn-enviar");
// Obtengo el input para ingresar tareas
const input = document.getElementById("input-text");
// Obtengo la lista de items
const items = document.getElementById("items");

// Le agrego la función al apretar el botón limpiar
btnlimpiar.addEventListener("click", limpiar);
// Le agrego la función agregar item al botón enviar
btnenviar.addEventListener("click",agregarItem);
// Le agrego la función eliminar item al botón eliminar
items.addEventListener("click", eliminarItem);



function limpiar(){
    input.value = "";
}


function agregarItem(evento){
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


function eliminarItem(evento){
    if(evento.target.classList.contains("btn-eliminar")){
        if(confirm("¿Desea eliminar este elemento?")){
            //Busco el elemento padre del botón eliminar
            let li = evento.target.parentElement;
            //Remuevo el nodo y se borra el item
            items.removeChild(li);
        }
    }
}