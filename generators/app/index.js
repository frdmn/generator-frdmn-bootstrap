'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');

module.exports = yeoman.generators.Base.extend({
  // prompting: function () {
  //   var done = this.async();

  //   // Have Yeoman greet the user.
  //   this.log(yosay(
  //     'Welcome to the perfect ' + chalk.red('generator-frdmn-bootstrap') + ' generator!'
  //   ));

  //   var prompts = [{
  //     type: 'confirm',
  //     name: 'someOption',
  //     message: 'Would you like to enable this option?',
  //     default: true
  //   }];

  //   this.prompt(prompts, function (props) {
  //     this.props = props;
  //     // To access props later use this.props.someOption;

  //     done();
  //   }.bind(this));
  // },

  writing: {
    git: function () {
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
    },

    gulpfile: function () {
      this.fs.copyTpl(
        this.templatePath('gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );
    },

    packageJSON: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
    },

    bower: function () {
      this.fs.copyTpl(
        this.templatePath('bower.json'),
        this.destinationPath('bower.json')
      );
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
        this.destinationPath('index.html')
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
