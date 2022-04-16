function factorial(n){
    var num = parseFloat(prompt("Introduce un numero para calcuar el factorial"));
    var  total = 1;
    for(var i = 1; i <= num; i++){
        total = total*i;
    }
    document.write(`El facorial del numero ${num} es ${total} `)

}

