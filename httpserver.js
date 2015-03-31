var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req, res) {
    var rd_strm = fs.createReadStream(process.argv[3]);
    rd_strm.pipe(res)
})

server.listen(process.argv[2])
