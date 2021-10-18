
// Servido Express
const express = require('express');
const app = express();

// Servidor Sockets
const server = require('http').createServer(app);

// Configuracion del socket server
const io = require('socket.io')(server);

// Desplehgar el directorio publico
app.use(express.static(__dirname + '/public'))

io.on('connection', () => {
    console.log('Cliente Conectado !!');
});

server.listen(8080, ()=>{
    console.log('Server corriendo en puerto :8080');
});