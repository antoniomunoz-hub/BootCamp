//Constructor
function User(nombre, primerApellido, segundoApellido, email, edad, ciudad){
    this.nombre = nombre;
    this.primerApellido = primerApellido;
    this.segundoApellido = segundoApellido;
    this.email = email;
    this.edad = edad;
    this.ciudad = ciudad;
    this.numeroArticulos = 0;
    this.incrementArticulos = function () {
        this.numeroArticulos++;
    }
    this.emptyProducts = function () {
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

// for (let user of users){
//     const newOption = document.createElement("option");
//     newOption.textContent = user.nombre;
//     select.append(newOption);
// }

users.forEach(user => {
    const newOption = document.createElement("option");
    newOption.textContent = user.nombre;
    select.append(newOption);
});

function fillList(user){

    list.innerHTML= "";
    
    for (const propertyName in user){
    const value = user[propertyName];
    console.log(`propertyName: ${propertyName}, value: ${value}`);

        if (typeof value !== "function") {
            const newListItem = document.createElement("li");
            newListItem.innerHTML = `<b>${propertyName}:</b> ${value}`;
            newListItem.classList.add("list-group-item");
            list.appendChild(newListItem);

            // list.innerHTML += `<li class="list-group-item"><b>${propertyName}:</b> ${value}</li>`
        }
    }
}

fillList(users[0]);

function porcessProducts (e){
    const userSelect = users.find(user => user.nombre === select.value);
    if (e.target.id === "incrementButton"){
        userSelect.incrementArticulos();
    } else {
        userSelect.emptyProducts();
    }
    fillList(userSelect)
}

//Añadir listeners
select.addEventListener("change", e => {
    console.log(users.find(user => user.nombre === select.value));

    fillList(users.find(user => user.nombre === select.value));
});

incrementButton.addEventListener("click", porcessProducts);
emptyButton.addEventListener("click", porcessProducts);







