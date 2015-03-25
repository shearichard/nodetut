var net = require('net');

var d = new Date();

var strftime = require('strftime')

//var server = net.createServer(function (socket) {
//    socket.on('data', function(data){
//        console.log(strftime('%Y-%m-%d %H:%M'))
//    });
//})
var server = net.createServer(function (socket) {
    var t = strftime('%Y-%m-%d %H:%M')
    console.log(t);
    socket.end(t);
})

server.listen(process.argv[2])
