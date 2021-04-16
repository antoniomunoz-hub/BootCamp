const URL ="http://jsonplaceholder.typicode.com/comments"
const URLPost = "http://jsonplaceholder.typicode.com/posts"

const liComment = document.getElementById("liComment");

function printComments(array){
    const newArray = array.slice(0, 20)
    
    liComment.innerHTML = "";// Siempre que necesitemos vaciar contenido, para cargar el nuevo
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
    const newArray2 = array//.slice(0, 20)//
    
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
        fillDiv()
        posts = [...data];
    }).catch(error => {
        console.log(error);
});


//Paginado

//Constantes

const pageSize = 20;

//Variables 
let posts = [];
let currentPage = 1;

//Selectores

const postDiv = document.getElementById("posts");
document.querySelectorAll("#previusPage").forEach(button => button.addEventListener("click",changePAge));
document.querySelectorAll("#nextPage").forEach(button => button.addEventListener("click",changePAge));

//Utilidades

function fillDiv(posts) {
    const newPagePosts = paginate(posts, pageSIze, currentPage );
    console.log(newPagePosts);
    postDiv.innerHTML = "";
    posts.forEach(post => postDiv.innerHTML += `<h3>${post.id} ${post.tittle}</h3><p>${post.body}</p>`);
}

function changePAge(event) { 
    if (event.target.className === "previusPage" && currentPage > 1) {
        currentPage --;
    } else if (event.targetClassName === "nextPage" && currentPage < post.lenght / pageSize){
        currentPage++;
    };
    fillDiv();
}
//en esta url esta la funcion para paginar 
//https://stackoverflow.com/questions/42761068/paginate-javascript-array
function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}

// const paginador = document.getElementById("paginator");

// function paginator(items, current_page, per_page_items) {
//     let page = current_page || 1,
//     per_page = per_page_items || 20,
//     offset = (page - 1) * per_page,

//     paginatedItems = items.slice(offset).slice(0, per_page_items),
//     total_pages = Math.ceil(items.length / per_page);

//     return {
//         page: page,
//         per_page: per_page,
//         pre_page: page - 1 ? page - 1 : null,
//         next_page: (total_pages > page) ? page + 1 : null,
//         total: items.length,
//         total_pages: total_pages,
//         data: paginatedItems
//     };
// };

