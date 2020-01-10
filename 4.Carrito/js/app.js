/**
 * Variables
 */
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');



/**
 * Listeners 
 * */
cargarEventListeners();

function cargarEventListeners() {
    //Ejecuta cuando se presiona "Agregar al Carrito"
    cursos.addEventListener('click', comprarCurso);

    //Ejecuta cuando  se elimina un curso del carrito "X"
    carrito.addEventListener('click', eliminarCurso);

    //Ejecuta cuando se presiona "Vaciar carrito"
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

    //Al cargar el documento, mostrar LocalStorage
    document.addEventListener('DOMContentLoaded', leerLocalStorage);

}




/** 
 * Funciones
 * */
//Funcion que añade el curso al carrito
function comprarCurso(e) {
    e.preventDefault();
    //Delegation para agregar-carrito
    if (e.target.classList.contains('agregar-carrito')) {
        const curso = e.target.parentElement.parentElement;

        leerDatosCurso(curso); //tomar los datos del curso seleccionado
    }
}
//Lee los datos del curso
function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }

    insertarCarrito(infoCurso);

}

//Muestra el curso seleccionado en el Carrito
function insertarCarrito(infoCurso) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${infoCurso.imagen}" width=100>
        </td>
        <td>${infoCurso.titulo}</td>
        <td>${infoCurso.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${infoCurso.id}"> X </a>
        </td>
    `;

    listaCursos.appendChild(row);
    guardarCursoLocalStorage(infoCurso);
}

//Elimina el curso del carrito en el DOM
function eliminarCurso(e) {
    e.preventDefault();

    let curso, cursoId;
    if (e.target.classList.contains('borrar-curso')) {
        e.target.parentElement.parentElement.remove();
        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector('a').getAttribute('data-id');
    }

    eliminarCursoLocalStorage(cursoId);
}

//Elimina los cursos del carrito del DOM
function vaciarCarrito() {
    //listaCursos.innerHTML = ''; //forma lenta
    while (listaCursos.firstChild) {
        listaCursos.removeChild(listaCursos.firstChild);
    }


    //vaciar LocalStorage
    vaciarLocalStorage();

    return false;
}

//Almacena cursos del carrito en el Local Storage
function guardarCursoLocalStorage(infoCurso) {
    let cursos;

    cursos = obtenerCursosLocalStorage(); //retorna  arreglo
    cursos.push(infoCurso); //el curso seleccionado se agrega al arreglo

    localStorage.setItem('cursos', JSON.stringify(cursos));
}

//->Comprueba que haya elementos en Local Storage
function obtenerCursosLocalStorage() {
    let cursosLS;

    //comprobar si hay elementos en LS
    if (localStorage.getItem('cursos') === null) {
        cursosLS = [];
    } else {
        cursosLS = JSON.parse(localStorage.getItem('cursos'));
    }
    return cursosLS
}

//Imprime los cursos del localstorage en el carrito
function leerLocalStorage() {
    let cursosLS;

    cursosLS = obtenerCursosLocalStorage();
    cursosLS.forEach(function(infoCurso) {
        //construir template
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${infoCurso.imagen}" width=100>
            </td>
            <td>${infoCurso.titulo}</td>
            <td>${infoCurso.precio}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${infoCurso.id}"> X </a>
            </td>
        `;
        listaCursos.appendChild(row);
    });

}

//Elimnar el curso por el ID en LocalStorage
function eliminarCursoLocalStorage(curso) {
    let cursosLS;

    cursosLS = obtenerCursosLocalStorage(); //arreglo de cursos

    cursosLS.forEach(function(cursoLS, index) { //comparar id del curso borrado con los del localstorage
        if (cursoLS.id === curso) {
            cursosLS.splice(index, 1);
        }
    });

    localStorage.setItem('cursos', JSON.stringify(cursosLS)); //Adicionar el arreglo sin el curso borrado

}

//Elimina todos los cursos de LocalStorage
function vaciarLocalStorage() {
    localStorage.clear();
}