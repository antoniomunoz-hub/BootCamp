 export interface Producto{
    desc: string;
    precio: number;
}

const telefono : Producto ={
    desc: 'Iphone 13',
    precio: 930
}

const tablet : Producto ={
    desc: 'Ipad Pro',
    precio: 650
}

export function calcularIVA(productos: Producto[] ):number{
    let total = 0;

    productos.forEach(({precio}) => {
        total += precio
    })
    return total * 0.21;
}

const articulos = [telefono , tablet];

const iva = calcularIVA(articulos)

console.log('IVA ', iva);
