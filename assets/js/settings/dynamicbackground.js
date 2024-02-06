	// Check if Enabled or Not
checkbox_dynamicbackgrounds = document.getElementById("checkbox-dynamicbackgrounds");
if (typeof(checkbox_dynamicbackgrounds) != "undefined" && checkbox_dynamicbackgrounds != null) {
	checkbox_dynamicbackgrounds.addEventListener("click", function() {
		if (checkbox_dynamicbackgrounds.checked == true) {
			localStorage.rv2_dynamicbackgrounds = "enabled";
		} else {
			localStorage.rv2_dynamicbackgrounds = "disabled";
		}
	});
}

	// Checkbox Display
if (typeof(checkbox_dynamicbackgrounds) != "undefined" && checkbox_dynamicbackgrounds != null) {
	if (localStorage.rv2_dynamicbackgrounds == "enabled") {
		checkbox_dynamicbackgrounds.checked = true;
	}
}

	// Set Default Value
if (localStorage.rv2_dynamicbackgrounds === undefined) {
	localStorage.rv2_dynamicbackgrounds = "enabled";
}