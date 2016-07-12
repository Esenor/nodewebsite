module.exports = {
  scope: '',
  /**
   * Retourne la route pour l'enregistrer dans l'application
   * @param Application application
   */
  register: function (application) {
    application.get(this.scope + '/', this.indexRoute);
    application.get(this.scope + '/hello/:name', this.helloRoute);
  },
  /**
   * Execute et traite la route lors de son appel
   * @param Request request
   * @param Response response
   */
  indexRoute: function (request, response) {
    response.render('index/index.twig', {'msg': 'twindex.'});
  },
  /**
   * Execute et traite la route lors de son appel
   * @param Request request
   * @param Response response
   */
  helloRoute: function (request, response) {
    var res = 'Hello ' + request.params.name;
    response.render('index/index.twig', {'msg': res});
  }
}
