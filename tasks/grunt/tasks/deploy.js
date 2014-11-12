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
				'compile-previews',
                'compile-preview-objects',
				'compile-index',
				'imagemin',
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
