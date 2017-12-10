'use strict';
var path = require('path');
var through = require('through');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var File = gutil.File;

module.exports = function (fileName, joinCwd) {
  if (!fileName) {
    throw new PluginError('gulp-json-concat-with-path', 'Missing fileName option.');
  }

  var data = {};
  var firstFile = null;

  function bufferContents(file) {
    if (!firstFile) {
      firstFile = file;
    }

    if (file.isNull()) {
      return;
    }
    if (file.isStream()) {
      return this.emit('error', new PluginError('gulp-json-concat-with-path', 'Streaming not supported.'));
    }
    
    var key = joinCwd ? path.relative(path.join(file.cwd,joinCwd),file.path) : file.relative;
    data[key] = JSON.parse(file.contents.toString());
  }

  function endStream() {
    var filePath = path.join(firstFile.base, fileName);
    var file = new File({
      cwd: firstFile.cwd,
      base: firstFile.base,
      path: filePath,
      contents: new Buffer(JSON.stringify(data))
    });

    this.emit('data', file);
    this.emit('end');
  }

  return through(bufferContents, endStream);
};
