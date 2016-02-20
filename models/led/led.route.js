;(function () {
  'use strict'
  var express = require('express')
  var PythonShell = require('python-shell')
  var router  = express.Router()
  var info = []
  router.get('/click', function (req, res, next) {

      console.log('finished')
      console.log(info)
      res.send(info)

    console.log("test")
  });

  router.post('/test', function (req, res, next) {
    console.log(req.body);
    info.push(req.body)

  })

  module.exports = router
})()
