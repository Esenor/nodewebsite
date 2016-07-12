module.exports = {
  scope: '/',
  /**
   * Retourne la route pour l'enregistrer dans l'application
   * @param Application application
   */
  register: function (application) {
    application.get(this.scope + '/', this.execute);
  },
  /**
   * Execute et traite la route lors de son appel
   * @param Request request
   * @param Response response
   */
  execute: function (request, response) {
    response.render('index.twig', {'msg': 'twindex'});
  }
}
