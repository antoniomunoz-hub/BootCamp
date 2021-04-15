const URL ="http://jsonplaceholder.typicode.com/comments"
const URLPost = "http://jsonplaceholder.typicode.com/posts"

const liComment = document.getElementById("liComment");

function printComments(array){
    const newArray = array.slice(0, 20)
    
    liComment.innerHTML = "";// Siempre que necesitemos vaciar contenido
    newArray.forEach(comment => {
        console.log(comment.name);
        liComment.innerHTML += `<li>${comment.name}</li>`;
    })
};





// fetch(URL).then(r => r.json()).then(data=> console.log(data));

fetch(URL)
    .then(response => {
        if (response.ok){
            return response.json();
        }
        throw Error("Hay algun problema con la respuesta:" + response.statusText);
    })
    .then(data => {
        // Aqui proceso los datos
        printComments(data)
    }).catch(error => {
        console.log(error);
});





const container = document.getElementById("container");

function tittleBody(array){
    const newArray2 = array.slice(0, 20)
    
    container.innerHTML = "";// Siempre que necesitemos vaciar contenido
    newArray2.forEach(post => {
        console.log(post);
        container.innerHTML += `<h2>${post.title}</h2> `+`<p>${post.body}</p>`;
    })
};


fetch(URLPost)
    .then(response => {
        if (response.ok){
            return response.json();
        }
        throw Error("Hay algun problema con la respuesta:" + response.statusText);
    })
    .then(data => {
        // Aqui proceso los datos
        tittleBody(data)
    }).catch(error => {
        console.log(error);
});


