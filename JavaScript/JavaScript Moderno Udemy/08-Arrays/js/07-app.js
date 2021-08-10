const listaDeseos = [
    {articulo: 'Dsq Sandals',precio: 150},
    {articulo: 'Abrigo Monclre',precio: 1150},
    {articulo: 'Zapatillas Dior',precio: 750},
    {articulo: 'Dsq Jeans',precio: 450},
    {articulo: 'Dolce & Gabbana T-Shirt',precio: 350}

]

for(let i = 0; i < listaDeseos.length; i++ ){
    console.log(`${listaDeseos[i].articulo} - Precio ${listaDeseos[i].precio}` );

}

listaDeseos.forEach(function (producto){
    console.log(`${producto.articulo} - Precio ${producto.precio}` );
})

//Diferencia entre map y foreach es que .map llena una variable con un nuevo array


const nuevaListaDeseos = listaDeseos.map( function(producto){
    return `${producto.articulo} - Precio ${producto.precio}` 
})

console.log(nuevaListaDeseos);