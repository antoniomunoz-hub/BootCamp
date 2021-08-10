
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

// console.log(sueldos);

//Cuando una variable es definida como const no podemos reasignar una variable constante
// sin embargo las propiedades de un objeto si se puede reasignar 

//VEAMOS COMO PREVENIR ESTO

// Object.freeze(usuario); no deja modificar las propiedades, ni agregar ni eliminar
//Object.seal(usuario); no deja agregar ni eliminar pero SI modificar

//Unir dos objetos

const hijos ={
    nombre1: "Cayetano",
    sexo: "Varon"
};

// Spread operator o Rest Operator
const resultado = Object.assign(usuario, hijos);

console.log(resultado);

const resultado2 ={...hijos, usuario};
console.log(resultado2);


// THIS mezcla los valores es una forma de referirse a un objetco en si mismo porque uin objeto puede tener multiple informacion

const habitacion = {
    televisor: "LG 49",
    monitor: "Acer 27",
    portatil: "MSI Bravo15",
    videoConsola: "PS4",
    mostrarInfo: function (){
        console.log(`La habitacion contiene ${this.televisor}`)
    }
};

habitacion.mostrarInfo();

//Objeto literal

const grupo = {
    voz: "Alberto",
    sonajero: "Modesto",
    guitarra: "Pelu",
    percusion: false
}

//Objeto Constructor

function Grupo(voz, sonajero){
    this.voz = voz;
    this.sonajero = sonajero;
    this.percusion = false;
}

const grupo2 = new Grupo('salvi', 'guitarra nazareno');

console.log(grupo2);

// Object Keys Value y Entries

console.log(Object.keys(grupo)); // retorna las llaves

console.log(Object.values(grupo)); // retorna los valores

console.log(Object.entries(grupo)); //retorna todo