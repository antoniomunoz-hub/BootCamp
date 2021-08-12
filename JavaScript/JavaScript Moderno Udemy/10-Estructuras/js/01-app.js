
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

