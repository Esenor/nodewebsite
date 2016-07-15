/**
 * Routing methods to register route in application
 * @type Object
 */
module.exports = {
  /**
   * Register all controllers if they are in application.config
   * @param  string controllers
   * @param  Application application
   * @return boolean
   */
  ventilate: function (controllers, application) {
    var allRegistered = true;
    for (var controller in controllers) {
      try {
        require('../controllers/' + controllers[controller] + '.js').register(application);
      } catch (e) {
        allRegistered = false;
        console.log(e);
      }
    }
    return allRegistered;
  }
}
