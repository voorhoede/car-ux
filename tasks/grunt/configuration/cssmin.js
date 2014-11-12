/**
 * Grunt configuration for cssmin task
 */
function getConfiguration(grunt) {
    'use strict';
    return {
		distribution: {
		    options: {
			    banner: '/* car-ux */'
		    },
		    files: {
			    'distribution/assets/style/main.css': ['distribution/assets/style/*.css']
		    }
	    }
    };
}

module.exports = getConfiguration;