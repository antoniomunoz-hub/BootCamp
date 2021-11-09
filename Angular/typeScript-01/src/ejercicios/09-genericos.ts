function queTypeSoy<T>(argumento: T){
    return argumento;
}

let soyString = queTypeSoy('Hola Mundo');

let soyNumero = queTypeSoy ( 230 );

let soyArray = queTypeSoy([1, 2, 3, 4]);

let soyExplicito = queTypeSoy<number>(100)
