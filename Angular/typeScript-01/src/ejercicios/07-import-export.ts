 
import { Producto, calcularIVA} from './06-desestruccturacion-funcion';

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 200
    },
    {
        desc: 'Telefono 2',
        precio: 250
    },
];

const iva = calcularIVA( carritoCompras);

console.log('Iva', iva);