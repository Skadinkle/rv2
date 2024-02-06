javascript:document.addEventListener('mousemove', function(e) {
	Blocation.hash = (window.scrollX + e.clientX) + ',' + (window.scrollY + e.clientY);
}, true);