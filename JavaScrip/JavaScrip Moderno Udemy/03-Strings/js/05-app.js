const marca = 'Nike Air';

console.log(marca);

// Reemplazamos parte del string

console.log(marca.replace('Air', 'Jordan'));

// Cortamos el string

console.log(marca.slice(0, 5));
console.log(marca.slice(6));

// Alternativa slice subString la diferencia es que si lo tratas de engañar lo cambia automaticamente

const persona = "Antonio";
console.log(persona.substring(0, 1));
console.log(persona.charAt(0));