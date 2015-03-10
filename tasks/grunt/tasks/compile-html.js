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
			var webhookUploads = 'http://car-ux.webhook.org';

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

				var pathToAssets = compiler.pathToAssets;
				var hrefPrefix = compiler.hrefPrefix;
				if(mode !== 'development'){
					//pathToAssets = 'assets/';
					//hrefPrefix = '/car-ux';
				}

				var html = template.render({
                    'project': project,
					'webRoot': webRoot,
					'pathToAssets': pathToAssets,
					'pathToUploads': webhookUploads,
					'hrefPrefix': hrefPrefix,
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

                var introFilename = viewsDir + name + '/intro.md';
                var intro = file.exists(introFilename) ? file.read(introFilename) : '';
                intro = marked(intro);

				var pathToAssets = compiler.pathToAssets;
				var hrefPrefix = compiler.hrefPrefix;
				if(mode !== 'development'){
					//pathToAssets = 'assets/';
					//hrefPrefix = '/car-ux';
				}

				var filenameJson = 'source/modules/views/' + name + '/' + name + '.json';
				var item = grunt.file.exists(filenameJson) ? grunt.file.readJSON(filenameJson) : {};
				item.pathToUploads = webhookUploads;
				var html = template.render({
					'webRoot': webRoot,
					'name': name,
					'project': project,
					'pathToAssets': pathToAssets,
					'pathToUploads': webhookUploads,
					'hrefPrefix': hrefPrefix,
					'pathToGuide': './',
					'pathToStubs': webRoot + 'stubs/',
					'mode': mode,
                    'intro': intro,
                    'item': item

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
