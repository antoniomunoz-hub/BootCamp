const diaHoy = Date();

let valor;

valor = diaHoy.getFullYear();// nos trae el año actual
valor = diaHoy.getMonth();// nos trae el mes en el que estamos
valor = diaHoy.getMinutes();// en que minuto estamos
valor = diaHoy.getHours();// en que hora estamos
valor = diaHoy.getTime();// los mili segundos que han pasado desde el 1-1-1970

// Hay muchas mas valores disponibles 


console.log(valor);