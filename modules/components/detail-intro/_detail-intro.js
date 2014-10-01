(function(d, w){
	'use strict';

	var introTextElm = d.querySelector('[data-intro-text]');
	var widgetScoreElm = d.querySelector('[data-component="widget-score"]');

	// Make the widget height equal to the height of introTextElm
	function equalizeHeight() {
		widgetScoreElm.style.height = introTextElm.offsetHeight + 'px';
	}
	//equalizeHeight(); // Because IE might take some time before firing the load event

	// Fire equalizeHeight debounced on the resize event
	w.addEventListener('resize', debounce(equalizeHeight, 250), false);

	// Make sure all images inside introTextElm are loaded
	w.addEventListener('load', equalizeHeight, false);

}(document, window));