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
			console.log("Current Month: " + new Date().getMonth() + 1);
			console.log("Language: " + navigator.language);
			console.log("Page Title: " + document.title);
			console.log("Version: 2.0_Alpha");
			console.log("Window Size: " + document.body.clientWidth + "x" + document.body.clientHeight+"");
		console.groupEnd();
		console.log("\n");
		console.group("__rv2_user_data__");
			console.log("Antialiasing: " + localStorage.rv2_antialiasing);
			console.log("Branding: " + localStorage.rv2_branding);
			console.log("Colorblind: " + localStorage.rv2_colorblind);
			console.log("Theme: " + localStorage.rv2_theme);
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