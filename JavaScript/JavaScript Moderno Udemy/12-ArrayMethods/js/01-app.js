// Comprobar si un valor existe en un array

const muebles = [ 'escritorio', 'comoda', 'armario', 'zapatero'];

const defensas = [
    {nombre: 'pepe', dorsal: 6},
    {nombre: 'varane', dorsal: 5},
    {nombre: 'pique', dorsal: 14},
    {nombre: 'sergioBusqets', dorsal:4}
]

muebles.forEach( mueble =>{
    if( mueble === 'escritorio'){
    console.log('Tengo un escritorio')
}
});

const resultado = muebles.includes('armario');
console.log(resultado);

// Para array de objetos utlizamos .some

const convocado = defensas.some ( (jugador) => {
    return jugador.nombre === 'pepe'

})

console.log(convocado);