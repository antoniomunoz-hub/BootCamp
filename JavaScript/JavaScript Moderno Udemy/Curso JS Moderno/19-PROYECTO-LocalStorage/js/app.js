// Variables

const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');

let tweets = [];

//EventListener

eventListeners();
//Cuando se envia el formulario

function eventListeners(){
    //Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet)

    //Cuando el documento esta listo
    document.addEventListener('DOMCotentLoaded', () =>{
        tweets = JSON.parse(localStorage.setItem('tweets'));

        console.log(tweets);
    });
}

//Funciones

//Añadir tweet del formulario
function agregarTweet(e) {
    e.preventDefault();

    //textarea donde el usuario escribe

    const tweet = document.querySelector('#tweet').value;
    
    //Validacion
    if (tweet === ''){
        mostrarError('No puede estar vacio');

        return; // evita que se ejecuten mas lineas de codigo
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }
    //Añadir al arrelgo de tweets

    tweets = [...tweets, tweetObj];

    //Una vez agregrados creamos agregandolo al HTML
    
    crearHTML();

    //Reiniciar formulario

    formulario.reset();
}


// Motrar mensaje error

function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //Insertar en el contenido

    const contenido = document.querySelector('#contenido')
    contenido.appendChild(mensajeError);

    setTimeout(() =>{
        mensajeError.remove();
    }, 3000);
}

// Muestra un listado de los tweets


function crearHTML() {
    if(tweets.length > 0){
        tweets.forEach(tweet => {
            //Crear html
            
            const li = document.createElement('li');

            //Añadir el texto
            li.innerText = tweet.tweet;

            //insertarlo en el html
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}

//Agrega tweets actuales al localStorage

function sincronizarStorage() { 
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//Limpiar HTML

function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}