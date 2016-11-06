/**
 * webpack plugins and loaders in separate files
 * *named preconfigurations that can be referenced by filename in config 
 */
const webpack = require('webpack');
function find(path, name) {
  const fn = require(path + '/' + name)
  if(typeof fn !== 'function') {
    throw new Error('Please export config through a function. Export at ' + path + '/' + name + ' is not a function.');
  }
  return fn;
}

module.exports = (base) => {
  if(!base) {
    base = '.';
  }
  return {
    plugin: (name, config) => {
      return find(base + '/plugins', name)(config);
    },
    loader: (name, config) => {
      return find(base + '/loaders', name)(config);
    }
  }
}
