(function(d){
	'use strict';

	var toggleClass = helpers.dom.toggleClass;
	var widgetElms = d.querySelectorAll('[data-component="widget-score"]');

	[].forEach.call(widgetElms, function (widgetElm) {
		var headerElm = widgetElm.querySelector('[data-widget-score-overview]');
		headerElm.addEventListener('click', function() {
			toggleClass(this, 'expanded');
		});
	});

}(document));