	// Add Scripts
const settingArray = ["antialiasing", "branding", "cardicons", "colorcorrection", "dynamicbackground", "legiblefont", "splashtext", "themes"];
for (let i = 0; i < settingArray.length; ++i) {
	let elem = settingArray[i];
	onAddAsset("settings/" + elem, "script");
}
if (windowFilename == "settings.html") {
	const settingMenuArray = ["Credits", "TabManager"];
	for (let i = 0; i < settingMenuArray.length; ++i) {
		let elem = settingMenuArray[i];
		onAddAsset("settings/menu" + elem, "script");
	}
}

	// Resets Saved Data
function onResetData() {

		// Window Prompt
	if (window.confirm("This will reset all of your data on Rv2.\nClick 'Cancel' if you do not wish to do so.") == false) {
		alert("Successfully Aborted"); // Notify User
	} else {

			// Reset User Data
		localStorage.rv2_antialiasing = "enabled";
		localStorage.rv2_branding = "clever";
		localStorage.rv2_cardicons = "enabled";
		localStorage.rv2_colorblind = "default";
		localStorage.rv2_debug = "disabled";
		localStorage.rv2_dynamicbackgrounds = "enabled";
		localStorage.rv2_legiblefont = "disabled";
		localStorage.rv2_seensplash = undefined;
		localStorage.rv2_splashtext = "enabled";
		localStorage.rv2_theme = "default";

			// Notify User & Reload
		alert("Data Reset");
		window.location.reload();
	}
}