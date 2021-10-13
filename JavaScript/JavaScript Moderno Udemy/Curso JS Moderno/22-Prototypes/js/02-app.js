function Alumno (nombre, mensualidad){
    this.nombre = nombre,
    this.mensualidad = mensualidad;
}

const pablo = new Alumno('Pablo', 50);

function formatearAlumno(cliente){
    const{nombre, mensualidad} = cliente
    return `El cliente ${nombre} tiene una mensualidad de ${mensualidad}`;
}

function formatearAcademia(academia){
    const{nombre, precio, disciplina} = academia
    return `La academia ${nombre} tiene una mensualidad de ${precio} y practican ${disciplina}`;
}
console.log(formatearAlumno(pablo));

function Academia (nombre, precio, disciplina) {
    this.nombre = nombre;
    this.precio = precio;
    this.disciplina = disciplina;
}

const attitude = new Academia('Atitude', 60, 'Brazilian Jiu Jitsu');

console.log(formatearAcademia(attitude));

