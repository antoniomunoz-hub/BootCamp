// Crea un for que al detectar el elemento 5 detenga su ejecucion 

for (let i = 0; i <= 10; i++){
    if (i === 5){
        console.log(`Llegaste a la nota minima para aprobar ${i}`);
    }else {
        console.log(`Nota ${i}`);
    }
}

for ( let i = 0; i <=15; i++){
    if ( i === 8){
        console.log(`Ocho`);
        continue; // Sigue ejecutando el codigo, si usamos BREAK lo para al llegar cuando se cumple la condicion
    }else{
        console.log(`${i}`);
    }
}

// Añadimos un boolean para que en el for lo detecte de la siguiente manera

const regalos = [
    {articulo: 'Dsq Sandals',precio: 150},
    {articulo: 'Abrigo Moncler',precio: 1150},
    {articulo: 'Zapatillas Dior',precio: 750, favorito: true},
    {articulo: 'Dsq Jeans',precio: 450},
    {articulo: 'Dolce & Gabbana T-Shirt',precio: 350}

]

for(let i = 0; i < regalos.length; i ++){
    if(regalos[i].favorito){
        console.log(`${regalos[i].articulo} es tu favorito`);
    }
    console.log(regalos[i].articulo);
}