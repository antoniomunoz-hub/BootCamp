
// un objeto agrupa todo en una sola variable...

//Objeto 
const usuario= {
    nombre: "Antonio",
    apellido: "Muñoz",
    hombre:true
};

console.log(usuario);

console.log(usuario.apellido); //para acceder a una propieda del objeto

//agergar, eliminar propiedades al objeto

usuario.imagen = "imagen.jpg";
delete usuario.hombre;

console.log(usuario);

//Destructuring object ademas de extraer un valor, crea la variable

//Forma de hacer antigua
// const nombre = nombre.usuario;
// console.log(nombre);

//ES6

const {nombre, apellido} = usuario

console.log(nombre);

console.log(apellido);

//Crea objetos dentro de objetos

const señorio ={
    licencia: "Bar con musica",
    estilo: "flamenco",
    menores: "false",
    personal:{
        responsable: "alejandro",
        camarera: "elena",
        rrpp: "alvaro",
        seguridad: "antonio",
    
    sueldos:{
        responsable: 10,
        camarera: 8,
        rrpp: 8,
        seguridad: 10
    }
}
    
};

console.log(señorio);
console.log(señorio.personal.sueldos.seguridad);

//Destructuring object en objetos mas grandes 

const {licencia, personal, personal: {sueldos: {seguridad}} } = señorio;

console.log(sueldos);

//Cuando una variable es definida como const no podemos reasignar una variable constante
// sin embargo las propiedades de un objeto si se puede reasignar 

//VEAMOS COMO PREVENIR ESTO