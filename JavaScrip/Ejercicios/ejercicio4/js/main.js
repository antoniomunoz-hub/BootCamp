//Constructor

function Book(ID, tittle, author, sales, price){
    this.ID = ID;
    this.tittle = tittle;
    this.author = author;
    this.sales = sales;
    this.price = price;
}

//Data

const books = [
    new Book(1,"Soy Programador", "J.A", 4132, 59.90),
    new Book(2, "Java Scrip", "Stephen King", 1500, 100),
    new Book(3, "Haz un Bootcamp", "Edgar Allan Pae", 2490, 80),
    new Book(4, "Ambiciones Reflexsiones", "Belen Esteban", 10, 0.45),
    new Book(5, "El Poder Del Ahora", "Eckahart Toll", 1290, 32),
    new Book(6, "Tus Zonas Erroneas", "Wayne Dyed", 3213, 20),
    new Book(6, "El Arte De No Amargarse", "Rafael Saint", 2340, 30),
    new Book(7, "Adios", "Manuel Macias", 3215, 12.90),
    new Book(8, "No Sufras", "Faustino Ortega", 17, 9.90),
    new Book(9, "La Soga", "Antonio Muñoz", 6435, 24.99),
    new Book(10, "Usar la Soga", "Manuel Gomez", 1212, 26.90),
];

//Selectores

const booksTbody = document.getElementById("books-body");


function updateTable(){
    //Vaciamos tbody por completo
    booksTbody.innerHTML = ""; 
    
    //Generamos de nuevo todas las filas
    books.forEach(book => {
        booksTbody.innerHTML += 
        `<tr>
            <td>${book.id}</td>
            <td>${book.tittle}</td>
            <td>${book.author}</td>
            <td>${book.sales}</td>
            <td>${book.price}</td>
            <td id="${book.id}"</td>
        </tr>`
        const remveTd = document.getElementById(book.id);
        const newButton = document.createElement("button");
        newButton.className = "btn btn-danger";
    });
};

updateTable();

// books.forEach(book =>{
//     const newBook = document.createElement("tr");
//     newBook.textContent = "";
//     select.append(newBook);
// });