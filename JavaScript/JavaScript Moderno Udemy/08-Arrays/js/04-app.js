const estaciones = ['otoño', 'invierno', 'primavera', 'verano'];

//Agregar al final del array sin saber la longitud del array

estaciones.push('mas verano');

console.table(estaciones);

// Carro Compra

 // Creamos el array vacio

const carrito = [];

// Creamos productos para añadir al carro

const televisores = {
    marca: 'Sony',
    modelo: 'Bravia',
    precio: 890,
} 

const smarthPhones = {
    marca: "Apple",
    modelo: "12Pro",
    precio: 1190
}

const portatiles = {
    marca: "MSI",
    modelo: " Bravo15",
    precio: 899
}

carrito.push(televisores,smarthPhones,portatiles); 

console.table(carrito)

//Eliminar ultimo elemento del Array

carrito.pop();

console.table(carrito)

//Eliminar el inicio del Array

carrito.shift();
console.table(carrito);

// Eliminar por posicion usamos .splice (1, 1) primer valor posicion que elimina y 
//segunda si quieres seguir borrando o borrar solo un valor en este caso borramos el indice 1

