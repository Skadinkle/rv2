javascript:(function() {
	url = 'http://deturl.com/download-video.js';
	document.body.appendChild(document.createElement('script')).src = url + '?' + new Date().getTime();
})();