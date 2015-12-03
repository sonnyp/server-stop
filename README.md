server-stop
===========

Close a Node.js server and all connections.

[![build status](https://img.shields.io/travis/sonnyp/server-stop/master.svg?style=flat-square)](https://travis-ci.org/sonnyp/server-stop/branches)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

# Install

`npm install server-stop`

# Usage

```javascript
var net = require('net')
var serverStop = require('server-stop')

var server = net.createServer() // works with any Node.js server
serverStop(server) // exposes a stop method on the server

server.listen(8888) // make sure to call serverStop(server) before listen

server.stop() // closes the server and all connections
```

# Test

```
npm install -g standard
npm test
```

