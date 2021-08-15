// ForEach

const tareas = ['repasar', 'entrenar', 'recoger'];

tareas.forEach((pendiente) =>{
    console.log(`Queda por hacer ${pendiente}`);

})


const carro = [
    {articulo: 'Dsq Sandals',precio: 150},
    {articulo: 'Abrigo Moncler',precio: 1150},
    {articulo: 'Zapatillas Dior',precio: 750},
    {articulo: 'Dsq Jeans',precio: 450},
    {articulo: 'Dolce & Gabbana T-Shirt',precio: 350}

]

carro.forEach((producto) =>{
    console.log(producto.articulo);
})

const otroCarro = carro.map((producto) =>{
    console.log(producto.articulo);
}) // Map crea un nuevo array 


for (let regalo of carro){
    console.log(regalo.articulo);
}

const coche = {
    marca: 'Seat',
    modelo: 'Ibiza',
    año: 2018,
    motor: '1000cc 70CV'    
}

for( let propiedad in coche){
    console.log(`${coche[propiedad]}`);
} // For in permite iterar sobre un objeto