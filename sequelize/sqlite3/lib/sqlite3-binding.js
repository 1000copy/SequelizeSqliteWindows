// var binary = require('node-pre-gyp');
// var path = require('path');
// var binding_path = binary.find(path.resolve(path.join(__dirname,'../package.json')));
var binding = require('./node_sqlite3.node');
module.exports = exports = binding;
