/**
 * Render the layout to string output
 * @type Object
 */
module.exports = {
  /**
   * Render the layout selected with all the parameters needed
   * @param  string path
   * @param  array params
   * @return string
   */
  render: function (path, params) {
    // Add required params if not exist
    params = require('../helper/layout.js').verifyParams(params);
    var swig  = require('swig');
    var template = swig.compileFile('./src/views/' + path + '.html');
    // Build the layout
    var output = template(params);
    return output;
  }
}
