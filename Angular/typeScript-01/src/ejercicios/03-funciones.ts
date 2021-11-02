
function sumar (a: number, b: number): number{
    return a + b;
}

const sumarFlecha = (a: number, b: number): number =>{
    return a + b;
}

function multiplicar ( numero: number, numero2?: number, numeroFijo = 6): number {
    return numero * numero2 + numeroFijo;
}

const resultado = sumarFlecha( 9, 50);

const resultadoMultiplicar = multiplicar (8, 3)

console.log(resultadoMultiplicar);

//Buena practica el poner el tipo en los argumentos para quien lo lea por nosotros recordarmos esto no es Js es Ts


interface Persona {
    nombre: string;
    años: number
    porcentajeSalud: number
}

const antonio : Persona = {
    nombre: 'Antonio',
    años: 32,
    porcentajeSalud: 45
}

function curar(personaje : Persona  , curarX:number): void {
    personaje.porcentajeSalud += curarX;

    console.log(personaje);
}
//Con void la funcion no retorna nada 

curar(antonio, 30);

