# Car UX

[![Build Status](https://travis-ci.org/voorhoede/car-ux.svg?branch=master)](https://travis-ci.org/voorhoede/car-ux)
[![Dependency Status](https://david-dm.org/voorhoede/car-ux.svg?theme=shields.io)](https://david-dm.org/voorhoede/car-ux)
[![devDependency Status](https://david-dm.org/voorhoede/car-ux/dev-status.svg?theme=shields.io)](https://david-dm.org/voorhoede/car-ux#info=devDependencies)

[about project]

[View live](https://voorhoede.github.io/car-ux)

## Getting started

__Clone repository__

This project is hosted as a Voorhoede GIT repository. Clone it:

	$ git clone git@github.com:voorhoede/car-ux.git
	
__Configure vhost__ Car UX

* Copy vhost file from `car-ux.vhost` to your vhost directory.
* Add `local.car-ux.voorhoede.nl` and `distribution.car-ux.voorhoede.nl` to your `/etc/hosts` index file.

Tip: Don't forget to restart your (MAMP) server to load the new configuration files.


__Install dependencies__

This project requires [NodeJS](http://nodejs.org/), NPM (comes with NodeJS) and [SASS](http://sass-lang.com/) to be installed. All other project dependencies can be installed via NPM:

    $ npm install
    
## Architecture

This project uses the common Voorhoede architecture with [Nunjucks](http://jlongster.github.io/nunjucks/) for HTML templating:

	distribution/					<-- auto generated via `grunt deploy` task
	
	source/
		assets/
			fonts/
			images/
			scss/
			style/					<-- base.css & main.css compiled from scss
		modules/
			components/
				component-name/		<-- re-useable block (html,js,css,readme,tests)
			views/
				view-name/			<-- unique view using components
		vendor/						<-- 3rd party libraries
			nunjucks/				<-- templating library used for this project
	
	tasks/
		grunt/
		
	tests/
	
	web/							<-- symlinked to source or distribution
	
Grunt tasks are available to create new views and components or remove them. Use `grunt create-view`, `grunt create-component`, `grunt remove-view`, `grunt remove-component` or simply start the task wizard using just `grunt`.
    
## Environments

The project supports staging in different environments, both on the Voorhoede server and locally.

### Local environment

The `grunt develop` task starts a local webserver which runs on `http://localhost:8888` by default.
The local environment opens with the front-end guide.

### Remote environment

To make the URL's nicer and easier to read the `grunt deploy` task flattens the file structure.
This means the remote environment opens with the `home` view, the front-end guide can be found at `/front-end-guide/`.

## Code quality tools

Quality of JS and CSS is assured using [JSHint](http://www.jshint.com/) and CSSLint. Configuration for these linters are defined in `.jshintrc`. When using WebStorm, make sure the JSHint configuration is used by checking `enable JSHint` and `use config files` in Settings > JavaScript > Code Quality Tools > JSHint.

## Automated tasks

The project comes with a bunch of script tasks which should make life easier. These require [GruntJS](http://gruntjs.com/) to run. You should have the Grunt CLI installed globally:

	$ npm install -g grunt-cli
	
To start the grunt task wizard which walks you through all available grunt tasks in the project, simply run the grunt command in the project directory:

	$ grunt
	