//1
let brands = ["Nike", "Adidas", "Reebok", "Under-Armour", "Converse"];
console.log(brands, length);



//2
let numbersArray = [];
console.log(numbersArray, numbersArray.length);

numbersArray.push(4, 5, 6);
console.log(numbersArray, numbersArray.length);
numbersArray.shift();
console.log(numbersArray, numbersArray.length);
numbersArray.unshift(2, 3);
console.log(numbersArray, numbersArray.length);

//3

function birthday (day){
    if (day === 13){
        return true;
    }
    else {
        return false;
    }
}

console.log(birthday(13));


//4

function numberString(e){
    return e.length;
}

console.log(`El string tiene una longitud de`, numberString(`Soñando`), `: letras`);

//5

const segs = (minutos) => 60 * minutos;
console.log(segs(5));

//6

// function parNumber(n1){
//     if( n1 / 2 == 0){
//         console.log(n1);
//     }else (n1 + 1){
//         console.log(n1);
//     }

// }

7 
const lifeDays = (años) => 365 * años;
console.log(lifeDays(7));

// //8
// let phones = [apple, samsung, xiaomi];
// let last =[phones.length -1];
// const lastElement = (phones) => console.log(last); 

//9

function cuentaPatas (pollos, vacas, cerdos) {
    let patasPollos = 2 * pollos;
    let patasVacas = 4 * vacas;
    let patasCerdos = 4 * cerdos;
    return patasPollos + patasVacas + patasCerdos;
}

console.log(cuentaPatas(5, 2, 8));

//10    

function sameType (dat1, dat2) {
    if (typeof dat1 === typeof dat2){
        return "Son Iguales";
    } else {
        return "Son Distintos";
    }
}

console.log(sameType("5", 6));

//11

function stringArray (frase) {
    return frase.split(" ");   
}

console.log(stringArray("Esta vida loca"));

//13

function parseDomain(direccion) {
   let particion = direccion.split(".");
   return {
       domain: particion[0],
       tld: particion[1]
   }
}

console.log(parseDomain("nintendo.es"));


// dat1 == dat2 && typeof dat1 == typeof dat2