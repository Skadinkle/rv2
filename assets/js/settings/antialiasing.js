	// Check if Enabled or Not
checkbox_antialiasing = document.getElementById("checkbox-antialiasing");
if (typeof(checkbox_antialiasing) != "undefined" && checkbox_antialiasing != null) {
	checkbox_antialiasing.addEventListener("click", function() {
		if (checkbox_antialiasing.checked == false) {
			onAntialiasing("disabled");
		} else {
			onAntialiasing("enabled");
		}
	});
}

	// Toggle Antialiasing
function onAntialiasing(value) {

		// Add CSS
	let antialiasing = document.getElementById("other/antialiasingStyle");
	if (value == "disabled") {
		if (typeof(antialiasing) == "undefined" || antialiasing == null) {
			onAddAsset("other/antialiasing", "css");
		}
	} else { // Remove CSS
		if (typeof(checkbox_antialiasing) != "undefined" && checkbox_antialiasing != null) {
			checkbox_antialiasing.checked = true;
		}
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