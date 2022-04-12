var i = 0; // declaramos el valor de i fuera
var totalCount = 0; // necesitamos crear una variable para que vaya pisandose su valor cada vez que i sea numero par
while(i <= 100 ){
    i++;
    if ( i % 2 == 0 ){
        console.log(i); // tenemos por consola el valor de i cuando es numero par
        totalCount += i; // vamos sumando lo que cale i y pisando el valor de totalCount
    }
}
document.write(`El valor total de los numeros pares del o al 100 es ${totalCount}`);