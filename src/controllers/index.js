/**
 * Index controller
 * @type Object
 */
module.exports = {
  /**
   * Controller scope for routing
   * @type String
   */
  scope: '',
  /**
   * Register methode, call when the server start
   * @param  Application application
   */
  register: function (application) {
    application.get(this.scope + '/', this.indexRoute);
  },
  /**
   * Index:Index route
   * @param  Request request
   * @param  Response response
   */
  indexRoute: function (request, response) {
    // Get the renderer
    var renderer = request.app.get('renderer');
    // Layout to render
    var viewPath = 'index/index';
    // Parameters to put inside the layout
    var viewParams = {msg: 'index', page_header_title: 'ok'};
    // Rendering the layout
    var viewOutput = renderer.render(viewPath, viewParams);
    // Send the response
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(viewOutput);
  }
}
