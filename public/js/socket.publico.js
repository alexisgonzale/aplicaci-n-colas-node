// Comando para establecer la conexión
var socket = io();

socket.on('estadoActual', function(data) {
    actualizaHTML(data.ultmos4);
});

socket.on('ultmos4', function(data) {

    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();

    actualizaHTML(data.ultmos4);
});


function actualizaHTML( ultmos4 ) {
   
    for (let i = 1; i < ultmos4.length+1; i++) {
        $('#lblTicket'+i).text('Ticket ' + ultmos4[i-1].numero);
        $('#lblEscritorio'+i).text('Escritorio ' + ultmos4[i-1].escritorio);
    }
}