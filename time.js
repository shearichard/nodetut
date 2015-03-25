var net = require('net');

var d = new Date();

var strftime = require('strftime')

var server = net.createServer(function (socket) {
    var t = strftime('%Y-%m-%d %H:%M');
    socket.end(t + '\n');
})

server.listen(process.argv[2])
