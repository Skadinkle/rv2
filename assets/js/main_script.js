	// Get File Name
var windowPathname = window.location.pathname;
var windowFilename = windowPathname.split("/").pop();

	// Gets Path of Selected Element
function onGetPath(path) {
	path = path.match(/(^.*[\\\/]|^[^\\\/].*)/i);
	if(path != null) {
		return path[0];
	} else {
		alert("Missing Path: Unable to find element.");
		return false;
	}
}
	// Make the Scripts
function onAddAsset(name, type) {

		// Javascript Element
	if (type === "script") {
		var asset = document.head.appendChild(document.createElement("script"));
		asset.id = name + "Id";
		asset.src = onGetPath(document.getElementById("styles").href) + "./../js/" + name + ".js";
	}

		// CSS Stylesheet
	if (type === "css") {
		var asset = document.head.appendChild(document.createElement("link"));
		asset.rel = "stylesheet";
		asset.type = "text/css";
		asset.id = name + "Style";
		asset.href = onGetPath(document.getElementById("styles").href) + "./" + name + ".css";
	}

		// Error Handler
	asset.onerror = function() {
		if (windowFilename == "index.html") {
			alert("Missing Asset: " + name + " is not found.");
		} else {
			console.warn("Missing Asset: " + name + " is not found");
		}
	}
}

	// Add Scripts to Page
const mainScriptsArray = ["aboutblank", "security", "settings", "titlecard", "splash/main", "other/debugger", "other/eastereggs", "other/footer", "other/functions", "other/nointernet", "other/ratgen", "other/ratify", "other/videoplayer"];
for (let i = 0; i < mainScriptsArray.length; ++i) {
	let elem = mainScriptsArray[i];
	onAddAsset(elem, "script");
}