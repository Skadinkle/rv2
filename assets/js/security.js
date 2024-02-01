	// Stop Right-Click Menu from Appearing
document.addEventListener('contextmenu', (input) => {
	input.preventDefault();
});
document.addEventListener('oncontextmenu', (input) => {
	input.preventDefault();
});

document.onkeydown = (input) => {
	if (input.key == 123) {
		input.preventDefault();
	}
	if (input.ctrlKey && input.shiftKey && input.key == 'I') {
		input.preventDefault();
	}
	if (input.ctrlKey && input.shiftKey && input.key == 'C') {
		input.preventDefault();
	}
	if (input.ctrlKey && input.shiftKey && input.key == 'J') {
		input.preventDefault();
	}
	if (input.ctrlKey && input.key == 'U') {
		input.preventDefault();
	}
};

	// Replace Content Upon Actions
var page = document.getElementsByTagName("html")[0];
function onInspectElement() {
	page.innerHTML = "Inspect element is disabled.";
}
function onSaveAs() {
	page.innerHTML = "Save as... is disabled.";
}