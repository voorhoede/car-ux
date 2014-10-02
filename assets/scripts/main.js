var helpers = helpers || {};

/**
 * Debounce function - http://remysharp.com/2010/07/21/throttling-function-calls/
 *
 * @param fn
 * @param delay
 * @returns {Function}
 */
function debounce(fn, delay) {
	var timer = null;
	return function () {
		var context = this, args = arguments;
		clearTimeout(timer);
		timer = setTimeout(function () {
			fn.apply(context, args);
		}, delay);
	};
}
helpers.debounce = debounce;
var helpers = helpers || {};

(function(d, w){
	'use strict';

	function setBreakSize() {
		// Set breaSize globally - Removing doubles quotes added by IE
		helpers.breakSize = w.getComputedStyle(d.body, ':after').getPropertyValue('content').replace(/"/g, '');
	}
	setBreakSize();

	w.addEventListener('resize', debounce(setBreakSize, 250), false);
}(document, window));
(function(d, w){
	'use strict';

	var introComponentElm = d.querySelector('[data-component="detail-intro"]');
	var introTextElm = introComponentElm.querySelector('[data-intro-text]');
	var widgetScoreElm = introComponentElm.querySelector('[data-component="widget-score"]');
	var introSectionElm = introComponentElm.querySelector('[data-intro-section]');
	var socialButtonsElm = introComponentElm.querySelector('[data-social-buttons]');

	// Make the widget height equal to the height of introTextElm
	function equalizeHeight() {
		if (helpers.breakSize !== 'extra-small') {
			introSectionElm.style.height = widgetScoreElm.style.height = (introTextElm.offsetHeight + socialButtonsElm.offsetHeight) + 'px';
			socialButtonsElm.style.marginTop = -(socialButtonsElm.offsetHeight) + 'px';
		} else {
			socialButtonsElm.style.marginTop = introSectionElm.style.height = widgetScoreElm.style.height = '';
		}
	}

	// Fire equalizeHeight debounced on the resize event
	w.addEventListener('resize', debounce(equalizeHeight, 250), false);

	// Make sure all images inside introTextElm are loaded
	w.addEventListener('load', equalizeHeight, false);
}(document, window));