	// Navigate the Settings Menu
function onSettingsMenu(page) {

		// Load Tab
	const resourceArray = ["settings_home", "settings_branding", "settings_colorcorrection", "settings_general", "settings_themes", "settings_credits", "settings_creditsmember", "settings_references"];
	const resourceNameArray = ["Home Page", "Site Branding", "Color Correction", "General Stuff", "Custom Page Themes", "Credits", "Member Page", "References & Resources"];
	for (let i = 0; i < resourceNameArray.length; ++i) {
		let elem = resourceArray[i];
		if ("settings_" + page == elem) {
			document.getElementById("settings_title").innerHTML = "Settings - " + resourceNameArray[i];
			elem = document.getElementById(elem);
			elem.style.display = "grid";
		} else {
			elem = document.getElementById(elem);
			elem.style.display = "none";
		}
		if ("settings_" + page != "creditsmember") {
			onOptionDesc(" ");
		}
	}
}

	// Change Description on Hover
function onOptionDesc(desc) {
	document.getElementById("settings_optiondesc").innerHTML = desc;
}

	// Reset Page Position
window.addEventListener("click", function() {
	onResetPosition();
});
window.addEventListener("load", function() {
	onResetPosition();
});
function onResetPosition() {
	if (windowFilename === "settings.html") {
		window.scrollTo(0, 0);
	}
}