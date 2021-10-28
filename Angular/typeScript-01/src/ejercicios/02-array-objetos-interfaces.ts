// Arrays

let habilidades = ['Comunicativo', 'Tenaz', 'Constante', 'Dedicado'];

habilidades.push('Serio');

console.log(habilidades);

//Interfaz

interface SetUp {
    ordenador: string;
    monitor: string;
    soporte: string;
    capacidadDisco: number;
    tablet?: string;
}

//Objetos 

const herramientas: SetUp = {
    ordenador: 'MSI',
    monitor: 'Acer',
    soporte: 'Ikea',
    capacidadDisco: 512
}

herramientas.tablet = 'Ipad';

console.table(herramientas);