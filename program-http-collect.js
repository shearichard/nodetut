//****************************************************************
// For interest purposes this is the official version of the
// of the HTTP COLLECT exercise
//
//
//  var http = require('http')
//  var bl = require('bl')
//
//  http.get(process.argv[2], function (response) {
//    response.pipe(bl(function (err, data) {
//      if (err)
//        return console.error(err)
//      data = data.toString()
//      console.log(data.length)
//      console.log(data)
//    }))
//  })
//****************************************************************
var http = require('http');
//+++++++++++++++++++++++++++++++++++++++++++++++++++
function dumpReturn(err, theArr){
    if (err){
        throw err;
    }

    var strOut = "";
    var cntOut = 0;
    for (var i = 0; i < theArr.length; i++) {
        cntOut += theArr[i].length;
        strOut = strOut.concat(theArr[i]);
    }
    console.log(cntOut);
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
var theUrl = process.argv[2];
getHttpRequest(theUrl, dumpReturn);
