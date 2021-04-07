
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

const newTabButton = document.querySelector("#newTab");
const link = document.querySelector("a");
newButton.addEventListener("click", () => link.target = "_blank");


//9

const ap9Paragraph = document.querySelector("#colorsParagraph");
document.querySelector("#colorsSelect").addEventListener("change", e => {
    ap9Paragraph.style.color = e.target.value;
});


//10

const currentRandom = document.getElementById("currentRandom");
const totalNumbers = document.getElementById("totalNumbers");
const oddNumbers = document.getElementById("oddNumbers");
const evenNumbers = document.getElementById("evenNumbers");

document.getElementById("randomButton").onclick = () => {
    const randomNumber = Math.floor(Math.random() *100);
    currentRandom.textContent = randomNumber;

    totalNumbers.textContent++; // totalNumbers.textContent = Number(totalNumbers.textContent) + 1;
    randomNumber % 2 === 0 ? evenNumbers.textContent++ : oddNumbers.textContent++; //esto es igual que un if 
};

//11

const ul_2 = document.getElementById("ul-2");
const input_4 = document.getElementById("input-4");
const button_11 = document.getElementById("button-6");

const myArray = [];

function addNumber() {
    const num = input_4.value;
    if (myArray.includes(num)) {
        alert("error");
    } else {
        const li = document.createElement("li");
        ul_2.prepend(li);
        li.textContent = num;
        myArray.push(num);
    }
}

button_11.addEventListener("click", addNumber);

//Extra Refactorizar Codigo

const buttons = document.getElementsByClassName('btn-red');

buttons[0].addEventListener('click', () => {
    buttons[0].style.backgroundColor = "red";
});

buttons[1].addEventListener('click', () => {
    buttons[1].style.backgroundColor = "red";
});

buttons[2].addEventListener('click', () => {
    buttons[2].style.backgroundColor = "red";
});

//Solucion 1
Array.from(buttons).forEach(button => button.onclick = e => e.target.style.backgroundColor = "red");

//Solucion 2 
buttons = document.querySelectorAll(".btn.red");
button.forEach(button => {
    button.addEventListener("click", function (e){
        e.target.style.backgroundColor = "red";
    });
});
