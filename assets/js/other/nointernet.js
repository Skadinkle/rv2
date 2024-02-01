	// Detect Internet Connection
if (navigator.onLine == false) {
	onNoInternet(true);
} else {
	onNoInternet(false);
}
window.addEventListener("offline", function() {
	onNoInternet(true);
});
window.addEventListener("online", function() {
	onNoInternet(false);
});

	// Toggle No Internet Page
function onNoInternet(state) {
	if (state == true) {
		offrame = document.createElement("iframe");
		offrame.id = "nointernet";
		offrame.src = onGetPath(document.getElementById("styles").href) + "./../htmls/nointernet.html";
		document.body.appendChild(offrame);
	} else {
		if (typeof(offrame) != "undefined" && offrame != null) {
			offrame.remove();
		}
	}
}