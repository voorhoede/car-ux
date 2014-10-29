/**
 * Grunt configuration for string replace task
 */
function getConfiguration(grunt) {
	'use strict';

	return {
		'string-replace': {
			files: [{
				expand: true,
				cwd: 'distribution/',
				src: ['**/*.html', '!dist/**'],
				dest: 'distribution/'
			}],
			options: {
				replacements: [{
					pattern: /(\/modules\/views)(.*?)["]/ig,
					replacement: function(match, p1, p2) {
						var filename = p2.substring(p2.lastIndexOf('/') + 1);
						var path = match.replace(p1, '');
						var fullPath = path.replace(filename, '');

						console.log(fullPath);

						if (fullPath === '/home/"') {
							fullPath = '/"';
						}
						//return fullPath;

						return match;
					}
				}]
			}
		}
	};
}
module.exports = getConfiguration;