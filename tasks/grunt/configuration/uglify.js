/**
 * Grunt configuration for uglify task
 */
function getConfiguration(grunt) {
    'use strict';
    return {
        distribution: {
            files: [
                {
                    src: 'distribution/assets/scripts/main.js',
                    dest: 'distribution/assets/scripts/main.js'
                }
            ]
        }
    };
}

module.exports = getConfiguration;