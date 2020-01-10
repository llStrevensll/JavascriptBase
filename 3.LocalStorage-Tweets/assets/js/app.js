/*Variables*/
const listaTweets = document.getElementById('lista-tweets');

/*Event Listeners*/

eventListeners();

function eventListeners() {
    //Cuando se envia al formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);
    //Borrar Tweets
    listaTweets.addEventListener('click', borrarTweet);

    //Contenido cargado->DOMContentLoaded: Cuando ya ha cargado el html
    document.addEventListener('DOMContentLoaded', localStorageListo);
}


/*Funciones*/

//Añadir tweet del formulario
function agregarTweet(e) {
    e.preventDefault;
    //leer el valor del textarea
    const tweet = document.getElementById('tweet').value;

    //crear boton de eliminar 
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    //Crear elemento lista
    const li = document.createElement('li');
    li.innerText = tweet;
    li.appendChild(botonBorrar); //adicionar boton borrar
    listaTweets.appendChild(li); //adicionar tweet a la lista

    //Añadir a Local Storage
    agregarTweetLocalStorage(tweet);
}

//Borrar Tweets del DOM
function borrarTweet(e) {
    e.preventDefault();
    if (e.target.className === 'borrar-tweet') {
        e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.innerText);
    }

}

//Mostrar datos de LocalStorage en la lista
function localStorageListo() {
    let tweets;
    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet) {
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';

        //Crear elemento lista
        const li = document.createElement('li');
        li.innerText = tweet;
        li.appendChild(botonBorrar); //adicionar boton borrar
        listaTweets.appendChild(li); //adicionar tweet a la lista
    });

}


//Agregar tweet en localstorage
function agregarTweetLocalStorage(tweet) {
    let tweets;
    tweets = obtenerTweetsLocalStorage();


    tweets.push(tweet); //adicionar al arreglo
    localStorage.setItem('tweets', JSON.stringify(tweets));

}

//Comprueba si hay elementos en el localstorage y retorna un arreglo 
function obtenerTweetsLocalStorage() {
    let tweets;
    //Revisamos los valores de local storage
    if (localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

//Borrar tweets de localStorage
function borrarTweetLocalStorage(tweet) {
    let tweets, tweetBorrar;
    //Elimina X del tweet
    tweetBorrar = tweet.substring(0, tweet.length - 1); //divir el string (inicio, fin) quita el ultimo caracter

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet, index) {
        if (tweetBorrar === tweet) {
            tweets.splice(index, 1); //posicion del arreglo, hasta donde eliminar
        }
    });
    localStorage.setItem('tweets', JSON.stringify(tweets));

    console.log(tweets);

}