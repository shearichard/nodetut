//****************************************************************
var http = require('http');
//+++++++++++++++++++++++++++++++++++++++++++++++++++
function dumpReturn(err, theArr){
    if (err){
        throw err;
    }

    var strOut = "";
    for (var i = 0; i < theArr.length; i++) {
        strOut = strOut.concat(theArr[i]);
    }
    console.log(strOut);
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
        response.on('error', function(err) {
            callback(err);
        });
    });
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++
getHttpRequest(process.argv[2], dumpReturn);
getHttpRequest(process.argv[3], dumpReturn);
getHttpRequest(process.argv[4], dumpReturn);
