//------------ DOM (Document Object Model)----------

//Basics

console.log(document);
console.log(document.domain);
console.log(document.URL);
document.title += " Dom" //Concatenamos con =+
console.log(document.title);

//Selectors
const family = document.getElementsByTagName("div")
console.log(family);


const grandParent = document.getElementById("grandparent")
console.log(grandParent);

const parents = document.getElementsByClassName("parent")
const parent1 = parents[0];
const parent2 = parents[1];
console.log(parent1);

const children = document.getElementsByClassName("child")
console.log(children);

let element = document.querySelector("div#grandparent>.parent>div.child#child4")
console.log(element);

// parent1.style.backgroundColor = "#ddd"; //Cambiamos color 
const changeBackground = (element, color) => element.style.backgroundColor = color;

// changeBackground(children[0], "#333");
// changeBackground(parent1, "red");
// changeBackground(parent2.children[1], "blue"); //salto padre2 hijo 1 osea ser el segundo hijo
// changeBackground(children[0]. parentNode. parentNode, "#ddd");//accedemos al abuelo 
// // children[0].parentNode.style.backgroundColor = "#666" Forma larga decambiar el

// changeBackground(parent1.children[1].previousElementSibling, "red")//accedemos al dom por los hermanos accedemos al children1 y pasamos al elemento previo
// changeBackground(grandParent.children[1].previousElementSibling.lastElementChild, "green") //en este caso children no es la variable sino una propiedad y usamos las que pone Jesus

//Propiedades

// children[0].innerHTML = "Child 1 V2";
console.log(children[0].innerHTML); 
console.log(children[0].textContent); //Ignora etiquetas HTML exlusivament texto

console.log("ClassList", parent1.classList);
parent1.classList.remove("bg-dark");
console.log("ClassList:", parent1.classList);
parent1.classList.add("bg-red")
console.log("ClassList: ", parent1.classList);

parent1.classList.toggle("bg-red");
// alterna la clase si no esta la incluye y si si la quita 

parent1.setAttribute("name", "nombre-del-parent-1");


//Cereate / Remove Elements

let myDiv = document.createElement("div")
myDiv.id = "new-Div";
myDiv.classList.add("child");
myDiv.textContent = "child 2.5";

// let myDiv2 = myDiv;
// parent2.appendChild(myDiv2); // ESO ESTA MAL

parent1.appendChild(myDiv);//mismo nodo cpm ps nombres diferenes

myDiv2 = myDiv.cloneNode(true); //creamos un nuevo nodo a partir del original el TRUE nos copia tamaño y texto "copia profunda"
parent2.appendChild(myDiv2);
myDiv2.textContent = "Child 5 (Añadido)";

myDiv.remove();
let myDiv3 = myDiv.cloneNode(true);
parent2.before(myDiv3); // Antes
parent2.after(myDiv.cloneNode()); //Despues

// Array.from(family).forEach(item => console.log(item));
// console.log(family); forEach solo valido para arrays habira que convertir esta es manera manual

// for(let familyMember of family){
//     console.log(familyMembers);
// }


//crear funcion que me devulva un nodo nuevo y que reciba etiqueta e iD

function createNode(tag, id) {
    let newNode = document.createElement(tag)
    newNode.id = id;
    return newNode;
}

let newDiv = createNode("div", "identificador")
let link = createNode("link", "identificador")

parent2.appendChild(newDiv);
parent2.appendChild(link);

link.textContent = "Pincha aqui";
link.setAttribute("href", "https://google.com") //REVISAR 3:55h del video
grandParent.appendChild(link);