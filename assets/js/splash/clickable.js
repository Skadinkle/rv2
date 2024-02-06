	// Thanks User for Clicking
function onClickMe() {
	document.getElementById("funky-title-splash").innerHTML = "Thank You!";
};

	// Disses User for Clicking
function onDontClickMe() {
	document.getElementById("funky-title-splash").innerHTML = "dingus";
};

	// Removes Page CSS Style Sheet
function onTextBased() {
	document.getElementById("styles").remove();
	onSeasonalReset();
};