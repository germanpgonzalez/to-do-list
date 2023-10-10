// Obtengo el botón limpiar
const btnlimpiar = document.getElementById("btn-limpiar");
// Obtengo el boton enviar
const btnenviar = document.getElementById("btn-enviar");
// Obtengo el input para ingresar tareas
const input = document.getElementById("input-text");
// Obtengo la lista de items
const items = document.getElementById("items");
// Obtengo el div de fecha
const fechaDay = document.getElementById("fechaDay");
const fechaMonth = document.getElementById("fechaMonth");
const fechaYear = document.getElementById("fechaYear");

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
    evento.preventDefault();
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

    //Llamo a la función limpiar para limpiar el input despues de agregar el item nuevo
    limpiar();
}


function eliminarItem(evento){
    // Me fijo en la lista el elemento que tenga la classe eliminar (el botón)
    if(evento.target.classList.contains("btn-eliminar")){
        if(confirm("¿Desea eliminar este elemento?")){
            //Busco el elemento padre del botón eliminar
            let li = evento.target.parentElement;
            //Remuevo el nodo y se borra el item
            items.removeChild(li);
        }
    }
}


// Obtener fecha del sistema

const fechaActual = new Date();
fechaDay.innerText = fechaActual.getDate();

// Creo un arreglo de meses para obtener el mes actual en string
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
// Obtengo el mes actual y le sumo 1 ya que los arreglos arrancan en 0
const mesActual = fechaActual.getMonth() + 1;
// Obtengo el mes actual en formato string y lo imprimo en pantalla
fechaMonth.innerHTML = meses[mesActual];
//Obtengo el año actual
fechaYear.innerText = fechaActual.getFullYear();
