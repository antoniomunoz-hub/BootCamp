const reproductor = {
    reproducir: function(id){
        console.log(`Reproducionedo Cancion con el id ${id}`);
    },
    pausar: function (){
        console.log('pausando..');
    },
    borrar: function (){
        console.log('Borrando cancion');
    },
    playList: function(cancion){
        console.log(`En esta playList encontramos la cancion ${cancion}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Repdoruciendo la playList ${nombre}`);
    }
    
}
reproductor.reproducir(132);
reproductor.pausar();
reproductor.playList("viendo el techo");
reproductor.reproducirPlaylist("Dale Mambow")


reproductor.borrar()