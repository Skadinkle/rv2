	// Change Page Palette Based on Color Blindness
function onColorBlind(type) {

		// Check if Need Filter or Not
	if (type == "default") {
		var blinddiv = document.getElementById("blinddiv");
		var blindfilter = document.getElementById("blindfilter");
		if (blindfilter != null) {
			blinddiv.remove();
			blindfilter.remove();
		}
	} else {
		var blinddiv = document.getElementById("blinddiv");
		if (blinddiv == null) {
			blinddiv = document.createElement("div");
			blinddiv.id = "blinddiv";
			blinddiv.setAttribute("style", "width: 0; height: 0; padding: 0; margin: 0; line-height: 0;");
			document.body.appendChild(blinddiv);
		}
		var blindfilter = document.getElementById("blindfilter");
		if (blindfilter == null) {
			blindfilter = document.createElement("style");
			blindfilter.id = "blindfilter";
			document.body.appendChild(blindfilter);
		}
	}

		// Load Colorblind Data
	const colorblindTypeArray = ["achromatomaly", "achromatopsia", "deuteranomaly", "deuteranopia", "protanomaly", "protanopia", "tritanomaly", "tritanopia"];
	const colorblindValueArray = ["0.618, 0.320, 0.062,0,0 0.163, 0.775, 0.062,0,0 0.163, 0.320, 0.516,0,0", "0.299, 0.587, 0.114,0,0 0.299, 0.587, 0.114,0,0 0.299, 0.587, 0.114,0,0", "0.800, 0.200, 0.000,0,0 0.25833, 0.74167, 0.000,0,0 0.000, 0.14167, 0.85833,0,0", "0.625, 0.375, 0.000,0,0 0.700, 0.300, 0.000,0,0 0.000, 0.300, 0.700,0,0", "0.81667, 0.18333, 0.000,0,0 0.33333, 0.66667, 0.000,0,0 0.000, 0.125, 0.875,0,0", "0.56667, 0.43333, 0.000,0,0 0.55833, 0.44167, 0.000,0,0 0.000, 0.24167, 0.75833,0,0", "0.96667, 0.03333, 0.000,0,0 0.000, 0.73333, 0.26667,0,0 0.000, 0.18333, 0.81667,0,0", "0.950, 0.050, 0.000,0,0 0.000, 0.43333, 0.56667,0,0 0.000, 0.475, 0.525,0,0"];
	for (let i = 0; i < colorblindTypeArray.length; ++i) {
		if (type == colorblindTypeArray[i]) {
			blinddiv.innerHTML = '<svg style="display: none;"><defs><filter id="' + type + '"><feColorMatrix type="matrix" values="' + colorblindValueArray[i] + ' 0,0,0,1,0" in="SourceGraphic"/> </filter></defs></svg>';
			blindfilter.innerHTML = "header, section, #main-body, #video-main, #settings_menu, footer { -webkit-filter: type -moz-filter: type -ms-filter: type -o-filter: type filter: type}".replace(/type/g, "url(#" + type + ");");
		}
	}

		// Save Data
	localStorage.rv2_colorblind = type;
}

	// Set Default Value if None Present
if (localStorage.rv2_colorblind === undefined) {
	localStorage.rv2_colorblind = "default";
}

	// Apply Option
onColorBlind(localStorage.rv2_colorblind);