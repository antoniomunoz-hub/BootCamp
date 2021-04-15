//1
const container1 = document.getElementsByClassName("container1")[0];

var p1 = document.createElement("p");
var p2 = document.createElement("p");

p1.textContent = " Hola Mundo ";
p2.textContent = " Adios Mundo ";

container1.appendChild(p1);
container1.appendChild(p2);

//2

const buttonBody = document.getElementById("changeBody");

buttonBody.addEventListener("click", function (){
    buttonBody.style.backgroundColor = "purple";
    
})

//3

const list = document.querySelector("ul");
const image = document.querySelector("img");

const changeImage = e => image.src = e.target.textContent;

list.addEventListener("click", changeImage);

//4

const paragrahp1 = document.getElementById("paragraph1");
const inputForWrite = document.getElementById("inputForWrite")
const buttonAgree = document.getElementById("buttonAgree");

buttonAgree.addEventListener("click", () => {
    paragrahp1.textContent = inputForWrite.value;
    inputForWrite.value = "";
});

//4.2

const paragrahp2 = document.getElementById("paragraph2");
const inputForWrite2 = document.getElementById("inputForWrite2")
const buttonAgree2 = document.getElementById("buttonAgree2");

inputForWrite2.addEventListener("keyup", () => {
    paragrahp2.textContent = inputForWrite2.value;
});

