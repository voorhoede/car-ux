/**
 * Grunt configuration for concat task
 */
function getConfiguration(grunt) {
	'use strict';
	var scriptIndex = grunt.file.readJSON('source/assets/scripts.json');

	function getFiles(destination){
		var files = {};
		files[destination + '/assets/scripts/main.js'] = (function(){
			var sources = [];
			// Vendor first!
			scriptIndex.vendor.forEach(function(name){
				sources.push('source/vendor/'+name+'.js');
			});
			scriptIndex.common.forEach(function(name){
				// Don't include the debug script on development
				if (destination === 'web' && name === 'debug') {
					return;
				} else {
					sources.push('source/assets/scripts/'+name+'.js');
				}
			});
			scriptIndex.components.forEach(function(name){
				sources.push('source/modules/components/'+name+'/_'+name+'.js');
			});
			scriptIndex.views.forEach(function(name){
				sources.push('source/modules/views/'+name+'/_'+name+'.js');
			});
			return sources;
		}());
		files[destination + '/assets/scripts/debug.js'] = ['source/assets/scripts/debug.js'];
		return files;
	}

	return {
		development: {
			files: getFiles('web')
		},
		distribution: {
			files: getFiles('distribution')
		}
	};
}

module.exports = getConfiguration;