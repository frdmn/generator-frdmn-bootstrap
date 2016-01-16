'use strict';
var generators = require('yeoman-generator');
var chalk = require('chalk');
var mkdirp = require('mkdirp');
var yosay = require('yosay');
var _s = require('underscore.string');

module.exports = generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the perfect ' + chalk.red('generator-frdmn-bootstrap') + ' generator!'
    ));

    var prompts = [{
      type: 'checkbox',
      name: 'features',
      message: 'What would you like?',
      choices: [{
        name: 'Modernizr',
        value: 'includeModernizr',
        checked: true
      }]
    }];

    this.prompt(prompts, function (answers) {
      var features = answers.features;

      function hasFeature(feat) {
        return features && features.indexOf(feat) !== -1;
      };

      // manually deal with the response, get back and store the results.
      // we change a bit this way of doing to automatically do this in the self.prompt() method.
      this.includeModernizr = hasFeature('includeModernizr');

      done();
    }.bind(this));
  },

  writing: {
    git: function () {
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore'),
        {
          includeModernizr: this.includeModernizr
        }
      );
    },

    gulpfile: function () {
      this.fs.copyTpl(
        this.templatePath('gulpfile.js'),
        this.destinationPath('gulpfile.js'),
        {
          includeModernizr: this.includeModernizr
        }
      );
    },

    packageJSON: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
    },

    bower: function () {

      var bowerJson = {
        name: _s.slugify(this.appname),
        private: true,
        ignore: [
          "node_modules",
          "bower_components"
        ],
        dependencies: {
          "bootstrap-sass": "bootstrap-sass-official#~3.3.6"
        }
      };

      if (this.includeModernizr) {
        bowerJson.dependencies['modernizr'] = '~2.8.1';
      }

      this.fs.writeJSON('bower.json', bowerJson);
    },

    assets: function () {
      this.fs.copyTpl(
        this.templatePath('assets/js/app.js'),
        this.destinationPath('assets/js/app.js')
      );

      this.fs.copyTpl(
        this.templatePath('assets/css/style.scss'),
        this.destinationPath('assets/css/style.scss')
      );

      this.fs.copyTpl(
        this.templatePath('assets/css/_example.scss'),
        this.destinationPath('assets/css/_example.scss')
      );
    },

    indexHTML: function () {
      this.fs.copyTpl(
        this.templatePath('index.html'),
        this.destinationPath('index.html'),
        {
          includeModernizr: this.includeModernizr
        }
      );
    },

    misc: function () {
      mkdirp('assets/images');
      mkdirp('fonts/fonts');
    }
  },

  install: function () {
    this.installDependencies();
  },

  end: function () {
    var completeMsg =
      '\nRun ' +
      chalk.yellow.bold('gulp') +
      ' to compile the assets and complete the setup.';

    this.log(completeMsg);
    return;
  }
});
