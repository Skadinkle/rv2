	// Check if Enabled or Not
checkbox_splashtext = document.getElementById("checkbox-splashtext");
if (typeof(checkbox_splashtext) != "undefined" && checkbox_splashtext != null) {
	checkbox_splashtext.addEventListener("click", function() {
		if (checkbox_splashtext.checked == true) {
			localStorage.rv2_splashtext = "enabled";
		} else {
			localStorage.rv2_splashtext = "disabled";
		}
	});
}

	// Check Box if Present
if (typeof(checkbox_splashtext) != "undefined" && checkbox_splashtext != null) {
	if (localStorage.rv2_splashtext == "enabled") {
		checkbox_splashtext.checked = true;
	}
}

	// Remove Title Splash
if (localStorage.rv2_splashtext == "disabled") {
	document.getElementById("funky-title-splash").remove();
}