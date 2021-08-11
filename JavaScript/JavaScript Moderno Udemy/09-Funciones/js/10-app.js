//Arrow Function en objetos 

const rolle = {
    saludar:(acction)=>{
        console.log(`Saludan mediante ${acction}`);
    },
    pensar: (ataque) =>{
        console.log(`derribando ${ataque}`);
    },
  puntuar: (puntos) =>{
        console.log(`puntuando ${puntos} `);
    },
  posicion: (posicion)=> {
        console.log(`Se encuentra en ${posicion}`);
    },
    sumision: function(nombre){
        console.log(`Ha finalizado de ${nombre}`);
    }    
}

rolle.saludar('Choque puños');
rolle.pensar('Agarra solapa');
rolle.puntuar(3);
rolle.posicion('estabilizacion');
rolle.sumision('armlock');


