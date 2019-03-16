var socket = io.connect('http://localhost:4000');

var yourIdentity = document.getElementById('yourIdentity');
var message = document.getElementById('message');
var send = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');

send.addEventListener('click',function(){
    socket.emit('chat',{
        message:message.value,
        yourIdentity:yourIdentity.value
    });
})

message.addEventListener('keypress',function(){
    socket.emit('typing', yourIdentity.value);
})

socket.on('chat',function(data){
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>'+ data.yourIdentity +' : </strong>'+data.message+'</p>';
});

socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>'+ data + ' is typing ...</em></p>';
})