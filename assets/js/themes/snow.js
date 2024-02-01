	// Snowing Effect
snowing = false;
function onLetItSnow() { // Adds Bookmarklet that Creates Snow on the Page
	if (snowing === false) {
		var letitsnow = document.body.appendChild(document.createElement("script"));
		letitsnow.id = "seasonal_effect";
		letitsnow.src = onGetPath(document.getElementById("styles").href) + "./../bookmarklets/other/letitsnow.js";
		letitsnow.onerror = function() {
			alert("Missing Script: letitsnow.js not found.");
		};
		snowing = true;
	}
}

	// Trigger Only on Default Theme
if (new Date().getMonth() + 1 == 12 && localStorage.rv2_theme == "default") {
	onLetItSnow();
}