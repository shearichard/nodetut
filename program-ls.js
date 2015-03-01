var fs = require('fs');
var path = require('path');

var thePath = process.argv[2];
var theSuffix = process.argv[3];

function filteredls() {
    fs.readdir(thePath, function reportFile(err, files) {
        if (err){
            throw err;
        }else{
            for (var i = 0; i < files.length; i++) {
                thisPath = path.parse(files[i]);
                if (thisPath.ext == '.' + theSuffix){
                    console.log(thisPath.base);
                }
            }
        }

    })
}

filteredls();
