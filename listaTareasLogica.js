/**151. Crea una lista de tareas */
//Variables
const listadoTareas = document.getElementById('listado-tareas');
const inputTarea = document.getElementById('agregar-tarea');
const btnAgregar = document.getElementById('btn-agregar');
const fecha = document.getElementById('fecha');
const timestampActual = new Date;
const nombre = document.getElementById('nombre');
let contador = 0;
const check = "fa-circle-check";
const unCheck = "fa-circle";
const tachado = 'tachado';
//funciones
function fechaActual() {
    const fechaActual = new Date();
    const año = fechaActual.getFullYear();
    const mes = fechaActual.getMonth() + 1; // Suma 1 porque getMonth() devuelve valores de 0 a 11
    const dia = fechaActual.getDate();
    const hora = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const segundos = fechaActual.getSeconds();

    return `Fecha actual: ${año}-${mes}-${dia} ${hora}:${minutos}:${segundos}`;

}
function cargarFecha(nodefecha) {
    const fechaDeLaListaDetareas = fechaActual();
    nodefecha.textContent = `${fechaDeLaListaDetareas}`;
}
//input con sweetalert2
document.addEventListener('DOMContentLoaded', async function () {
    const { value: text } = await Swal.fire({
        title: "Bienvenido a tu lista de tareas: ",
        input: "text",
        inputPlaceholder: "Ingrese su Nombre",
    });
    nombre.textContent = `${text}`;
});

function sumarTarea(tarea, contador, realizado, eliminado) {
    if (eliminado) {
        return;
    }
    const REALIZADO = realizado ? check : unCheck;
    const TACHADO = realizado ? tachado : '';
    const elemento = `
    <div id="elemento" class="tarea" data="ct">
        <i id="${contador}" class="fa-regular ${REALIZADO} icono" data="realizado"></i>
        <h3 class="txt ${TACHADO}">${tarea}</h3>
        <i id="${contador}" class="fa-solid fa-trash-can icono" data="eliminado"></i>
    </div>`
    listadoTareas.insertAdjacentHTML('beforeend', elemento);
}
/**insertAdjacentHTML('beforeend', elemento); parámetros:beforebegin	Insertar antes del primer elemento hijo
afterbegin	Insertar justo dentro del elemento, antes del primer elemento hijo
beforeend	Insertar justo dentro del elemento, después del último elemento hijo
afterend	Insertar después del elemento  */

//función de tarea realizada
function tareaRealizada(element) {
    element.classList.toggle(check);
    element.classList.toggle(unCheck);
    //parentNode ->identifica elementos padres
    element.parentNode.querySelector('.txt').classList.toggle(tachado);
}
//función eliminar 
function eliminarTarea(element) {
    listadoTareas.removeChild(element.parentNode);
    //element.parentNode.parentNode.removeChild(element.parentNode);
}

cargarFecha(fecha);


btnAgregar.addEventListener('click', (e) => {
    const tarea = inputTarea.value;
    if (!tarea) {
        return;
    }
    sumarTarea(tarea, contador, false, false);
    inputTarea.value = '';
    contador++;
});

document.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        const tarea = inputTarea.value;
        if (!tarea) {
            return;
        }
        sumarTarea(tarea, contador, false, false);
        inputTarea.value = '';
        contador++;
    }
})

listadoTareas.addEventListener('click', (e) => {
    const element = e.target;//me da todo el bloque donde di el click
    //console.log(element);
    const elementData = element.attributes.data.value;// me da el valor de los data(se agrega como atributo) e.target.attributes-> un nodeMap de atributos e.target.attributes.data -> me nuestra la data
    if (elementData === 'realizado') {
        tareaRealizada(element);
    } else if (elementData === 'eliminado') {
        eliminarTarea(element);
    }
})


