// Declarar Variables

const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

cargarEventListeners()

function cargarEventListeners(){
 listaCursos.addEventListener('click', agregarCurso);  
}

// Funciones

function agregarCurso(e){
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

//Lee el contenido del html al que clickamos y extrae informacion del curso

function leerDatosCurso(curso){
    console.log(curso);
    // Crear objeto con el contenido del curso actual

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //Revisa si un elemento esta en el carro 

    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    
        if(exsite){
            const cursos = articulosCarrito.map ( curso=> {
                if (curso.id === infoCurso.id){
                    curso.cantidad++;
                    return curso; //Retorna el objeto actualizado
        } else {
            return curso; //Retorna el obejeto que no son duplicados
        }
    });
    articulosCarrito = [...cursos]
    
    
    
    
    //Agrega elementos a arreglo de carrito
    //Copiamos el arreglo para que cada vez que hagamos click no se borre lo anterior 
    articulosCarrito=[...articulosCarrito, infoCurso]; 
    
    console.log(articulosCarrito);
    carritoHTML();
}

//Muestra el carrito de compras en el html

function carritoHTML(){

    //Limpiar HTML

    limpiarHTML();

    //Recorre el carro y genera HTML
    articulosCarrito.forEach( curso => {
        const row = document.createElement('tr');
        row.innerHTML= `
            <td>
                <img src= "${curso.imagen}" width="100">
            </td>
            <td>
                ${curso.titulo}
            </td>
            <td>
                ${curso.precio}
            </td>
            <td>
                ${curso.cantidad}
            </td>
            <td>
                <a href= "#" class= "borrar-curso" data-id= "${curso.id}"> X </a>
            </td>

        `;
        //Agrega el HTML del carrito en el tbdoy

        contenedorCarrito.appendChild(row);
    });
}


//Elimina los cursos del tbody

function limpiarHTML() {
    // contenedorCarrito.innerHTML= ''; // Forma lenta
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

