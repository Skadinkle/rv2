	// Toggle Page Antialiasing
function onAntialiasing(value) {

		// Add CSS
	let antialiasing = document.getElementById("other/antialiasingStyle");
	if (value == "disabled") {
		if (typeof(antialiasing) == "undefined" || antialiasing == null) {
			onAddAsset("other/antialiasing", "css");
		}
	}

		// Remove CSS
	if (value == "enabled") {
		if (typeof(antialiasing) != "undefined" && antialiasing != null) {
			antialiasing.remove();
		}
	}

		// Save User Data
	localStorage.rv2_antialiasing = value;
}

	// Set Default Value
if (localStorage.rv2_antialiasing === undefined) {
	localStorage.rv2_antialiasing = "enabled";
}

	// Set Antialiasing
onAntialiasing(localStorage.rv2_antialiasing);