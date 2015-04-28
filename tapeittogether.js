//Once I got to the point of verifying this I discovered that 
//I wasn't meant to have written the function fancify below
//instead I was meant to pass in the path to a metatest.js
//however I'm dammed if I'm throwing away my code to this is 
//my version !

var test = require('tape')
var fancify = require(process.argv[2])

//function fancify(strIn, blnAllCaps, strMiddleChar) {
//    //
//    //The arguments : blnAllCaps, strMiddleChar are optional
//    //
//    blnAllCaps = blnAllCaps || false;
//    strMiddleChar = strMiddleChar || "*";
//
//    var preAndSuffix = "~" + strMiddleChar + "~"
//    if (blnAllCaps){
//        strIn = strIn.toUpperCase()
//    }
//    var strOut = preAndSuffix + strIn + preAndSuffix
//
//    return strOut
//}

test('fancify does some weird things', function (t) {
    t.equal(fancify('Hello'),               '~*~Hello~*~', 'The input string should be output prefixed and suffixed by ~*~')
    t.equal(fancify('Hello', true),         '~*~HELLO~*~', 'The input string should be uppercased and output prefixed and suffixed by ~*~')
    t.equal(fancify('Hello', false),        '~*~Hello~*~', 'The input string should be output prefixed and suffixed by ~*~')
    t.equal(fancify('Hello', true , '1'),   '~1~HELLO~1~', 'The input string should be uppercased and output prefixed and suffixed by ~1~')
    t.equal(fancify('Hello', false, '2'),   '~2~Hello~2~', 'The input string should be output prefixed and suffixed by ~2~')
    t.end()
})
//
//
//console.log(fancify("bananas"))
//console.log(fancify("bananas", true))
//console.log(fancify("bananas", false))
//console.log(fancify("bananas", true, "1"))
//console.log(fancify("bananas", false, "2"))
