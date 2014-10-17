module.exports = function (grunt) {
	'use strict';
	grunt.registerTask(
		'deploy',
		'Concatenates and minifies source files.',
		function () {
			grunt.task.run([
				'clean:distribution',
				'copy:distribution',
				'sass:distribution',
				'cssmin:distribution',
				'concat:distribution',
				'compile-html',
				'jsbeautifier:distribution-components',
				'compile-previews',
                'compile-preview-objects',
				'compile-index',
				'imagemin',
				//'jsbeautifier:distribution-html',
				'copy:guide',
				'uglify:distribution',
				'clean:distribution-cleanup',
				'compress:distribution',
				'htmlmin',
				'clean-urls'
			]);
		}
	);
};
