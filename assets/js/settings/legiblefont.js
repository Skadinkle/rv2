	// Check if Enabled or Not
checkbox_legiblefont = document.getElementById("checkbox-legiblefont");
if (typeof(checkbox_legiblefont) != "undefined" && checkbox_legiblefont != null) {
	checkbox_legiblefont.addEventListener("click", function() {
		if (checkbox_legiblefont.checked == false) {
			onLegibleFont("disabled");
		} else {
			onLegibleFont("enabled");
		}
	});
}

	// Toggle Legible Fonts
function onLegibleFont(value) {

		// Add CSS
	let legiblefont = document.getElementById("other/legiblefontStyle");
	if (value == "enabled") {
		if (typeof(checkbox_legiblefont) != "undefined" && checkbox_legiblefont != null) {
			checkbox_legiblefont.checked = true;
		}
		if (typeof(legiblefont) == "undefined" || legiblefont == null) {
			onAddAsset("other/legiblefont", "css");
		}
	} else { // Remove CSS
		if (typeof(legiblefont) != "undefined" && legiblefont != null) {
			legiblefont.remove();
		}
	}

		// Save User Data
	localStorage.rv2_legiblefont = value;
}

	// Set Default Value
if (localStorage.rv2_legiblefont === undefined) {
	localStorage.rv2_legiblefont = "disabled";
}

	// Set Legible Font
onLegibleFont(localStorage.rv2_legiblefont);