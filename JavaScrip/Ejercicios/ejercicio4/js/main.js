//Constructor

function Book(ID, titulo, autor, ventas, precio){
    this.ID = ID;
    this.titulo = titulo;
    this.autor = autor;
    this.ventas = ventas;
    this.precio = precio;
}

const books = [
    new Book(1,"Soy Programador", "J.A", 432, 59.90),
    new Book(2, "Java Scrip", "Stephen King", 1500, 100),
    new Book(3, "Haz un Bootcamp", "Edgar Allan Pae", 490, 80),
    new Book(4, "Ambiciones Reflexsiones", "Belen Esteban", 0, 0.45),
    new Book(5, "El Poder Del Ahora", "Eckahart Toll", 1290, 32),
    new Book(6, "Tus Zonas Erroneas", "Wayne Dyed", 3213, 20),
    new Book(6, "El Arte De No Amargarse", "Rafael Saint", 234, 30),
    new Book(7, "Adios", "Manuel Macias", 32, 12.90),
    new Book(8, "No Sufras", "Faustino Ortega", 17, 9.90),
    new Book(9, "La Soga", "Antonio Muñoz", 643, 24.99),
    new Book(10, "Usar la Soga", "Manuel Gomez", 121, 26.90),
    this.delete = function () {
        deletge[Book]; 
    }   
]

books.forEach(book =>{
    const newBook = document.createElement("tr");
    newBook.textContent = "";
    select.append(newBook);
});