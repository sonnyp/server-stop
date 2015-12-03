'use strict'

/* global describe, it, beforeEach, afterEach */

// var assert = require('assert')
var net = require('net')
var serverStop = require('./index')

var PORT = 6767

describe('server stop', function () {
  var server
  var client

  beforeEach(function (done) {
    server = net.createServer()
    serverStop(server)
    server.listen(PORT, function () {
      client = net.connect({port: PORT}, done)
    })
  })

  afterEach(function () {
    server = undefined
    client = undefined
  })

  it('disconnects clients', function (done) {
    client.once('close', done)
    server.stop()
  })

  // it('it closes the port', function (done) {
  //   server.stop(function(err) {
  //     if (err) return done(err)
  //     var client2 = net.connect({port: PORT}, function(err) {
  //       assert.equal(err.code, 'ECONNREFUSED')
  //       done()
  //     })
  //   })
  // })

  // it('disconnects all clients and shutdown the server', function (done) {
  //   var count = 0
  //   client.once('offline', function () {
  //     count++
  //     if (count === 2) done()
  //   })
  //   server.once('shutdown', function () {
  //     count++
  //     if (count === 2) done()
  //   })
  //   server.shutdown()
  // })
})
