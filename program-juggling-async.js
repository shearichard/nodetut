//****************************************************************
var http = require('http');

var masterArray = new Array(); 
var endPointsSeen = 0;
//+++++++++++++++++++++++++++++++++++++++++++++++++++
function dumpReturn(err, theArr, srcId){
    if (err){
        throw err;
    }

    var strOut = "";
    for (var i = 0; i < theArr.length; i++) {
        strOut = strOut.concat(theArr[i]);
    }
    masterArray[srcId] = strOut
    endPointsSeen += 1;

    if (endPointsSeen == 3){
        for (var i = 0; i < endPointsSeen; i++) {
            console.log(masterArray[i]);
        }
    }
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++
function getHttpRequest(srcId, targetUrl, callback) {
    var arrOut = [];

    var req = http.get(targetUrl, function(response){
        response.setEncoding('utf8');
        response.on('data', function(d) {
            arrOut.push(d)
        });
        response.on('end', function() {
            callback(null, arrOut, srcId);
        });
        response.on('error', function(err) {
            callback(err);
        });
    });
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++
getHttpRequest(0, process.argv[2], dumpReturn);
getHttpRequest(1, process.argv[3], dumpReturn);
getHttpRequest(2, process.argv[4], dumpReturn);
