//Variables
const resultado = document.querySelector('#resultado');
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const maximo = document.querySelector('#maximo');
const minimo = document.querySelector('#minimo');
const puertas = document.querySelector('#marca');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


const max = new Date().getFullYear(); // Año maximo para el select la funcion getFullYear te da el año actual
const min = max - 10; //Año minimo

//Generar objeos un objeto con la busqueda
const datosBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : '',

}
// Eventos para select de busqueda
marca.addEventListener()


//Eventos

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();

    //Llena las opciones
    llenarSelect();    
    
})

//Funciones

function mostrarAutos(){
    autos.forEach( auto => {
        
        const { marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent= `
        ${marca}-${modelo}-${year}-${puertas}-${transmision}-${color}-${precio}
        `;

        //Insertar en HTML
        resultado.appendChild(autoHTML)
    });
}

//Genera los años del Select

function llenarSelect(){

    for( let i = max; i >= min; i-- ){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    } 
}