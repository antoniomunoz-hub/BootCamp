
let nombre = prompt("Introduzca su nombre");
var nombreHtml = nombre;
let apellido = prompt("Introzuca su apellido");
var apellidoHtml = apellido;
let direccion = prompt("Introduzca su direccion");
var direccionHtml = direccion;
let edad = prompt("Introduzca su edad");
var edadHtml = edad 

// document.getElementById("nombre").innerHTML =
//  `Mi Nombre es ${nombreHtml}`;

// document.getElementById("apellido").innerHTML =
// `Mi apellido es ${apellidoHtml}`;

// document.getElementById("direccion").innerHTML =
// `Mi direccion es ${direccionHtml}`;

// document.getElementById("edad").innerHTML =
// `Mi edad es ${direccionHtml}`;

document.getElementById("datos").innerHTML =`Mi Nombre es ${nombre}<br> 
Mi Apellido es ${apellido}<br>
Mi direccion es ${direccion}<br> 
Mi edad es ${edad}`;
