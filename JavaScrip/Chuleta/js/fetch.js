const URL = "https://jsonplaceholder.typicode.com/users"

function printNames(array){
    array.forEach(person => {
        console.log(person.name);    
    });
}

function printCity(array){
    array.forEach(person => {
        console.log(person.address.city);    
    });
}

function printLat(array){
    array.forEach(person => {
        console.log(person.address.geo.lat);    
    });
}

fetch(URL).then(r => r.json()).then(data=> console.log(data));

fetch(URL)
    .then(response => {
        if (response.ok){
            return response.json();
        }
        throw Error("Hay algun problema con la respuesta:" + response.statusText);
    })
    .then(data => {
        // Aqui proceso los datos
        printNames(data);
        printCity(data);
        printLat(data);

    }).catch(error => {
        console.log(error);
    });

//Async / await Alternativa a then

async function requestURL(URL) {
    console.log(1.1);
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    console.log(1.2);
}


console.log(1);
requestURL(URL);
console.log(2);

//Metodo peticion HTTP con POST en lugar GET

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

const newPost = {
    title: "mi titulo",
    body: "mi cuerpo de publicacion"
}

const http = {
    method:"POST", 
    headers: {
        "Content-type" : "application/json"
    },
    body: JSON.stringify(newPost) //convertimos a JSON

};

fetch(POST_URL, http)
    .then(responsive => responsive.json())
    .then(data => console.log(data));