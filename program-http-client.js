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
function httpGetHandler(response, callback){
    var arrOut = [];

    response.on('data', function(d) {
        arrOut.push(d)
    });

    response.on('end', function() {
        callback(null, arrOut);
    });

    response.on('error', function(err) {
        callback(err);
    });
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++
function getHttpRequest(targetUrl, callback) {
    http.get(targetUrl, httpGetHandler(response, callback));
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++
var theUrl = process.argv[2];

getHttpRequest(theUrl, dumpReturn);
