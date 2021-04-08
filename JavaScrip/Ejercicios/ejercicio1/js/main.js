
//1

const div = document.getElementsByClassName("container")[0]

console.log(div);
const p = document.createElement("p");
const p2 = document.createElement("p");

p.textContent = "Soy Progamador";
p2.textContent = "Sogas a 5$";

div.appendChild(p);
div.appendChild(p2);
//div.append() este nos deja añadir mas de 1

//2

const colorButton = document.getElementsByTagName("button")[0];
colorButton.addEventListener("click", function() {
    colorButton.style.backgroundColor = "red"
});

//3

// const list = document.querySelector("ul");
// const image = document.querySelector("img");
// const changeImage = e => image.src = e.target.textContent;

// listItems[0].addEventListener("click", changeImage);
// listItems[1].addEventListener("click", changeImage);
// listItems[2].addEventListener("click", changeImage);

//4

const ap4Parrafo = document.getElementById("parrafoRellenable");
const ap4Input = document.querySelector("input");
const ap4Button = document.querySelectorAll("button")[1];

ap4Button.addEventListener("click", () => {
    ap4Parrafo.textContent = ap4Input.value;
    ap4Input.value = ""; 
});

//4.2

const ap42Parrafo = document.getElementById("parrafoRellenable2");
const ap42Input = document.querySelectorAll("input")[1];


ap42Input.addEventListener("keyup", () => ap42Parrafo.textContent = ap42Input.value);

//5

const textArea = document.querySelector("#textareatovalidate");
textArea.addEventListener("input", e => {
    e.target.style.color = e.target.value.length > 15 ? "red" : "green";
    // if (e.target.value.length > 15) {
    //     e.target.style.color = "red";
    // } else {
    //     e.target.style.color = "green";
    // }
});

//6

const evenInput = document.querySelector("#evenNumberInput");
evenInput.nextElementSibling.addEventListener("click", () => {
    if (evenInput.value % 2 !== 0) {
        evenInput.style.border = "2px solid red";
    } else {
        evenInput.style.border = "";
    }
});


//7

const ul = document.getElementById("listToFill");

for ( let i = 1; i <= 10; i++ ) {
    const newLi = document.createElement("li");
    newLi.textContent = `Elemento ${i}`;
    ul.appendChild(newLi);
}

//8

// const newTabButton = document.querySelector("#newTab");
// const link = document.querySelector("a");
// newButton.addEventListener("click", () => link.target = "_blank");


//9

const ap9Paragraph = document.getElementById("colorsParrafo");
document.getElementById("colorsSelect").addEventListener("change", e => {
    ap9Paragraph.style.color = e.target.value;
});


//10

const currentRandom = document.getElementById("currentRandom");
const totalNumbers = document.getElementById("totalNumbers");
const oddNumbers = document.getElementById("oddNumbers");
const evenNumbers = document.getElementById("evenNumbers");

document.getElementById("randomButton").onclick = () => {
    const randomNumber = Math.floor(Math.random()*100);
    currentRandom.textContent = randomNumber;

    totalNumbers.textContent++
    
    randomNumber % 2 === 0 ? evenNumbers.textContent++ : oddNumbers.textContent++;
}; 

//11 

const ulAptll = document.getElementById("ulAptll");
const inputAptll = document.getElementById("inputAptll");
const buttonAptll = document.getElementById("buttonAptll");
let numberList = [13, 27, 54, 86];

// function fillList () {
//     // VACIA LA LISTA Y LA RELLENA DE NUEVO ELEMENTO A ELEMENTO
//     ulAptll.innerHTML = "";
//     for (let number of numberList) {
//         newLi = document.createElementNS('li');
//         newLi.textContent = number;
//         ulAptll.appendChild(newLi);
//     }
// }

// function addToList () {
//     // PARSEA EL INPUT COMPRUEBA SI EXISTE Y LO AÑADE
//     let numberToJoin = Number (inputAptll.value);
//     if(numberList.indexOf(numberToJoin) === -1) {
//         numberList.push(numberToJoin);
//         fillList();
//     } else {
//         window.alert (`Este numero ya esta en la lista`);
//     }
// }

// fillList();
// buttonAptll.addEventListener(`click`, addToList);

//12

document.querySelector("#toggler").onclick = (e) => e.target.classList.toggle("btn");
