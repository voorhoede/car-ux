/**
 * Grunt configuration for copy task
 */
function getConfiguration(grunt) {
    'use strict';

    return {
        development: {
            files: [{
                src: 'web/modules/views/_style-guide/_style-guide.html',
                dest: 'web/guide/style-guide.html'
            },
            {
                expand: true,
                cwd: 'source/assets/images/guide/',
                src: ['**'],
                dest: 'web/guide/images/'
            }, {
                expand: true,
                cwd: 'source/assets/images/',
                src: ['**'],
                dest: 'web/assets/images/'
            }, {
				expand: true,
				cwd: 'source/assets/fonts/',
				src: ['**'],
				dest: 'web/assets/fonts/'
			}, {
                expand: true,
                cwd: 'source/vendor/',
                src: ['**'],
                dest: 'web/guide/vendor/'
            }, {
                expand: true,
                cwd: 'source/modules/',
                src: ['**'],
                dest: 'web/modules/'
            }]
        },
        distribution: {
            files: [{
                expand: true,
                cwd: 'source/',
                src: ['**'],
                dest: 'distribution/'
            }, {
                expand: true,
                cwd: 'source/',
                src: [
                    'vendor/prismjs/**',
                    'vendor/jasmine-2.0/**'
                ],
                dest: 'distribution/guide/'
            }]
        },
        guide: {
            files: [{
                expand: true,
                cwd: 'source/',
                src: ['vendor/app-guide-font/**'],
                dest: 'distribution/guide/'
            }, {
                expand: true,
                cwd: 'distribution/assets/style/',
                src: ['guide.css', 'debug.css'],
                dest: 'distribution/guide/'
            }, {
	            expand: true,
	            cwd: 'distribution/assets/images/guide',
	            src: ['*'],
	            dest: 'distribution/guide/images'
            }, {
                src: 'distribution/modules/views/_style-guide/_style-guide.html',
                dest: 'distribution/guide/style-guide.html'
            }]
        },
		'cleanUrls-guide': {
			files: [{
				expand: true,
				cwd: 'distribution/',
				src: ['**'],
				dest: 'distribution/front-end-guide/'
			}]
		},
		'cleanUrls': {
			files: [{
				expand: true,
				cwd: 'distribution/front-end-guide/assets/',
				src: ['**'],
				dest: 'distribution/assets/'
			},{
				src: 'distribution/front-end-guide/modules/views/home/home.html',
				dest: 'distribution/index.html'
			}, {
				expand: true,
				cwd: 'distribution/front-end-guide/modules/views/',
				src: ['**/*.html', '!_*/**'],
				dest: 'distribution/',
				rename: function(dest, src) {
					var filename = src.substring(src.lastIndexOf('/') + 1);
					return dest + src.replace(filename,'index.html');
				}
			}]
		}
    };
}

module.exports = getConfiguration;
