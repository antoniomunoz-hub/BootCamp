// Nos piden realizar un programa en JavaScript que simule en comportamiento del juego de las 7 y media. Se trata de jugar con
// valores del 1 al 10 de tal forma que los valores 1-7 tienen el mismo valor numérico y los valores 8, 9 y 10 tienen un valor numérico de
// 0.5. El usuario pedirá número e ira sumando siempre que no se pase de 7.5.

function askFor(){
 let inicio = 1;
 let fin = 10;
 let cartNumber = inicio + Math.floor(Math.random() * fin)
 console.log(cartNumber);
 let totalCount = cartNumber 
 console.log("cuenta total"+ totalCount);
    if(cartNumber <= 7){
        totalCount = cartNumber + totalCount;
        console.log(totalCount);
    }
}

// function askFor(){
//     let inicio = 1;
//     let fin = 10;
//     let cartNumber = inicio + Math.floor(Math.random() * fin)
//     console.log(cartNumber);
//     let totalCount = totalCount;
//     while(totalCount <= 7.5){
//         totalCount = cartNumber
//         totalcount + cartNumber
//         console.log(totalCount);
//     }

// }