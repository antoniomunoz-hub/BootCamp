
    // ----------uso de js externo----------

function saludo () {
    alert("Hola desde un script externo");
    console.log("has hecho click");
    }
    // document.getElementsByTagName("a").item(2).addEventListener("click", saludo);

    // ----------Depuracion / logging----------
    // alert("Mensaje");
    console.log("");


    // ----------Variables---------
    // var-> function scope
    // let / const -> block scope

    function saludar( ) {
        console.log("Inicial: ", contador);

        // Comprobar con var y con let y ver diferencias
        for (var contador = 0; contador < 6; contador++){
        console.log(contador);
        }
        console.log("Final: ", contador);
    }

    saludar();

    console.clear();
    // Inicializacion
    let day;
    day = 5;

    let monthName = "Octubre";

    let hour, minute, second;

    let array = [15, 20, 25]
    console.log(array[0], array[1], array[2]); 
    let [var1, var2, var3] = [15, 20, 25]; //AVANZADA
    console.log(var1, var2,var3);

    // const -> Block Scope
    const x=1;
    // x = 2 ERROR UNA CONSTANTE NO PUEDE SER SOBREESCRITA
    // const y; error missing = in const

    

    // ---------- Tipos de Datos ----------
    
    
    // ----------Primitivos----------
    
    let str = String("Im a string");
    let str2 = "Im another string"; // Recomendado  
    console.log(typeof str, typeof str2, typeof "");

    // let str = "string" ES IGUAL A "string"

    let num = Number (5);
    let num2 = 5;
    console.log(typeof num, typeof num2, typeof 5, typeof 5.3, typeof"5");

    let bool = Boolean(true);
    let bool2 = false;
    console.log(typeof bool, typeof bool2, typeof true, typeof "true");

    let undef;
    console.log(undef, typeof undef);

    let selectedColor = null; //Limpiar una variable
    console.log(selectedColor, typeof selectedColor);

    // ----------Objetos----------
    array = Array(1, 2, 3);
    let array2 = [1, 2, 3];
    console.log(array,array2);
    console.log(typeof array, typeof array2);

    console.log(typeof new Date("2021-05-21"));
    console.log(typeof new Error("Mensaje de Error"));

    console.clear();
    // ----------Strings----------
    str = "Hola Futuro";
    console.log(str, str.length);
    console.log(str.indexOf("Futuro"), str.indexOf("Cadena no Presente"));
    console.log("La ultima ocurrecia de `u` esta en el indice", str.lastIndexOf("u"));

    console.log(str.substring(1, 3));

    console.log("Hola mundo".concat(" .Adios mundo"));
    console.log("Hola mundo" + ".Adios mundo."); //Equivalente a concat
    str = str + ". Adios mundo.";
    str += ". Adios mundo.";
    console.log(str);
    console.log(str.replace("futuro", "mundo"));
    console.log(str.replaceAll("mundo", "futuro"));
    console.log(str.toLocaleLowerCase());
    console.log(str.toUpperCase());

    console.log(`El dia de mi cumpleaños es ${day}`); //String template
    console.log("El dia de mi cumpleaños es", day);

    //----------Parsing ( conversion de un tipo a otro )----------
    let number = Number("asdasd"); // Nan = Not a Number. No genera error.
    console.log(number, typeof number);

    number = Number("1000");
    console.log(number, typeof number);

    number+= "1000"; // Entiende que es una concatenacion, no una suma
    console.log(number, typeof number);

    console.log("1" + 1, "1" - 1);// con el + contaquena, el - no tiene otro valor que no sea restar 

    // ----------Objetos----------
    let person = {
        name: "Oscar",
        age: 30,
        blonde: false,
        jump() {
            console.log("Hey, mira como salto!!");
        }//Funcion 
    }

    console.log(person);
    console.log(`Se llama ${person.name} y tiene ${person.age} años`);
    
    person.name = "Dimitrov";
    // Acceso por punto / Dot notation

    console.log(person, typeof person);
    console.log(`Se llama ${person.name} y tiene ${person.age} años`);

    // Acceso por corchetes / Brackets notation

    let propertyName = "age";
    console.log(person[propertyName]);

    //Ampliacion

    person.children = ["Marta","Peter"];
    console.log(person);
    console.log(person.children);

    person.jump();

    // {} Objeto, [] Array tambien es objeto, "" String
    console.log(typeof{}, typeof [], typeof"");

    [13:45] "\"Elvira (Invitado)\""
    
    // Object Constructor using functions


    function Car(brand, color, weight, topSpeed) {​​​​​​​
        this.brand = brand;
        this.color = color;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.getDescription = function() {​​​​​​​
            return `This ${​​​​​​​this.color}​​​​​​​ ${​​​​​​​this.brand}​​​​​​​ weigths ${​​​​​​​this.weight}​​​​​​​ ` +
            `kilos and can reach up to ${​​​​​​​this.topSpeed}​​​​​​​ km/h. `;
        }​​​​​​​
    }​​​​​​​


    const car1 = new Car("Mercedes", "red", 2000, 200);
    const car2 = new Car("Volvo", "white", 2500, 180);
    const car3 = new Car("Volkswagen", "blue", 1500, 175);


    console.log(car1, car2, car3);


    console.log(car2.weight);


    console.log(car3.getDescription());
    

// ----------This-----------

    const person2= {
        
        name: "Thom",
        talk() {
            console.log(`Me llamo ${this.name}`);
        }
    }

    const person3= {
        name: "Sarah",
        talk() {
            console.log(this);
            console.log(`Me llamo ${this.name}`);
        }
    }

    person2.talk();
    person3.talk();

    console.clear();

    //Object Constructor using functions

    function Car(brand, color, weight,topSpeed){
        this.brand = brand;
        this.color = color;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.getDescription = function(){
            return `This ${this.color} ${this.brand} weights ${this.weight}`+
            `kilos and can reach up to ${this.topSpeed} km/h`
        }
    }

    const car1 = new Car("Mercedes", "red", 2000, 260);
    const car2 = new Car("Volvo", "white", 2500, 190);
    const car3 = new Car("Volkswagen", "blue", 1750, 210)

    console.log(car1, car2, car3);

    console.log(car3.getDescription());


// ---------- Arrays ----------

let selectedColors = ["red", "blue"]; // Array de String
console.log(selectedColors, selectedColors.length, typeof selectedColors);

selectedColors[2] = "green"; 
console.log(selectedColors, selectedColors.length);

selectedColors.push("voileta"); //RECOMENDADA
console.log(selectedColors, selectedColors.length);

selectedColors.pop();// Elimina el ultimo elemento
console.log(selectedColors, selectedColors.length);

selectedColors.unshift("white"); // Añadir un nuevo elemento al pricipio
console.log(selectedColors, selectedColors.length);

selectedColors.shift("white"); // Elimina el primer elemento
console.log(selectedColors, selectedColors.length);

selectedColors.sort();// Ordena alfabeticamente
console.log(selectedColors, selectedColors.length);

console.log("El rojo esta en el indice ", selectedColors.indexOf("red")); // Localiza la posicion del elemento dentro del array
console.log(selectedColors);

console.log(selectedColors.slice(1, 3)); // Elimina elementos
console.log(selectedColors);

console.log("Los elementos Borrados son: ", selectedColors.splice(1, 3));
console.log("El elemento que ha sobrevivido a sido: ", selectedColors);

// Crea un objeto niño que tenga las propieades nombre altura genero
// y amigos, estara vacio y los añadiremos posterior mente 3 amigos nombre. 
//despues añadimos uno al iniicio
//ponerle funcion perder ultimo amigo

let chico = {
    name: "Oscar",
    height: 1.36,
    genero: "masculino",
    amigos:[],
    perderAmigo() {
        this.amigos.pop()
    }

}

console.log(chico);

chico.amigos.push("cristian","luisito","tania") // para añadir push anque el array este vacio 
console.log(chico.amigos);

chico.amigos.unshift("manuel");
console.log(chico.amigos);

chico.perderAmigo();
console.log(chico.amigos);

// ----------Condicionales----------

const randonNumber = 9;
const quessedNumber = "9";

if(typeof randonNumber !== typeof quessedNumber){
    console.log("Hey tienen diferente clase");
}

// if (randonNumber === quessedNumber) {
//     console.log("Has acertado el numero");
// } else if (randonNumber > quessedNumber) {
//     console.log("El numero secreto es mayor");
// } else if (randonNumber < quessedNumber) {
//     console.log("El numero secreto es menor");
// }

// ---------- Ternary Operator ----------

// Si es cierto primer string, sino automaticamente pasa al segundo
let variable = 12 < 10 ? "el primero es menor " : "el primero es mayor"
console.log(variable);

let hombre = {
    name: "Oscar",
    blonde: false,
    age: 30,
    presentarse(){
        console.log(`Me llaman ${this.name}, tengo ${this.age} años y ${this.blonde ? "soy rubio" : "no soy rubio"}`);
    }    
}

hombre.presentarse();

// ---------- Switch ----------
let option = 3;
switch(option) {
    case 1:
        //Bloque de codigo para valor 1
        console.log("Option vale 1");
        break;
    case 2:
        //Bloque de codigo para valor 2
        console.log("Option vale 2");
        break;
    case 3:
        //Bloque de codigo para valor 3
        console.log("Option vale 3");
        break;
    default: //De otro modo Pseint
    console.log("Otra opcion");
        break;
}

console.clear();
// ---------- Funciones ----------

// Nombradas
function greet (name, lastName) {
    console.log(`Hola, ${name} ${lastName}. ¿Que tal?`);
}

greet();
greet("Marcos", "Aurelio")

function cuadrado (num1) {
    let cuadrado = num1 * num1;
    return cuadrado;
}

console.log(cuadrado(5));  


//Anonimos
let numbersArray = [5, 51, 1, 15, 2];
console.log(numbersArray);
numbersArray.sort();
console.log(numbersArray);

function orderNumbers(a, b) {
    if (a < b){
        return -1;
    } else if (a === b) {
        return 0;
    } else{
        return 1;
    }
}


//Funciones Alto Nivel

//Map

let arr1 = [1, 2, 3];
let arr2 = [];

arr2 = arr1.map(num => num * 2)

// for (let num of arr1) {
//     arr2.push(num * 2);
// }

console.log(arr1, arr2);
// a partir de un array con años de nacimiento, calcular edades

const birthYears = [1980, 1990, 1975, 1970];
let ages = [];

ages = birthYears.map( year => 2021 - year );

console.log(ages);

//Filter

//forma manual

const prices = [150, 50, 49, 51, 15, 237];
const expensives = [];

for (let price of prices ){
    if (price > 50){
        return expensives.push(price)
    }
} 

console.log(expensives);

//con funcion filter

const prices = [150, 50, 49, 51, 15, 237];
let expensives = [];

expensives = prices.filter(price => price >= 50);

console.log(prices, expensives);

const cars = [
    {
        brand: "BMW",
        year: 2018,
        plateNumber: "  LMN4578"
    },
    {
        brand: "BMW",
        year: 1990,
        plateNumber: "  CDW4578"
    },
    {
        brand: "SEAT",
        year: 2006,
        plateNumber: "  DMN4578"
    },
];

console.log(cars.filter(car => car.year > 2008));
console.log(cars.map(car => car.brand)); // crea nuevo array con las marcas de los coches 
//recorriendo de elemento a elemento

//Sort

cars.sort((car1, car2) => car1.year - car2.year);

console.log(cars);

//Reduce

const arr = [10, 7, 13, 20];

console.log(arr.reduce((sum, currentNumber) => sum + currentNumber, 0));


// numbersArray.sort(orderNumbers);
numbersArray.sort(function (a, b){ return a - b});

console.log(typeof orderNumbers, typeof function (a, b) {return a -b});
console.log(numbersArray);

console.clear();
//Arrow Funtion

// const perimeterOfSquare = (side) => side *4; 

let perimeterOfSquare = function (side){
    return side*4;
}
perimeterOfSquare = function (side) {return side * 4;} //opcional una unica linea
perimeterOfSquare = (side) => {return side * 4;} //sustituyo function por la flesa despues de
perimeterOfSquare = (side) => side * 4; // Si solo quiero devolver algo quito llaves y return
perimeterOfSquare = side => side * 4; // si solo tiene 1 param  puedo quitar parentesis 

console.log(perimeterOfSquare(5));

// console.log(typeof function(){});
// console.log(typeof (()=> {}));


//transformar funcion anonima en funcion flehcas

numbersArray.sort(function(a, b) {return a - b});
numbersArray.sort((a, b) => a - b);
console.log(numbersArray);

//Crea funcion flecha con el siguiente codigo
// function cuadrado (num1) {
//     let cuadrado = num1 * num1;
//     return cuadrado;
// }

// console.log(cuadrado(5)); 

let elevado2 = num1 => num1 * num1;
console.log(elevado2(6));

//----------- For ------------

for(let i = 0; i <= 10; i++){
    console.log(`Indice: ${i}`);
}
//Definir y rellenar un array con el indice 1

const arrayx = [];


for(let i = 0; i <= 10; i++) {
   (arrayx.push(i));
}

console.log(arrayx);

// while
let contador = 0;
while(contador <= 10) {
    console.log(contador);
    contador++;
}

while (true){
    break;
}

console.log("No entra en bucle");

//forEach
console.log(numbersArray);

numbersArray.forEach(function(item, index) {
    console.log( `Indice ${index}: ${item}`);
});


numbersArray.forEach((item, index) => console.log(`Indice ${index}: valor ${item}`));

//Copiar un array a otro vacio

let otherArray = [];
console.log(otherArray);//Cuidado con consola navegador 

numbersArray.forEach(item => otherArray.push(item));
console.log(otherArray);


//----------- For Of ----------

for(let item of numbersArray){
    console.log(item);
}

// ----------- Continue ----------

for (let i = 0; i < 5; i++) {
    if(i === 3) {
        continue;// Salta a la siguiente iteracion
    }
    console.log("Using Continue", i);
}

//------------ Break -----------
let i = 0;
let k;

mainLoop: while(true){
    console.log("Outer loop", i);
    i++;
    k = 1;
    while (true) {
       console.log("Inner loop", k);
       k++;
       if (i === 5 && k === 5){
           break mainLoop;
       }  else if(k === 5) {
           break;
       }
    }
}


// Ejercicios Basicos Js
//1ºPide la edad y si es mayor 18 indica que ya puede conducir

const edad = 16;
if( edad >= 18){
    console.log("Puede Conducir");
} else if ( edad < 18){
    console.log("No puede conducir");
}


// Pide una nota (numero) Muestra la calificacion segun nota


const nota = 6;
if( nota = 0 || nota < 3){
    console.log("Muy deficiente");
}
if(nota = 3 || nota < 5 ){
    console.log("Insuficiente");
}
if(nota = 5 || nota < 6 ){
    console.log("Suficiente");
}
if(nota = 6 || nota < 7){
    console.log("Bien");
}
if(nota = 7 || nota < 9){
    console.log("Notable");
}
if(nota = 9 || nota < 10){
    console.log("Sobresaliente");
}
