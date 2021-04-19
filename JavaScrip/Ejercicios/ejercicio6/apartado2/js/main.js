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
    .then(data => {
        if  (data.error) {
            alert(data.error);
        } else {

        }
    })
}

async function fetchAllUsers(){
    // fetch(USERS_URL)
    // .then(response => response.JSON())
    // .then(data => console.log(data))
    

    const response = await fetch (USERS_URL);
    const data = await response.json();

    let users = [];
    for (let page = i; page <= data.total_pages; page++){
        response = await fetch (`${USERS_URL}?page = ${page}`);
        let newData = await response.json();
        console.log(newData);    
        users = users.concat(newData.data);
        users.forEach(user => userList.innerHTML += `<li>${user.mail}</li>`);

    }
} 



