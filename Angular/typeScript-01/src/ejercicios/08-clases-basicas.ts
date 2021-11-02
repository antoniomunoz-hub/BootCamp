class PersonaNormal{
    constructor(
        public nombre: string,
        public direccion: string
    ){}
}
 
class Heroe extends PersonaNormal{
    
    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ){
        super(nombreReal, 'New York USA')
    }
}

const ironMan = new Heroe('Iron Man', 42, 'Tony Stark');

console.log(ironMan);