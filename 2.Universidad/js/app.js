// Eliminar de Local Storage
//localStorage.clear();

let elemento;

elemento = document.getElementById('hero');

console.log(elemento);


let encabezado;
encabezado = document.getElementById("encabezado");

encabezado.style.background = "#333";
encabezado.style.color = "#fff";
encabezado.style.padding = "20px";

//Cambiar el texto
encabezado.innerHTML = "Los mejores Cursos";
console.log(encabezado);


/**Query Selector-> Usa sintaxis de css */
//const encabezadoo = document.querySelector('#encabezado'); //con id
const encabezadoo = document.querySelector('.encabezado'); // con clase

/*Aplicar css
encabezado.style.background = "#333";
encabezado.style.color = "#fff";
encabezado.style.padding = "20px";*/
console.log("Con QuerySelector: ");
console.log(encabezadoo);

/** */
let enlace;

enlace = document.querySelector('#principal a:first-child');
enlace = document.querySelector('#principal a:last-child');
enlace = document.querySelector('#principal a:nth-child(3)'); //3 elemento
console.log(enlace);

/**TagName */
const links = document.getElementsByTagName('a');
let enlaces = Array.from(links); //Convertir en un arreglo

enlaces.forEach(function(enlace) {
    console.log(enlace.innerText);

});

/** queryAll*/
const enlacess = document.querySelectorAll('#principal a:nth-child(odd)'); //odd-> impar
enlacess.forEach(function(impares) {
    impares.style.backgroundColor = 'red';
    impares.style.color = 'white';
});
console.log(enlacess);

/** 
 * Traversing --- Padre al hijo
 */

const navegacion = document.querySelector('#principal');
//1 = Elementos
//2 = Atributos
//3 = Text Node
//8 = comentarios
//9 = documentos
//10 = doctype
console.log(navegacion.children[0].nodeType); //tipo de nodo
console.log(navegacion.children[0].textContent = 'Nuevo Enlace');

const cursos = document.querySelectorAll('.card');
console.log(cursos[0].childElementCount);

/**
 * Traversing --- Hijo a Padre
 */
const cursoss = document.querySelectorAll('.card'); //inicio en .card hijo

console.log(cursoss[0].parentElement.parentElement.parentElement.children[0].textContent = 'Traversing padre a hijo');

//Sibling-> Sirve cuando estan el mismo nivel como los enlaces
const enlac = document.querySelectorAll('.enlace');
console.log(enlac[4].previousElementSibling); //El selector esta en la posicion 4 y con sibling toma el elemento 3(anterior)
console.log(enlac[0].nextElementSibling); //Siguiente elemento


/**
 * Crear elemento 
 * 
 * */
const enlaceCreado = document.createElement('a');
//agregamos una clase
enlaceCreado.className = 'enlace';
//añadir id
enlace.id = 'nuevo-id';
//atributo de href
enlaceCreado.setAttribute('href', '#');
//añadir texto
enlaceCreado.textContent = 'Nuevo Enlace';

//agregar al html
document.querySelector('#secundaria').appendChild(enlaceCreado);
console.log(enlaceCreado);

/**
 * Reemplazar elemento
 */
//Primero se creara un elemento como en el ejemplo anterior
const nuevoEncabezado = document.createElement('h2');
nuevoEncabezado.id = 'encabezado';
nuevoEncabezado.appendChild(document.createTextNode('Cursos nuevos'));
/*Remplazar:
*1.selecionar el elemento a reemplazar
2.selecionar el parede de ese elemento
*/
const anterior = document.querySelector('#encabezado');
const elPadre = document.querySelector('#lista-cursos');
//Reemplazo:
elPadre.replaceChild(nuevoEncabezado, anterior);
console.log(anterior.parentElement);


/**
 * Eliminar y agregar elementos
 */
const enlacesE = document.querySelectorAll('.enlace');
const navegacionE = document.querySelector('#principal');
//con removeChild
//navegacion.removeChild(enlacesE[0]);
//con remove
enlacesE[0].remove();
console.log(navegacionE);


const primerLi = document.querySelector('.enlace');
let elementoN;

//obtener una clase de CSS
elementoN = primerLi.className;
elementoN = primerLi.classList.add('nueva-clase');
elementoN = primerLi.classList.remove('nueva-clase');
elementoN = primerLi.classList;

elementoN = primerLi.getAttribute('href'); //obtener
primerLi.setAttribute('href', 'https://facebook.com'); //modificar
primerLi.setAttribute('data-id', 20);
elementoN = primerLi.hasAttribute('data-id'); //verifica si existe el atributo-(true, false)

primerLi.removeAttribute('data-id');
elemento = primerLi;

console.log(elementoN);

//Event Listener click al buscador
document.querySelector('#encabezado').addEventListener('click', function(e) {
    e.target.innerText = 2 + 2;
});


const encabezadoB = document.querySelector('#encabezado');
const enlacesB = document.querySelectorAll('.enlace');
const botonB = document.querySelector('#vaciar-carrito');
/**
 * Eventos con el mouse
 * 
 */
//Click
botonB.addEventListener('click', obtenerEvento);
//Doble Click
//botonB.addEventListener('dblclick', obtenerEvento);
//botonB.addEventListener('mouseenter', obtenerEvento);
//botonB.addEventListener('mouseleave', obtenerEvento);
//botonB.addEventListener('mouseover', obtenerEvento);
//botonB.addEventListener('mouseout', obtenerEvento);
//botonB.addEventListener('mousedown', obtenerEvento);
//botonB.addEventListener('mouseup', obtenerEvento);
encabezadoB.addEventListener('mousemove', obtenerEvento);

function obtenerEvento(e) {
    console.log(`EVENTO: ${e.type}`);
}


/**
 * Eventos Inputs
 */
const busqueda = document.querySelector('#buscador');

//busqueda.addEventListener('keydown', obtenerEvento1);
//busqueda.addEventListener('keyup', obtenerEvento1);
//busqueda.addEventListener('keypress', obtenerEvento1);
//busqueda.addEventListener('focus', obtenerEvento1);
//busqueda.addEventListener('blur', obtenerEvento1);
//busqueda.addEventListener('cut', obtenerEvento1);
//busqueda.addEventListener('copy', obtenerEvento1);
//busqueda.addEventListener('paste', obtenerEvento1);
busqueda.addEventListener('input', obtenerEvento1);
////busqueda.addEventListener('change', obtenerEvento1);
function obtenerEvento1(e) {
    console.log(`EVENTO: ${e.type}`);

}

/**
 * Delegation
 */

document.body.addEventListener('click', eliminarElemento);

function eliminarElemento(e) {
    e.preventDefault;

    if (e.target.classList.contains('borrar-curso')) {
        console.log('Si');

    } else {
        console.log('No');

    }
}

/**
 * Local Storage
 */
localStorage.setItem('nombre', 'Angel');
//Obtener
const nombre = localStorage.getItem('nombre');
//Eliminar
localStorage.removeItem('nombre'); //key

//Limpiar
localStorage.clear();