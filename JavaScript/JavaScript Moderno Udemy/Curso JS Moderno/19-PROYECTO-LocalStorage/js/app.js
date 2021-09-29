// Variables

const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');

let tweets = [];

//EventListener

eventListeners();

function eventListeners(){
    formulario.addEventListener('submit', agregarTweet)
}

//Funciones

function agregarTweet(e){
    e.preventDefault();

    //textarea donde el usuario escribe

    const tweet = document.querySelector('#tweet').value;
    
    //Validacion
    if (tweet === ''){
        mostrarError('No puede estar vacio');

        return; // evita que se ejecuten mas lineas de codigo
    }

    //Añadir al arrelgo de tweets

    tweets = [...tweets, tweet];

    console.log(tweets);
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
