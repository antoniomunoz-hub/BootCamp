
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
