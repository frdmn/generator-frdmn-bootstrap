# frdmn-bootstrap [![Build Status](https://secure.travis-ci.org/frdmn/generator-frdmn-bootstrap.svg?branch=master)](http://travis-ci.org/frdmn/generator-frdmn-bootstrap) 

> [Yeoman](http://yeoman.io) generator that scaffolds out a front-end web app using [gulp](http://gulpjs.com/) for the build process

![](http://i.imgur.com/H6utoPr.png)

## Features

Please see our [gulpfile](app/templates/gulpfile.js) for up to date information on what we support.

* CSS Autoprefixing
* LiveReload support on file changes
* Uglify (minify) JavScript
* Autoprefix to support last 2 versions of current browsers
* Automagically compile Sass with [libsass](http://libsass.org)
* Map compiled CSS to source stylesheets with source maps
* Awesome image optimization
* Twitter Bootstrap 3.3.6 including example dashboard

*For more information on what this generator can do for you, take a look at the [gulp plugins](app/templates/_package.json) used in our `package.json`.*

## libsass

Keep in mind that libsass is feature-wise not fully compatible with Ruby Sass. Check out [this](http://sass-compatibility.github.io) curated list of incompatibilities to find out which features are missing.

If your favorite feature is missing and you really need Ruby Sass, you can always switch to [gulp-ruby-sass](https://github.com/sindresorhus/gulp-ruby-sass) and update the `styles` task in gulpfile accordingly.

## Getting Started

(Don't want to submit this probably redundant generator to the NPM registry, thats why we link it locally instead for now.)

- Install dependencies: `npm install --global yo gulp bower`
- Install the generator:  
  `git clone https://github.com/frdmn/generator-frdmn-bootstrap /usr/local/src/generator-frdmn-bootstrap`  
  `cd /usr/local/src/generator-frdmn-bootstrap`  
  `npm install`  
  `npm link`  
- Run `yo frdmn-bootstrap` to scaffold your webapp
- Run `gulp dev` to preview and watch for changes
- Run `gulp` to build your webapp for production
- Run `bower install --save <package>` to install frontend dependencies

## Options

_none_

## License

[MIT](LICENSE)
