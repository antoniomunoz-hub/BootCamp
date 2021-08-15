// Reto FizzBuzz

// 3 6 9 12 .... imprimir por consola fizz
// 5 10 15 20 25 .... imprimir por consola buzz
// 15 30 45 .... imprimir por consola fizzBuzz

for( let i = 0; i<=100; i++){
    if(i %3 === 0){
        console.log(console.log(`Numero ${i} Fizz`));
    }if( i%5 === 0){
        console.log(console.log(`Numero ${i} Buzz`));
    }if ( i%5 === 0 && i%3 === 0){
        console.log(console.log(`Numero ${i} Fizz Buzz`));
    }
}