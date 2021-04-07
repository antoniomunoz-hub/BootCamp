//Constructor
function User(nombre, primerApellido, segundoApellido, email, edad, ciudad,numeroArticulos){
    this.nombre = nombre;
    this.primerApellido = primerApellido;
    this.segundoApellido = segundoApellido;
    this.email = email;
    this.edad = edad;
    this.ciudad = ciudad;
    this.numeroArticulos = numeroArticulos;
    this.incrementArticulos = function () {
        this.numeroArticulos++;
    }
    this.emptyProducts = function (){
        this.numeroArticulos = 0;
    }
}

//Data
const users = [
    new User("Fran", "Gomez", "Fernandez", "fgf@gmail.com", 35, "Malaga"),
    new User("Raul", "Garcia", "Muñoz", "raulgm@msn.com", 25, "Mucia"),
    new User("Concepcion", "Arrebola", "Serrato", "conchiarrebola@terra.com", 48, "Jaen"),
];


// users.forEach(user => console.log(user.mail)) (para cada user devuelve console de los email)

//Selectores
const select = document.querySelector("#userSelect");
const list = document.querySelector("#userInfo"); 
const incrementButton = document.querySelector("#incrementButton"); 
const emptyButton = document.querySelector("#emptyButton");

for (let user of users){
    const newOption = document.createElement("option");
    newOption.textContent = user.nombre;
    select.appendChild(newOption);
}
