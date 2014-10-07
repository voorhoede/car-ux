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

    var env = new nunjucks.Environment([
        new nunjucks.FileSystemLoader(getModulesDir('source'))
    ]);

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
        getTemplate: getTemplate,
        getComponents: getComponents,
        getViews: getViews,
	    setBaseDir: setBaseDir
    };

}());