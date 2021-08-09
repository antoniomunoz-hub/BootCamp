const num4  = 26;
const num5 = "26";
const num6 = 34;

//Revisamos si 2 numeros on iguales

console.log(num4 == num6);
console.log(num4 === num5); // Con el === es un comparador esctricto tiene que ser igual valor y tipo
console.log(num4 === parseInt(num5)); // parseamos num 5 y comparamos para que de true 

//Diferente 

const password = "admin";
const password2 = "Admin";

console.log(password1 != password2);
console.log(num4 != num5);
console.log(num4 !== num5);