
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

parent1.style.backgroundColor = "#ddd"; //Cambiamos color 


// Array.from(family).forEach(item => console.log(item));
// console.log(family); forEach solo valido para arrays habira que convertir esta es manera manual

// for(let familyMember of family){
//     console.log(familyMembers);
// }