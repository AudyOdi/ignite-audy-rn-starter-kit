const {pathOr, is} = require('ramda');

// the default flow type version for this boilerplate
const FLOW_TYPE_VERSION = '0.49.1';

// where the version lives under gluegun
const pathToVersion = ['parameters', 'options', 'flow-type-version'];

// accepts the context and returns back the version
const getVersionFromContext = pathOr(FLOW_TYPE_VERSION, pathToVersion);

/**
 * Gets the Flow Type version to use.
 *
 * Attempts to read it from the command line, and if not there, falls back
 * to the version we want for this boilerplate.  For example:
 *
 *   $ ignite new Custom --flow type-version 0.44.1
 *
 * @param {*} context - The gluegun context.
 */
const getFlowTypeVersion = (context = {}) => {
  const version = getVersionFromContext(context);
  return is(String, version) ? version : FLOW_TYPE_VERSION;
};

module.exports = {
  FLOW_TYPE_VERSION,
  getFlowTypeVersion
};
