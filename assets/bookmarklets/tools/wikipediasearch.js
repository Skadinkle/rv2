javascript:(function(document) {
	function se(d) {
		return d.selection ? d.selection.createRange(1).text : d.getSelection(1);
	}; 
	let d = se(document); 
	for (i = 0; i < frames.length && (d == document || d == 'document'); i++) d = se(frames[i].document); 
	if (d == 'document') d = prompt('Enter search terms for Wikipedia', ''); 
	open('https://en.wikipedia.org' + (d ? '/w/index.php?title=Special:Search&search=' + encodeURIComponent(d) : '')).focus();
})
(document);