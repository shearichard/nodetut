Some notes about how I setup the environment in use:

I already had `virtuanlenvmanager` installed so I decided to use `nodeenv` (https://pypi.python.org/pypi/nodeenv)

I created a virtenv called `nodenev` and then :

`pip install nodeenv`

I then (with `nodeenv` activated) executed 

`nodeenv --node=0.10.31 nenv`

(the choice of version was pretty arbitary and probably ill-informed).

Which, after a delay of some minutes, resulted in :

```
(nodeenv)rshea@jaffa:~/dev/nodetut$ nodeenv --node=0.10.31 nenv
 * Install node (0.10.31) ... done.
```
Then I installed a 'nodeschool' module as follows:
```
npm install -g learnyounode
```
