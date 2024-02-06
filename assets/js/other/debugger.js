	// Debugger Script
window.addEventListener("keydown", function(key) {
	if (key.keyCode == "48") { // "0"
		if (localStorage.rv2_debug == "disabled") {
			alert("RatDev v1.61 - Enabled\nUse at your own discretion!");
			localStorage.rv2_debug = "enabled";
		} else {
			alert("RatDev V1.61 - Disabled\nThank you for using RatDev.");
			localStorage.rv2_debug = "disabled";
		}
		onDebugInfo();
	}

		// Debug Commands
	if (localStorage.rv2_debug == "enabled") {
		if (key.keyCode == "49") { // "1" Reroll Splash Text
			let funky_title_splash = document.getElementById("funky-title-splash");
			if (typeof(funky_title_splash) != "undefined" && funky_title_splash != null) {
				onRandoText();
			}
		}
		if (key.keyCode == "50") { // "2" Erase Saved Data
			onResetData();
		}
		if (key.keyCode == "51") { // "3" Change Theme
			var theme = prompt("Theme Name:", "default");
			if (theme == "") {
				onThemeSelect("default");
			} else {
				onThemeSelect(theme);
			}
		}
		if (key.keyCode == "52") { // "4" Change Brand
			var brand = prompt("Brand Name:", "clever");
			if (brand == "") {
				onSelectBranding("clever");
			} else {
				onSelectBranding(brand);
			}
		}
		if (key.keyCode == "57") { // "9" Go to Debug Page
			if (windowFilename != ".debug.html") {
				window.location = onGetPath(document.getElementById("styles").href) + "./../../pages/.debug.html";
			}
		}
	}
}, false);

	// Display Debug Info in Console
var consoleLog = false;
function onDebugInfo() {
	if (consoleLog === false) {
		console.group("__rv2_build_info__");
			const debugBuildArray = ["Current Month: " + new Date().getMonth() + 1, "Page Title: " + document.title, "Version: 2.0.1_Alpha", "Window Size: " + window.innerWidth + "x" + window.innerHeight];
			for (let i = 0; i < debugBuildArray.length; ++i) {
				console.log(debugBuildArray[i]);
			}
		console.groupEnd();
		console.log("\n");
		console.group("__rv2_user_data__");
			const debugUserArray = ["Antialiasing: " + localStorage.rv2_antialiasing, "Branding: " + localStorage.rv2_branding, "Card Icons: " + localStorage.rv2_cardicons, "Colorblind: " + localStorage.rv2_colorblind, "Dynamic BG: " + localStorage.rv2_dynamicbackgrounds, "Legible Font: " + localStorage.rv2_legiblefont, "Splash Text: " + localStorage.rv2_splashtext, "Theme: " + localStorage.rv2_theme];
			for (let i = 0; i < debugUserArray.length; ++i) {
				console.log(debugUserArray[i]);
			}
		console.groupEnd();
		consoleLog = true;
	}
}
if (localStorage.rv2_debug == "enabled") {
	onDebugInfo();
}

	// Set Default Value
if (localStorage.rv2_debug === undefined) {
	localStorage.rv2_debug = "disabled";
}