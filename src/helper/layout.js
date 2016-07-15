/**
 * Layout helper
 * @type Object
 */
module.exports = {
  /**
   * Check if all needed parameters exists (add if not)
   * @param  array params
   * @return array
   */
  verifyParams: function (params) {
    // Get Application config
    var applicationConfig = require('../config/application.config');
    var layoutVariables = applicationConfig.layout.variables;
    for (var layoutKey in layoutVariables) {
      if (typeof params[layoutKey] === 'undefined') {
        params[layoutKey] = layoutVariables[layoutKey];
      }
    }
    return params;
  }
}
