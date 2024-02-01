javascript:(function addcss(document, s) {
	s = s || (function () {
		/* %s */;
	}).toString() .replace(/^function\s*\(\s*\)\s*\{\s*\/\*/, '') .replace(/\*\/\s*\;?\s*\}\s*$/, '') .replace(/\u0025s/, '');
	function getActiveSelection(doc) {
		if (arguments.length === 0) {
			doc = document;
		}
		if (!doc || typeof doc.getSelection !== 'function') {
			return '';
		}
		if (!doc.activeElement) {
			return doc.getSelection() + '';
		}
		var activeElement = doc.activeElement;
		try {
			if ( typeof activeElement.contentDocument === 'object' && activeElement.contentDocument !== null ) {
				return getActiveSelection(activeElement.contentDocument);
			}
		}
		catch (e) {
			return doc.getSelection() + '';
		}
		if (typeof activeElement.value === 'string') {
			if (activeElement.selectionStart !== activeElement.selectionEnd) {
				return activeElement.value.substring(activeElement.selectionStart, activeElement.selectionEnd);
			}
			return activeElement.value;
		}
		return doc.getSelection() + '';
	}
	if (s === '') {
		s = getActiveSelection() || prompt('Please enter your CSS code:');
	} else {
		s = s.replace(/(^|\s|")~("|\s|$)/g, '$1' + getActiveSelection() + '$2');
	}
	if (s) {
		document.head.appendChild(document.createElementNS('http://www.w3.org/1999/xhtml', 'style')).textContent = s;
		try {
			Array.prototype.slice.call(document.querySelectorAll('frame, iframe, object[type^="text/html"], object[type^="application/xhtml+xml"]')).forEach(function (elem) {
				addcss(elem.contentDocument, s);
			});
		}
		catch(e) {}
	}
})
(document);