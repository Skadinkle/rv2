	// Rat Hover Message
let ratHovered = false;
function onRatHover() {
	if (ratHovered === false) {
		console.info("Click me");
		ratHovered = true;
	}
}

	// Rat Activated
function onRatClick() {

		// Toggle Stuff
	onFullscreen();
	onHeadChange("ㅤ", "./assets/icons/transparent.gif");
	onLetItSnow();

		// Remove Stuff
	document.getElementsByClassName("main-body")[0].remove();
	document.getElementsByTagName("header")[0].remove();
	document.getElementsByTagName("footer")[0].remove();
	const idArray = ["sky", "funky-title-small", "funky-title-splash"];
	for (let i = 0; i < idArray.length; ++i) {
		let elem = idArray[i];
		document.getElementById(elem).remove();
	}

		// Other
	document.getElementsByTagName("*")[0].className = "ratified";
	document.getElementById("funky-title-large").innerHTML = '<a onclick="window.location.reload();">ǝw ꓘɔᴉ|ɔ</a>';
	document.getElementById("funky-title-large").style.pointerEvents = "all";
	console.warn("fool");
}