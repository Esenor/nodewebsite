module.exports = {
  /**
   * Ajoute les controllers à l'application
   * @param array controllers
   * @param Application application
   * @return boolean
   */
  ventilate: function (controllers, application) {
    var allRegistered = true;
    // Pour chaque controller
    for (var controller in controllers) {
      try {
        // On ajoute la controller si le fichier 'controller'.js existe
        require('../controllers/' + controllers[controller] + '.js').register(application);
      } catch (e) {
        allRegistered = false;
        console.log(e);
      }
    }
    return allRegistered;
  }
}
