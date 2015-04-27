//At least in my experience when providing the argv[2] 
//command line argument you need to provide it as ./metatest.js
//just providing metatest.js will not do it
var assert = require('assert')
var isCoolNumber = require(process.argv[2])
assert.strictEqual(isCoolNumber(42), true, '42 really is a cool number')

