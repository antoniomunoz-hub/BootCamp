
const carro = [
    {articulo: 'Dsq Sandals',precio: 150},
    {articulo: 'Abrigo Moncler',precio: 1150},
    {articulo: 'Zapatillas Dior',precio: 750},
    {articulo: 'Dsq Jeans',precio: 450},
    {articulo: 'Dolce & Gabbana T-Shirt',precio: 350}
]

// con forEach

let total = 0;

carro.forEach(articulo => total += articulo.precio);
    
console.log(total);

// con reduce

let resultado2 = carro.reduce( (total, articulo) => total + articulo.precio, 0 );

console.log(resultado2);


// Filter crea nuevo array basado en el parametro evaluado

let resultFilter = carro.filter(articulo => articulo.precio > 500 );

let resultFilter2 = carro.filter(articulo => articulo.precio < 500 );

console.log(resultFilter);
console.log(resultFilter2);

// Find con foreach

let resultado3 = '';

carro.forEach((producto, index) =>{
    if(producto.articulo === 'Zapatillas Dior'){
        resultado3 = carro[index]
    }
});

console.log(resultado3);

// con .Find 

const resultado4 = carro.find( producto => producto.articulo === 'Zapatillas Dior');
console.log(resultado4);


// Spread Operator añade un objeto o un elemento al array en una nueva constante, no modifica el array original

const carro2 = [...carro, {articulo: 'Gucci Belt',precio: 350}];

console.log(carro2);