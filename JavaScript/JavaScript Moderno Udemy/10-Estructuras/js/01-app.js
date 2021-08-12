
const sueldo = 1600;

if(sueldo == 1500){
    console.log('Tienes un sueldo acepable'); //Si es igual
}else if (sueldo < 1450){
    console.log('Tienes que cobrar mas'); //Si es menor
}else if (sueldo > 1550){
    console.log('cobras muy bien');//Si es mayor
}

const dinero = 100;
const totalPagar= 500;
const tarjeta = true;
const tarjetaCredito = false;

if(dinero >= totalPagar){
    console.log('Pago en efectivo');
}else if(tarjeta){
    console.log('Pago con tarjeta de debito');
}else if(tarjetaCredito){
    console.log('Pago con el credito de mi tarjeta');
}else{
    console.log('No puedo pagarlos');
}


const años = 16;
const minimoCotizazion = 15;
const añosPorCotizar = minimoCotizazion-años;


if(años >= minimoCotizazion){
    console.log('tienes para la jubulacion');
}else{
    console.log(`Necesitas ${añosPorCotizar} para llegar al minimo de la jubilacion`);
}

const metodoDePago = 'efectivo';

switch(metodoDePago){
    case 'efectivo':
        console.log('Pago realizado en efectivo');
    break;
    case 'credito':
        console.log('Pagaste con tarjeta de credito');
    break;
    default:
        console.log('Puedes intentar alguno de los metodos de pago requeridos');
    break;
}

const cliente = true;
const puedePagar = true;

if(cliente && puedePagar){
    console.log('Si puedes compra');
}else if(!cliente){
    console.log('Resgistrate como cliente');
}else if(!puedePagar){
    console.log('Dinero insuficiente');
}
else if(!puedePagar && !cliente){
    console.log('No no puedes comprar');
}

const gastos = 850;
const ingresos = 1500;
const ingresosExtra = 450;
const resto = (ingresosExtra + ingresos) - sueldo;

if(resto < gastos || ingresos < gastos){
    console.log('No llegas a fin de mes');
}else{
    console.log('Fondos insuficientes ');
}

const puntuacion = 450;

function revisarPuntuacon(){
    if(puntuacion > 400){
        console.log('Excelente');
    }
    if(puntuacion > 300){
        console.log('No esta mal enhorabuena');
    }
}

revisarPuntuacon();

const autentificacion = false;
const logeado = true;
const efectivo2 = 300;
const credito2 = 400;
const disponible2 = efectivo2 + credito2;
const totalPagar2 = 600; 

if(efectivo2 > totalPagar2 || credito2 > totalPagar2 || disponible2 > totalPagar2){
    if(efectivo2 > totalPagar2){
        console.log('Si pagaste con efectivo');
    } else {
        console.log('Otra forma de pago');
    }
} else {
    console.log('Fondos Insuficientes');
}