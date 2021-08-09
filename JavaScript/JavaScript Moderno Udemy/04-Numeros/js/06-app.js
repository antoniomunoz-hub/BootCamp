
const numString1 = "20";
const numString2 = "20.1";
const numString3 = "uno";
const numString4 = 20;

console.log(typeof(numString1));

// PAra convertir de string a numero 

console.log(Number.parseInt(numString1));
console.log(Number.parseFloat(numString2)); // Con decimales

//Revisar si un numero es entero o no 

console.log(Number.isInteger(numString2));