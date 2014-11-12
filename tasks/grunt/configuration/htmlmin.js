/**
 * Grunt configuration for htmlmin task
 */
function getConfiguration(grunt) {
	'use strict';

	var viewsIndex = grunt.file.readJSON('source/modules/index.json');

	function getFiles(destination){

		var dest = destination || 'distribution';
		var views = {};
		viewsIndex.views.forEach(function(name){
			var path = dest + '/modules/views/' + name + '/' + name + '.html';
			views[path] = path;
		});
		return views;
	}

	return {
		distribution: {
			options: {
				removeComments: true,
				collapseWhitespace: true
			},
			files: getFiles()
		}
	};
}

module.exports = getConfiguration;