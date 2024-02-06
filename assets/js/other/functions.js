	// Force Fullscreen Mode
function onFullscreen() {
	var docElem = document.documentElement;
	if (docElem.requestFullscreen) { // Regular
		docElem.requestFullscreen();
	} else if (docElem.webkitRequestFullscreen) { // Safari
		docElem.webkitRequestFullscreen();
	} else if (docElem.msRequestFullscreen) { // IE11
		docElem.msRequestFullscreen();
	}
}

	// Change Tab Header Information
function onHeadChange(title, favicon) {

		// Favicon
	if (favicon === undefined) {
		document.querySelector("link[rel~='icon']").href = "https://assets.clever.com/launchpad/92f70eac9/favicon.ico?1";
		alert("Missing Image: Favicon not found.");
	} else {
		document.querySelector("link[rel~='icon']").href = favicon;
	}

		// Page Title
	if (title === undefined) {
		document.title = windowFilename;
		alert("Missing Title: Text not found.");
	} else {
		document.title = title;
	}
}