var express = require('express');
var expressLess = require('express-less');
var router = require('./core/router.js');
var renderer = require('./core/renderer');
var applicationConfig = require('./config/application.config.js')
// New express application
var application = express();
// Config application (public folder, less preprocessor, ...)
application.use(express.static('public'));
application.use('/styles', expressLess(__dirname + '/less'));
application.set('renderer', renderer);
// Register all controller in application.config
router.ventilate(applicationConfig.controllers, application);
// Starting server
application.listen(80, function () {
  console.log('Starting server on 80');
});
