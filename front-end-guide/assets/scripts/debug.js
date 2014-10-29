(function(){
	'use strict';

	var debugStyleUri = '/guide/debug.css';
	var components = document.querySelectorAll('[data-component]');

	addStylesheet(debugStyleUri);
	annotateComponents();

	if(window.location.href.indexOf('debug') > 0){ toggleDebug(); }
	window.debug = toggleDebug;
	//toggleDebug();

	function annotateComponents() {
		[].forEach.call([].slice.call(components), function(component){
			var name = component.getAttribute('data-component');
			var label = document.createElement('a');
			label.innerHTML = name;
			label.href = '/modules/components/' + name + '/preview.html';
			helpers.dom.addClass(label, 'debug-label');
			component.appendChild(label);
		});
	}

	function addStylesheet(uri) {
		var stylesheet = document.createElement('link');
		stylesheet.type = 'text/css';
		stylesheet.rel = 'stylesheet';
		stylesheet.href = uri;
		document.getElementsByTagName('head')[0].appendChild(stylesheet);
	}

	function toggleDebug() {
		[].forEach.call([].slice.call(components), function(component){
			helpers.dom.toggleClass(component, 'debug-component');
		});
	}
}());