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
    var renderer = request.app.get('renderer');
    var viewPath = 'index/index';
    var viewParams = {msg: 'index'};
    var viewOutput = renderer.render(viewPath, viewParams);
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(viewOutput);
  },
  /**
   * Execute et traite la route lors de son appel
   * @param Request request
   * @param Response response
   */
  helloRoute: function (request, response) {
    var renderer = request.app.get('renderer');
    var viewPath = 'index/hello';
    var viewParams = {msg: 'hello ' + request.params.name};
    var viewOutput = renderer.render(viewPath, viewParams);
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(viewOutput);
  }
}
