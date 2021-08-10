// Destructuring con Arrays

const tallas = [40.5, 44, 48, 50];

const [primero] = tallas;
console.log(primero);

// si queremos alguna posicion dentro del array const [ , , , cuarto] = numeros
// si queremos mantener algunos en su posicion const [ primero, ...tercero] = numeros