var express = require('express');
var expressLess = require('express-less');
var twig = require('twig');
var router = require('./core/router.js');
var applicationConfig = require('./config/application.config.js')
var application = express();
router.ventilate(applicationConfig.controllers, application);
application.use(express.static('public'));
application.use('/styles', expressLess(__dirname + '/less'))
application.set('twig options', {strict_variable: false});
application.listen(80, function () {
  console.log('Starting server trynode');
});
