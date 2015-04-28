//**************************************************************

//    function myCb(){
//        process.nextTick(function () {
//            t.pass('callback called')
//            cntIterations += 1
//        })
//    }

//t.plan(intendedIterations)

//**********************************************************88888
//What follows it the "correct" version which is shown after
//you've verified your own version
/*
   var test = require('tape')
   var repeatCallback = require(process.argv[2])

   test('repeatCallback', function (t) {
     t.plan(4)
     repeatCallback(4, function () {
       t.pass('callback called')
     })
   })
*/
var test = require('tape')

var repeatCallback = require(process.argv[2])

test('testing callback counts', function (t) {
    var intendedIterations = 10 
    var cntIterations = 0
    function myCb(){
        t.pass('callback called')
        cntIterations += 1
    }
    t.plan(intendedIterations)
    repeatCallback(intendedIterations, myCb)
    t.end()
    console.log(intendedIterations)
    console.log(cntIterations)
    t.equal(intendedIterations, cntIterations, "Callback should be called as many times as second argument to repeatCallback")
})
