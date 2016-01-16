'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('generator-frdmn-bootstrap:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({someOption: true})
      .withPrompts({someAnswer: true})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'assets/css/_example.scss',
      'assets/css/style.scss',
      'assets/js/app.js',
      '.gitignore',
      'package.json',
      'bower.json',
      'gulpfile.js',
      'index.html'
    ]);
  });
});
