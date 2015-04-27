Some notes about how I setup the environment in use:

I already had `virtuanlenvmanager` installed so I decided to use `nodeenv` (https://pypi.python.org/pypi/nodeenv)

I created a virtenv called `nodenev` and then :

`pip install nodeenv`

I then (with `nodeenv` activated) executed 

`nodeenv --node=0.10.31 nenv`

(the choice of version was pretty arbitary and probably ill-informed).

Which, after a delay of some minutes, resulted in :

`
(nodeenv)rshea@jaffa:~/dev/nodetut$ nodeenv --node=0.10.31 nenv
 * Install node (0.10.31) ... done.
`

At a later date I realised that I needed a more recent release of Node so I did the following :

`
(nodeenv)rshea@jaffa:~/dev/nodetut$ nodeenv --node=0.12.0 nenv12
`

And so produced an alternate "inner" virtenv `nenv12` .

To activate the new "inner" virtenv I executed : 

`
source nenv/bin/activate
`

Then I installed a 'nodeschool' module as follows:

`npm install -g learnyounode`

And then executed

`learnyounode`


====
test-anything
----
Execute 
`test-anything`

I'm just going to repeat the learnyounode instructions here because they're not included in the test-anything on screen text.

» To print these instructions again, run: learnyounode print
» To execute your program in a test environment, run: learnyounode run program.js
» To verify your program, run: learnyounode verify program.js
» For help run: learnyounode help

