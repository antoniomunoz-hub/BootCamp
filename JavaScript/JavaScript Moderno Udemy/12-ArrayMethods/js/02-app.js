const deportes = ['Halterofilia', 'Brazilian Jiu Jitsu', 'Grappling', 'Wrestling', 'MMA', 'Sambo', 'Boxeo'];

const equipamiento = [
    {nombre: 'Kimono', deporte: 'Sambo'},
    {nombre: 'Gi', deporte: 'Brazilian Jiu Jitsu'},
    {nombre: 'Compressor', deporte: 'Grappling'},
    {nombre: 'Peto', deporte: 'Wrestling'},
    {nombre: 'Guantillas', deporte: 'MMA'},
    {nombre: 'Guantes', deporte: 'Boxeo'},
    {nombre: 'Zapatillas', deporte: 'Halterofilia'}
]

deportes.forEach((deporte, i) =>{
    if ( deporte === 'Sambo'){
        console.log(`Antonio practica ${deporte}, con indice ${i}`);
    }
})

// Encontrar el indice de Grappling

const indice = deportes.findIndex(deporte => deporte === 'Grappling');
console.log(indice);

// Encontrar un indice de array de objetos

const indiceObjetct = equipamiento.findIndex (producto => producto.deporte === 'Boxeo');
console.log(indiceObjetct);