var compiler = require('../utilities/html-compiler');
var marked = require('marked');						// https://github.com/chjj/marked

module.exports = function (grunt) {
	'use strict';
	grunt.registerTask(
		'compile-html',
		'Compile all views, components for distribution.',
		/**
		 * ...
		 */
		function (mode) {

			mode = mode || 'distribution';
			var webRoot = '../../../';

			var pkg = grunt.config('pkg');
            var file = grunt.file;
			var project = {
				title: pkg.title,
				version: pkg.version
			};

			function compileComponentHtml (name) {
				var filename = name + '/_' + name + '.html';
				var template = compiler.getTemplate('components/' + filename);
				var componentsDir = compiler.getComponentsDir();
				var html = template.render({
                    'project': project,
					'webRoot': webRoot,
					'pathToAssets': compiler.pathToAssets,
					'pathToStubs': webRoot + 'stubs/',
					'mode': mode
				});
				grunt.file.write(componentsDir + filename, html);
				grunt.log.writeln('Compiled component to '+ componentsDir + filename);
				return html;
			}

			function compileViewHtml (name) {
				var filename = name + '/' + name + '.html';
				var template = compiler.getTemplate('views/' + filename);
				var viewsDir = compiler.getViewsDir();
				var html = template.render({
					'webRoot': webRoot,
					'name': name,
					'project': project,
					'pathToAssets': compiler.pathToAssets,
					'pathToGuide': './',
					'pathToStubs': webRoot + 'stubs/',
					'mode': mode
				});
				grunt.file.write(viewsDir + filename, html);
				grunt.log.writeln('Compiled view to '+ viewsDir + filename);
				return html;
			}

			if(mode === 'development'){
				compiler.setBaseDir('web');
                compiler.getComponents().forEach(compileComponentHtml);
			} else {
				compiler.getComponents().forEach(compileComponentHtml);
			}
			compiler.getViews().forEach(compileViewHtml);
			compileViewHtml('_style-guide');
		}
	);
};
