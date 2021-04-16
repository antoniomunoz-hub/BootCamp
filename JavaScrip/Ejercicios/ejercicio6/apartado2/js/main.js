//Constantes

const LOGIN_URL = "https://reqres.in/api/login";

//Selectores
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", login);

function login(event){
    event.preventDefault();
    const userInfo = {
        email: emailInput.value,
        password: passwordInput.value
    };
    const config = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userInfo)
    };
    
    fetch(LOGIN_URL, config)
    .then(response => response.json())
    .then(data => console.log(data))
}



