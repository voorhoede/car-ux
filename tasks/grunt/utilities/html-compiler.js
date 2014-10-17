var fs = require('fs');
var grunt = require('grunt');
var nunjucks = require('nunjucks');

(function(){
    'use strict';

	var baseDir = 'distribution';

	function setBaseDir(name){
		baseDir = name;
	}

	function getModulesDir(dir){
		dir = dir || baseDir;
		return dir + '/modules/';
	}
	function getComponentsDir(dir){
		return getModulesDir(dir) + 'components/';
	}
	function getViewsDir(dir){
		return getModulesDir(dir) + 'views/';
	}

    var pathToAssets = '/assets/';
	var hrefPrefix = '';

    var env = new nunjucks.Environment([
        new nunjucks.FileSystemLoader(getModulesDir('source'))
    ]);

	env.addFilter('gauge', function(str) {
		var output = 1;
		var max = 5;
		var min = 1;

		if (str) {
			output = Math.round((parseInt(str.replace(',', '.'), 10) / 100) * max);
		}

		if (output > max) {
			output = max;
		} else if (output < min) {
			output = min;
		}

		return output;
	});

    function isNotUnderscored (str) {
        return !(str.substring(0,1).match(/_/g));
    }

    function getTemplate (path) {
        return env.getTemplate(path);
    }

    function getComponents () {
        return fs.readdirSync(getComponentsDir('source'))
            .filter(isNotUnderscored)
            .filter(function(name){
                return grunt.file.isDir(getComponentsDir('source') + name);
            });
    }

    function getViews () {
        return fs.readdirSync(getViewsDir('source'))
            .filter(isNotUnderscored)
            .filter(function(name){
                return grunt.file.isDir(getViewsDir('source') + name);
            });
    }

    module.exports = {
	    getModulesDir: getModulesDir,
	    getComponentsDir: getComponentsDir,
	    getViewsDir: getViewsDir,
        pathToAssets: pathToAssets,
		hrefPrefix: hrefPrefix,
        getTemplate: getTemplate,
        getComponents: getComponents,
        getViews: getViews,
	    setBaseDir: setBaseDir
    };

}());