console.clear();    
//Antes de ES6 

function Car (brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.getAge = function () {
        let age = new Date().getFullYear() - this.year;
        console.log(`This ${this.brand} ${this.model} is ${age} years old`);
    }
}

let myCar = new Car ( "Ford", "Mustang", 1990)
let myCar2 = new Car ( "Audi", "Q7", 2015 )

console.log(myCar, myCar2);
myCar.getAge();

Car.getHp = function () { // No actualiza las instancias
    console.log("This car has 300 horspower");
}

myCar.getHp = function () { // Solo modifica la instancia myCar
    console.log("This car has 350 horspower");
}

Car.prototype.getHp = function () {
    console.log("This car has 450 horspower");
}

myCar.getHp();
// myCar2,getHp();

function Suv(brand, model, year, width, height) {
    Car.call(this,brand, model, year )
    this.width = width;
    this.height = height;
}

Suv.prototype = Object(Car.prototype);

let mySuv = new Suv ("Audi", "Q3", 2017, 2000, 1800);
console.log(mySuv);

mySuv.getAge();
mySuv.getHp();

console.clear;

// ES6      

class Book {
    constructor (tittle, author, year) {
        this.tittle = tittle;
        this.author = author;
        this.year = year;
    }
    
    getSumary() {
        console.log(`${this.tittle} was written by ${this.author} in ${this.year}` );
    }

    getType () {
        console.log("I`m a normal book");
    }
}

const book1 = new Book("Metamorphosis", "Franz Kafka", 1915);

console.log(book1);
book1.getType();
book1.getSumary();

//Sub clase ( herencia )

class Magazine extends Book {
    constructor(tittle,author, year, month) {
        super(tittle, author, year);
        this.month = month;
   }
       getType() {
       console.log("I`m a magazine");
   }
}

//Instalamos una resvista

const mag1 = new Magazine ("Super Pop", "Algun Loco", 2015);
mag1.getSumary();
mag1.getType();
book1.getType();

console.log(mag1);



// Otro Ejemplo

class Animal {
    constructor( type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    makeSound() {
        console.log(`This ${this.type} namond ${this.name} goes ${this.sound}`);
    }

    static compareAnimals(animal1, animal2){
        return animal1.type === animal2.type
    }
}

class Cat extends Animal {
    constructor (name){
        super("cat", name, "miau");
    }
}

class Dog extends Animal {
    constructor (name){
        super("dog", name, "woof");
    }
}

const conBotas = new Cat ("Con Botas");
const dylan = new Dog ("Dylan");
const danko = new Dog ( "Danko");


conBotas.makeSound();
dylan.makeSound();
danko.makeSound();

console.log(Animal.compareAnimals(danko, dylan));