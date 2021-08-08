const deporte = 'Brazilian JiuJitsu';
const estilo= 'Arte Marcial';

console.log(deporte.concat(estilo)); // Tambien podemos cocatenar deporte + precio
console.log(deporte.concat('Arte Suave'));

console.log("el " + estilo + deporte + " es el mejor metodo de defensa que existe");

//Strings Templates

console.log(`El ${deporte} es un ${estilo} con mas de 100 años `);