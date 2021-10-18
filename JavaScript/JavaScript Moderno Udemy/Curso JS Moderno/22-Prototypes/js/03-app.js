function Alumno (nombre, mensualidad){
    this.nombre = nombre,
    this.mensualidad = mensualidad;
}

Alumno.prototype.tipoAlumno = function(){
    console.log('desde el nuevo proto');
}

// Instanciarlo 

const antonio = new Alumno('Antonio', 90);
antonio.tipoAlumno();
console.log(antonio);


function Academia (nombre, precio, disciplina) {
    this.nombre = nombre;
    this.precio = precio;
    this.disciplina = disciplina;
}


const liliusBarnatt = new Academia ('LBMA', 70, 'Artes Marciales')
console.log(liliusBarnatt);