	// Check if Enabled or Not
checkbox_cardicons = document.getElementById("checkbox-cardicons");
if (typeof(checkbox_cardicons) != "undefined" && checkbox_cardicons != null) {
	checkbox_cardicons.addEventListener("click", function() {
		if (checkbox_cardicons.checked == false) {
			onRemoveCardIcons("disabled");
		} else {
			localStorage.rv2_cardicons = "enabled";
		}
	});
}

	// Remove Icons from Page Cards
function onRemoveCardIcons() {
	for (var i = document.images.length; i-->0;) {
		document.querySelectorAll("#page-options a#item img").forEach(img => img.src = "");
	}

		// Save Data
	localStorage.rv2_cardicons = "disabled";
}
if (localStorage.rv2_cardicons == "disabled") {
	onRemoveCardIcons();
}

	// Checkbox Display
if (typeof(checkbox_cardicons) != "undefined" && checkbox_cardicons != null) {
	if (localStorage.rv2_cardicons == "enabled") {
		checkbox_cardicons.checked = true;
	}
}

	// Set Default Value if None Present
if (localStorage.rv2_cardicons === undefined) {
	localStorage.rv2_cardicons = "enabled";
}