module.exports = function (grunt) {
	'use strict';
	grunt.registerTask(
		'clean-urls',
		'Flatten the filestructure to make URL\'s prettier.',
		function () {
			var tasks = [
				'copy:cleanUrls-guide',
				'clean:cleanUrls',
				'copy:cleanUrls',
				'string-replace'
			];

			grunt.task.run(tasks);
		}
	);
};
