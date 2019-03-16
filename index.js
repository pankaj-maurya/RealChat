var express = require('express');
var socket = require('socket.io');
// App Setup
var app = express();
// Setup server
var server = app.listen(4000,function(){
    console.log('Server is up. listening on port 4000');
})

// Static files
app.use(express.static('pages'));

// Socket Setup
var io = socket(server);

io.on('connection',function(socket){

    socket.on('chat',function(data){
        io.sockets.emit('chat',data);
    });

    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data);
    })
});