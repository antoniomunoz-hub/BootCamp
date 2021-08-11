const aprendiendo = function (){
    console.log('aprendiendo JavaScript');
}

const aprendiendo2 = () => {
    console.log('Aprendiendo arrow Function')
}

// const aprendiendo2 = () => 'Aprendiendo arrow Function'; Alternativa si solo tiene una linea 
 

const repaso = function(lenguaje) {
    console.log(`Antonio se encuentra repasando ${lenguaje}`);
}

repaso('Javascript');

const repaso2 = (tecnologia, tecnologia2) =>{
console.log(`Repasando el FrontEnd con ${tecnologia} y ${tecnologia2}`)
} 

repaso2('JavaScript', 'CSS');


//For Each y Map con arrow function

const cartList = [
    {articulo: 'Dsq Sandals',precio: 150},
    {articulo: 'Abrigo Monclre',precio: 1150},
    {articulo: 'Zapatillas Dior',precio: 750},
    {articulo: 'Dsq Jeans',precio: 450},
    {articulo: 'Dolce & Gabbana T-Shirt',precio: 350}

]

cartList.forEach((producto) => `${producto.articulo} - Precio ${producto.precio}` );

const nuevacartList = cartList.map(producto2 => `${producto2.articulo} - Precio ${producto2.precio}`)

console.log(nuevacartList);
