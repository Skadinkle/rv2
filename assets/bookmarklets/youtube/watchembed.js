javascript:(function () {
	if (window.location.toString().includes('www.youtube.com/watch?v')) {
		window.open('https://www.youtube-nocookie.com/embed/' + window.location.toString().split('=')[1]);
	}
})();