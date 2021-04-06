

//1
let brands = ["Nike", "Adidas", "Reebok", "Under-Armour", "Converse"];
console.log(brands, length);



//2
let numbersArray = [];
console.log(`La longitud del Array es: ${numbersArray.length}`); 

numbersArray.push(4, 5, 6);
console.log(`La longitud del Array es: ${numbersArray.length}`);
numbersArray.shift();
console.log(`La longitud del Array es: ${numbersArray.length}`);
numbersArray.unshift(2, 3);
console.log(`La longitud del Array es: ${numbersArray.length}`);

//3

function trueFalse (x){
    if (typeof x === "boolean"){
        return true;
    }
    else {
        return false;
    }
}
// otra solucion
// function trueFalse (x){
//     return typeof x === "boolean"

console.log(trueFalse(13));
console.log(trueFalse("false"));
console.log(trueFalse(true));

//4

function numberString(e){
    return e.length;
}
//con flecha
// const numberString = (string) => string.lenght;

console.log(`El string tiene una longitud de`, numberString(`Soñando`), `: letras`);

//5

const segs = (minutos) => 60 * minutos;
console.log(segs(5));

//6

// function parNumber(n1){
//     if( n1 % 2 == 0){
//         return n1
//     }else {
//         return n1 + 1
//     }

//7

const lifeDays = (años) => 365 * años;
console.log("Has Vivido", lifeDays(7));

//8
let phones = ["apple", "samsung", "xiaomi"];
const lastElemen = (array) => array[array.length-1]; 

console.log(lastElemen([1, 2, 3]));

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
//Otra solcucion
// function equealDats (a,b){
//     let resultado = (typeof a === typeof b)
//     ? " Los datos son del mismo tipo"
//     : "Son Datos Diferentes";

//     return resultado;
// }

//11

function stringArray (frase) {
    return frase.split(" ");   
}

console.log(stringArray("Esta vida loca"));

//12

let adress1 = {
    provincia: "andalucia",
    ciudad:"palmilla ",
    municipio: "kazajistan ",
    codigo_postal:"32944 ",
    calle: "del mundo ",
    numero: "x ",
    planta:"x ",
    puerta: "2345 ",
}

let adress2 = {
    provincia: "andalucia",
    ciudad:"palmilla ",
    municipio: "kazajistan ",
    codigo_postal:"32944 ",
    calle: "del mundo ",
    numero: "x ",
    planta:"x ",
    puerta: "2345 ",
}

console.log(adress1);
console.log(adress2);
//13

function parseDomain(direccion) {
   let particion = direccion.split(".");
   return {
       domain: particion[0],
       tld: particion[1]
   }
}

console.log(parseDomain("nintendo.es"));

//14

// const strictEquality = (num1, num2) => num1 == num2 && typeof num1 == typeof num2;
function sameType2 (dat1, dat2){
    if (dat1 == dat2 && typeof dat1 == typeof dat2){
    return "True";
    } else {
        return "False";
    }
}

console.log(sameType2(5, 5));

//15

function sameLength(dat1, dat2){
    if (dat1.length === dat2.length){
    return "True"
    } else {
        return "False"
    }
}

console.log(sameLength("Hola", "Dia"));

//16
//const isEmpty = function (str){ 
//     return str ? true : false;
// }
function vacio(dat){
    if (dat = " "){
        return "Esta vacio"
    } else {
        return "Tiene Contenido"
    }
}

console.log(vacio("hola"));

//17

let e = 0;
while (e <= brands.length-1){
    console.log(`Indice ${e}: ${brands[e]}`);
    e++
};

for (let e = 0; e <= brands.length-1; e++){
    console.log(`Index ${e}: ${brands[e]}`);
};

// for (let brand of brand){
//     console.log(brands);
// }

// brands.forEach((item, index) => console.log(`Index ${index}: ${item}`));
//18

function repeatString(a,b){
    console.log(a.repeat(b));
}


//19

const getVoteCount = function (obj){
    return obj.upVotes - obj.downVotes;
}

console.log(getVoteCount({upVotes: 35, downVotes: 15}));

//20 

function typeOfArray(array) {
    const arrayTypes = [];
    array.forEach(element => {
        arrayTypes.push(typeof element);
    });
    
    return arrayTypes; 
}

const testArray =(["I'm learning JS in a Bootcamp 🚀", 7.5, {}, 0, undefined, [], "codespace"]); 
console.log(typeOfArray(testArray));


//21 

function getParsedNumbers(array) {
    const parsedArray = [];
    array.forEach(element => {
        parsedArray.push(Number(element));
    });
    
    return parsedArray; 
}

console.log(getParsedNumbers(["1.5", "10", "34"]));

//22

const isPositive = num

//23
const remoteItem = (array, index) => array.splice(index, 1);

//24
const filetrItem = (array, numberToFilter) => {
    array.forEach((item, index) => {
        if (item === numberToFilter){
            removeItem(array, index);
        }
    });
}

const arrayFiltered = [1, 5, 6, 7, 5];
filetrItem(arrayFiltered, 5);
console.log(arrayFiltered);

//25

function propiedadesArray(object){
    return Object.keys(object);
}

let clase = {
    profesor: "cristian",
    alumno: "maria",
    alumno2: "elvira",
}

console.log(propiedadesArray(clase));

const valoresArray = (object) => Object.values(object);

console.log(valoresArray(clase));

//26

function stringInvertido(texto) {
    return texto.split('').reverse().join('');
}

console.log(stringInvertido('JavaScript'));

//27

function compara(cad1, cad2) {
    if (String(cad1.toLowercase()) == String(cad2.toLowercase()))
    return "Son Iguales";
    else {
        return "Son Diferentes";
    }
}

console.log(compara("Hola", "hola"));

function sameStrings (a, b){
    if (a.equalsIgnoreCase(b)) {
    console.log("a y b son iguales");
    }
}


console.log(sameStrings("Hola", "HOLA"));

//28

function letraMayuscula (a) {
    a = a.toLowerCase()
    .split(' ')
    .map((a) => a.charAt(0).toUpperCase() + a.substring(1))
    .join(' ');
    console.log(a);
}

letraMayuscula(j);