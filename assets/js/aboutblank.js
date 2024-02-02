	// Base Properties
blankEmbed = "";

	// Page Types
function onPageOpen(url) { // Default Webpages
	blankEmbed = "https://" + atob(url);
	onBlankOpen();
}
function onGithubOpen(url) { // Github Directory Pages
	blankEmbed = atob("aHR0cHM6Ly9odG1scHJldmlldy5naXRodWIuaW8vP2h0dHBzOi8vZ2l0aHViLmNvbS8=") + atob(url);
	onBlankOpen();
}

	// Create about:blank Page
function onBlankOpen() {

		// Body
	const blank = window.open(); // Page Window
	blank.document.body.style.margin = "0";
	blank.document.body.style.height = "100vh";

		// Tab Info
	var favicon = blank.document.createElement("link"); // Favicon
	favicon.rel = "shortcut icon";
	favicon.type = "image/png";
	favicon.href = "https://ssl.gstatic.com/classroom/favicon.png";
	blank.document.head.appendChild(favicon);
	blank.document.title = "Home"; // Title

		// Security Script
	var script = blank.document.createElement("script");
	script.src = atob("aHR0cHM6Ly9za2FkaW5rbGUuZ2l0aHViLmlvL3J2Mi9hc3NldHMvanMvc2VjdXJpdHkuanM=");
	blank.document.head.appendChild(script);

		// Iframe
	var iframe = blank.document.createElement("iframe");
	iframe.style.border = "none";
	iframe.style.width = "100%";
	iframe.style.height = "100%";
	iframe.style.margin = "0";
	iframe.src = blankEmbed; // Source
	blank.document.body.appendChild(iframe);
}