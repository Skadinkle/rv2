	// Add Scripts
const settingArray = ["antialiasing", "branding", "colorcorrection", "themes"];
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
		delete localStorage.rv2_antialiasing;
		delete localStorage.rv2_branding;
		delete localStorage.rv2_colorblind;
		delete localStorage.rv2_debug;
		delete localStorage.rv2_seensplash;
		delete localStorage.rv2_theme;
		alert("Data Reset"); // Notify User
		window.location.reload(); // Reload to Apply Changes
	}
}