	// Title Card Parallax Effect
if (localStorage.rv2_dynamicbackgrounds == "enabled") {
	window.addEventListener("scroll", function() {

			// Get Window Position
		let varWinY = window.scrollY;

			// Sky
		var sky = document.getElementById("sky");
		if (typeof(sky) != "undefined" && sky != null) {
			sky.style.top = varWinY * 0.5 + 50 + "px";
		}

			// Ground
		let ground = document.getElementById("ground");
		if (typeof(ground) != "undefined" && ground != null) {
			ground.style.top = "calc(16.5vh + " + varWinY * 0.2 + "px)";
			ground.style.opacity = 1 - varWinY * 0.0005;
			ground.style.scale = 2.75 - varWinY * 0.00025;
		}

			// Small Pre-Title
		let funky_title_small = document.getElementById("funky-title-small");
		if (typeof(funky_title_small) != "undefined" && funky_title_small != funky_title_small) {
			funky_title_small.style.marginTop = varWinY * -0.1 + "px";
			funky_title_small.style.transform = "rotate(" + -varWinY * 0.025 + "deg)";
		}

			// Large Main Title
		let funky_title_large = document.getElementById("funky-title-large");
		if (typeof(funky_title_large) != "undefined" && funky_title_large != null) {
			funky_title_large.style.marginTop = varWinY * -0.125 + "px";
			funky_title_large.style.transform = "rotate(" + varWinY * 0.025 + "deg)";
		}

			// Splash Text
		let funky_title_splash = document.getElementById("funky-title-splash");
		if (typeof(funky_title_splash) != "undefined" && funky_title_splash != null) {
			funky_title_splash.style.marginTop = varWinY * -0.125 + "px";
		}

			// Grid Overlay
		let overlay = document.getElementById("overlay");
		if (typeof(overlay) != "undefined" && overlay != null) {
			overlay.style.marginTop = varWinY * -0.25 + "px";
		}
	});
}