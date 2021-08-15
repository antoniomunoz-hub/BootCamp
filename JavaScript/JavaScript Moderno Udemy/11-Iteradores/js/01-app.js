// For

// consta de 3 partes 
// for(let i; ( inizializador donde empieza a contar o repetirse nuestro codigo)
//     i < 10; ( condion que vamos a revisar )
//     i++: (incremento))

for(let i = 0; i <= 100; i+=2) {
    console.log(`Numero : ${i}`);
}

// En for lopp como identificas los numeros pares y los impares

for(let i = 0; i <=20; i++){
    if(i % 2 === 0){
        console.log(`El numero ${i} es par`);
    }else{
        console.log(`El numero ${i} es impar`);
    }
}

const listaDeseos = [
    {articulo: 'Dsq Sandals',precio: 150},
    {articulo: 'Abrigo Moncler',precio: 1150},
    {articulo: 'Zapatillas Dior',precio: 750},
    {articulo: 'Dsq Jeans',precio: 450},
    {articulo: 'Dolce & Gabbana T-Shirt',precio: 350}

]

console.log(listaDeseos.length);

for ( let i = 0; i < listaDeseos.length; i++){
    console.log(listaDeseos[i].articulo);
}