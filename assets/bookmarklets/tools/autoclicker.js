javascript:(function(x, y) {
	if(!window.click) {
		window.click = !0, document.body.style.cursor = 'crosshair';
		var cps = prompt('Autoclicker CPS: (Under 200 recommended)');
		if(!cps || isNaN(cps)?(alert('You entered something wrong. Try running the script again.'), end()):alert('Autoclicker activated at ' + cps + ' CPS! Do [ctrl+e] to stop.'), addEventListener('mousemove', e=>{
			x = e.clientX, y = e.clientY;
		}), addEventListener('keydown',e=>{
			'e' === e.key && e.ctrlKey && (alert('Autoclicker deactivated! Click the bookmark again to reactivate!'), end());
		}), window.click)var int = setInterval(function() {
			var e = document.elementFromPoint(x, y);
			e && e.click();
		}, 1e3 / cps);
		function end() {
			clearInterval(int), window.click =! 1, document.body.style.cursor = 'default';
		}
	}
})();