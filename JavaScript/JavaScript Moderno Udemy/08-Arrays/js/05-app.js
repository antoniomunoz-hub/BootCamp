const carritoShoes = [];

const sneakers = {
    marca: 'Gucci',
    modelo: 'Rhyton',
    precio: '790€'
}

const sandals = {
    marca: 'Dsq',
    modelo: 'Icon',
    precio: "180€"
}

const boots = {
    marca: 'Alexander Mcqueen',
    modelo: 'Middle',
    precio: "850€"
}

let resultado;

resultado = [...carritoShoes, sneakers];

console.table(resultado);


// El carritoShoes no es modificado sigue estando vacio la forma declarativa esta relacionada con la programacion funcional 
//.push y este codigo hacen lo mismo