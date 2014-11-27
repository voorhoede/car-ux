/**
 * Grunt configuration for grunticon task
 */
function getConfiguration(grunt) {
    'use strict';
    return {
        grunticon: {
            files: [
                {
                    expand: true,
                    cwd: 'source/assets/images/grunticon-svgs',
                    src: ['*.svg', '*.png'],
                    dest: 'source/assets/images/grunticon-output'
                }
            ],
            options: {
                customselectors: {
                    'left-red' : ['.icon-left:hover', '.icon-left:focus'],
					'facebook-yellow-white': ['.icon-facebook:hover', '.icon-facebook:focus'],
					'gplus-yellow-white': ['.icon-gplus:hover', '.icon-gplus:focus'],
					'twitter-yellow-white': ['.icon-twitter:hover', '.icon-twitter:focus']
                },
                prefix: {
                    prefix: '.icon-'
                },
	            colors: {
                    red: '#CD4D4D',
                    yellow: '#fee165'
	            },
                defaultWidth: '30px',
                defaultHeight: '30px'
            }
        }
    };
}

module.exports = getConfiguration;
