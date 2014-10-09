(function(d){
	'use strict';

	var toggleClass = helpers.dom.toggleClass;
	var widgetElms = d.querySelectorAll('[data-component="widget-score"]');

	[].forEach.call([].slice.call(widgetElms), function (widgetElm) {
		var headerElm = widgetElm.querySelector('[data-widget-score-overview]');
		var headerArrow = widgetElm.querySelector('[data-score-header-arrow]');
		headerElm.addEventListener('click', function() {
			toggleClass(this, 'expanded');
			toggleClass(headerArrow, 'icon-arrow-down');
			toggleClass(headerArrow, 'icon-arrow-up');
		});
	});

}(document));