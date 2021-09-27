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

marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;    
    filtrarAuto();
});

year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;  
    filtrarAuto();
  
});

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;    
    filtrarAuto();
});

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;  
    filtrarAuto()  
});

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;    
});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;    
});

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;    
    console.log(datosBusqueda);
});

//Eventos

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);

    //Llena las opciones
    llenarSelect();    
    
})

//Funciones

function mostrarAutos(autos){

    limpiarHTML();// Elimina el html previo

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

// Limpiar HTML

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }

}

//Funcion que filtra en base a la busqueda

function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo)

    // console.log(resultado);
    mostrarAutos(resultado);
}

function filtrarMarca(auto){
    const {marca} = datosBusqueda;

    if(marca){
        return auto.marca === marca;
    }
        return auto;
}

function filtrarYear(auto){
    const {year} = datosBusqueda;

    if(year){
        return auto.year === parseInt(year); // Parseamos y convertimos a entero el year ya que los datos que recibimos por el form es un string
    }
        return auto;    
}

function filtrarMinimo(auto){
    const {minimo} = datosBusqueda;

    if(minimo){
        return auto.precio >= minimo;
    }
        return auto;
}

function filtrarMaximo(auto){
    const {maximo} = datosBusqueda;

    if(maximo){
        return auto.precio <= maximo;
    }
        return auto;
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