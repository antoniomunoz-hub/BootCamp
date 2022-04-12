
var number = null;

function numberForTable(){

    number = prompt("Introduzca un numero");
    console.log(number);
    let i = 0;
    let resultado = null;
    numberReal = parseInt(number);
console.log(typeof numberReal);
    if(typeof numberReal == "number"){

        while(i <= 10){
            resultado = numberReal * i;
            console.log(resultado); 
            document.getElementById("tabla").innerHTML += `${numberReal} x ${i} = ${resultado}<br>` 
            i++
        } 
    }else{
        alert("Error no ha introducido un numero")
    }

}
