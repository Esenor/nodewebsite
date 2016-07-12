module.exports = {
  /**
   * [render description]
   * @param  {[type]} path   [description]
   * @param  {[type]} params [description]
   * @return {[type]}        [description]
   */
  render: function (path, params) {
    var swig  = require('swig');
    var template = swig.compileFile('./src/views/' + path + '.html');
    var output = template(params);
    return output;
  }
}
