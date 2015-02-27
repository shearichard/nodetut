var fs = require('fs');
var lc = 0;

//function cntlines(callback, path2file) {
function cntlines(callback) {
    //fs.readfile(path2file, function doneReading(err, filecontent) {
    fs.readFile(process.argv[2], function doneReading(err, filecontent) {
        if (err){
            throw err;
        }else{
            var arr = filecontent.toString().split('\n');;
            lc = arr.length - 1;
            callback();
        }

    })
}

function loglinecount() {
    console.log(lc);
}

cntlines(loglinecount);
//cntlines(loglinecount, process.argv[2]);
