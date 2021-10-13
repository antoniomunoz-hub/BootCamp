const alumno = {
    nombre: 'Antonio',
    mensualidad: 70
}

console.log(alumno);

function Alumno (nombre, mensualidad){
    this.nombre = nombre,
    this.mensualidad = mensualidad;
}

const pablo = new Alumno('Pablo', 50);

console.log(pablo);