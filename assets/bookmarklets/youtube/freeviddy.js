javascript:(function freeviddy() {
	"use strict";
	function execute(document) {
		document.addEventListener('mousemove', function debouncer(event) {
			clearTimeout(debouncer.timeoutId);
			debouncer.timeoutId = setTimeout(function () {
				let elementsUnderPointer = document.elementsFromPoint(event.clientX, event.clientY);
				let overlaysToRemove = [];
				for (let i = 0; i < elementsUnderPointer.length; i++) {
					if (elementsUnderPointer[i].tagName.toUpperCase() === 'VIDEO' && !elementsUnderPointer[i].xxxJanFreeViddyProcessed) {
						let video = elementsUnderPointer[i]; video.controls = true;
						video.xxxJanFreeViddyProcessed = true;
						if (i === 0) {
							console.log('Free Viddy: found video without overlays:', video);
						} else {
							overlaysToRemove = elementsUnderPointer.slice(0, i);
							console.log(`Free Viddy: found video with ${i} overlays:`, video);
						}
						break;
					}
				}
				if (overlaysToRemove.length) {
					overlaysToRemove.forEach(element => element.remove());
				}
			}, 50);
		});
		try {
			Array.from(document.querySelectorAll('frame, iframe, object[type^="text/html"], object[type^="application/xhtml+xml"]')).forEach( elem => {
				try {
					execute(elem.contentDocument)
				}
				catch (e) {}
			});
		}
		catch (e) {}
	}
	execute(document);
})();