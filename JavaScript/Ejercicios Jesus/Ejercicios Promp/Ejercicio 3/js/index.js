
let a = null;
let b = null;
a = prompt("introduzca un numero")
a = parseInt(a)
b = prompt("introduzca un numero mayor que el anterior")
b = parseInt(b);
if(a > b ){
    alert("EL SEGUNDO NUMERO DEBE SER MAYOR AL PRIMERO")
}else{
    while(a <= b ){
        a++;
        if ( a % 2 == 0 ){
            document.write(a+`<br>`)
            console.log(a); // tenemos por consola el valor de i cuando es numero par
        }
    }
}
