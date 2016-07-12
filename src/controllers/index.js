module.exports = {
  scope: '',
  /**
   * Retourne la route pour l'enregistrer dans l'application
   * @param Application application
   */
  register: function (application) {
    application.get(this.scope + '/', this.indexRoute);
  },
  /**
   * Execute et traite la route lors de son appel
   * @param Request request
   * @param Response response
   */
  indexRoute: function (request, response) {
    var renderer = request.app.get('renderer');
    var viewPath = 'index/index';
    var viewParams = {msg: 'index'};
    var viewOutput = renderer.render(viewPath, viewParams);
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(viewOutput);
  }
}
