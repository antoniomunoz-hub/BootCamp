// Funciones que retornan valores

//Cuando retornamos el valor necesitamos una variable en la que asignar ese valor retornado 

function restar (a, b){
    return a + b
}

restar(4, 2);

const resultadoResta = restar(8 , 6);

console.log(resultadoResta);

// Ejemplo mas avanzado 

let total = 0 ;
 
function agregarCarro(precio){
    return total += precio;

}

total = agregarCarro(600);
total = agregarCarro(200);
total = agregarCarro(150);
total = agregarCarro(1000);

console.log(total);


function iva(total){
    return total * 1.21;
}

const totalPagar = iva(total);

console.log(`El total a pagar iva inculudo es de: ${totalPagar}`);