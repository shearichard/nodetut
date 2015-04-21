var http = require('http');
var url = require('url');
//  /api/parsetime?iso=2013-08-10T12:10:15.474Z
//  /api/unixtime?iso=2013-08-10T12:10:15.474Z
var server = http.createServer(function (req, res) {
    var theUrl = url.parse(req.url, true)
    if (theUrl.pathname == "/api/parsetime"){
        var theDateTime = new Date(theUrl.query.iso);
        var retObj = {  "hour": theDateTime.getHours(),
                        "minute": theDateTime.getMinutes(),
                        "second": theDateTime.getSeconds()}
        var retJSON = JSON.stringify(retObj);
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(retJSON);
    }
    if (theUrl.pathname == "/api/unixtime"){
        var theDateTime = new Date(theUrl.query.iso);
        var retObj = {  "unixtime": theDateTime.valueOf() }
        var retJSON = JSON.stringify(retObj);
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(retJSON);
    }
});

server.listen(process.argv[2])

