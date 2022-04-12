var i = 0;
var totalCount = 0;
for(i = 0; i <= 100; i++){
    if ( i % 2 == 0 ){
        console.log(i);
        totalCount += i;
    }
}
document.write(`El valor total de los numeros pares del o al 100 es ${totalCount}`);


