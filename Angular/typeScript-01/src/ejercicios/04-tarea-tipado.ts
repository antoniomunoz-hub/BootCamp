//Crear una interfaz para el objeto SuperHeroe


interface SuperHeroe{
    nombre: string,
    edad: number,
    // direccion:{
    //     calle: string,
    //     pais: string,
    //     ciudad: string
    // }, no es usual poner objetos anidados dentro de otros aqui la alternativa
    direccion: Direccion,
    mostrarDireccion:() => void;
}

interface Direccion{
    calle: string,
    pais: string,
    ciudad: string
}


const superHeroe : SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion:{
        calle:'Main St',
        pais:'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){
        return this.nombre + `, ` + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);