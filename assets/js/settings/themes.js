	// Select Page Theme
madeTheme = false;
function onThemeSelect(theme) {

		// Make Theme Stylesheet
	if (madeTheme === false) {
		var pageTheme = document.createElement("link");
		pageTheme.setAttribute("rel", "stylesheet");
		pageTheme.setAttribute("type", "text/css");
		pageTheme.setAttribute("id", "themeStyles");
		document.getElementsByTagName("head")[0].appendChild(pageTheme);
		madeTheme = true;
	}

		// Load Theme Data
	var month = new Date().getMonth() + 1;
	if (theme != "default") { // Every Other Theme
		document.getElementById("themeStyles").setAttribute("href", onGetPath(document.getElementById("styles").href) + "themes/" + theme + ".css");
		if (document.getElementById("seasonal_effect") != null) {
			document.getElementById("seasonal_effect").remove();
			document.getElementById("canvas").remove();
		}
	} else { // Seasonal Theme (Default)
		const monthNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
		const monthSheetArray = ["common", "common", "march", "common", "common", "common", "common", "common", "common", "october", "november", "december"];
		for (let i = 0; i < monthNumberArray.length; ++i) {
			if (month == monthNumberArray[i]) {
				document.getElementById("themeStyles").setAttribute("href", onGetPath(document.getElementById("styles").href) + "seasonal/" + monthSheetArray[i] + ".css");
			}
		}
	}

		// Sava Data
	localStorage.rv2_theme = theme;
}

	// Disable Special Themes on Debug
if (windowFilename != ".debug.html") {
	onAddAsset("themes/pageEffects", "script");
}
	// Set Default Value
if (localStorage.rv2_theme === undefined) {
	localStorage.rv2_theme = "default";
}

	// Set Page Theme
onThemeSelect(localStorage.rv2_theme);