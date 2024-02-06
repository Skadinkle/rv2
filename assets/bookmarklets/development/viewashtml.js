javascript:(function html() {
	var s = (function () {
		/*%s*/;
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
		}  return doc.getSelection() + '';
	}
	if (s === '') {
		s = getActiveSelection() || prompt('Please enter your HTML snippet:');
	} else {
		s = s.replace(/(^|\s|")~("|\s|$)/g, '$1' + getActiveSelection() + '$2');
	}
	if (s) {
		HTMLDocument.prototype.open.call(document, 'text/html; charset=UTF-8');
		HTMLDocument.prototype.write.call(document, s);
		HTMLDocument.prototype.close.call(document);
	}
})();