var http = require('http');
//+++++++++++++++++++++++++++++++++++++++++++++++++++
function dumpReturn(err, theArr){
    if (err){
        throw err;
    }

    for (var i = 0; i < theArr.length; i++) {
        console.log(theArr[i]);
    }
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++
function getHttpRequest(targetUrl, callback) {
    var arrOut = [];

    var req = http.get(targetUrl, function(response){
        response.setEncoding('utf8');
        response.on('data', function(d) {
            arrOut.push(d)
        });
        response.on('end', function() {
            callback(null, arrOut);
        });
    });

    req.on('error', function(e) {
        console.log("Got error: " + e.message);
    });
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++
var theUrl = process.argv[2];
getHttpRequest(theUrl, dumpReturn);
