interface Competidor {
    nombre: string;
    coachs?: string []
}

const competidor1: Competidor = {
    nombre: 'Mike'
}

const competidor2: Competidor = {
    nombre: 'Colaete',
    coachs: ['Rafael', 'Guilherme']
}

function imprimeCoach(competidor: Competidor): void {
    const cuantosCoach = competidor.coachs?.length || 0; //La ? aqui es como un if si tiene coach los coge si no poner 0 en vez de undefine
    console.log(cuantosCoach);    
}

imprimeCoach(competidor2);