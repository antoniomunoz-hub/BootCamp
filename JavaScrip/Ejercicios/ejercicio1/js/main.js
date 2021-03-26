const div = document.getElementsByClassName("container")[0]

console.log(div);
const p = document.createElement("p");
const p2 = document.createElement("p");

p.textContent = "Soy Progamador";
p2.textContent = "Sogas a 5$";

div.appendChild(p);
div.appendChild(p2);
//div.append() este nos deja añadir mas de 1


const colorButton = document.getElementsByTagName("button")[0];
colorButton.addEventListener("click", function() {
    colorButton.style.backgroundColor = "red"
});
