if (windowFilename == "index.html") {

		// Old Bing Rat
	if (Math.random() < 0.01) {
		document.getElementById("index-rat").src = "http://www.pngall.com/wp-content/uploads/2016/03/Rat-PNG-Picture.png";
	}

		// Click on Index Logo
	document.getElementById("funky-site-logo").addEventListener("click", function() {
		if (window.confirm("You're already on the homepage.") == false) {
			if (window.confirm("Did you just cancel me?") == false) {
				onLogoClickLoop();
			} else {
				window.alert("I thought so...");
			}
		}
	});
	function onLogoClickLoop() { // Loop Infinitely
		if(window.confirm("Stop.") == false) {
			onLogoClickLoop();
		} else {
			window.alert("Thank you.");
		}
	}
}

	// Minceraft Text
if (windowFilename == "minecraft.html") {
	if (Math.random() < 0.1) {
		document.getElementById("funky-title-large").innerHTML = "Minceraft";
	}
}

	// Clicker Counter
if (windowFilename == "settings.html") {
	numClicked = 0;
	function onSupClick() {
		numClicked = numClicked + 1; // Increment Counter
		settings_homeh2 = document.getElementById("settings_homeh2");
		if (numClicked < 14) {
			settings_homeh2.innerHTML = settings_homeh2.innerHTML + " " + settings_homeh2.innerHTML;
		}
		var homedesc = document.getElementById("settings_homedesc");
		const supNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
		const supQuoteArray = ["Why did you click me?", "Stop.", "stop", "please", "it's getting worse", "it is spreading quicker", "dear god", "HELP", "ℍ𝔼𝕃ℙ", "ꫝꫀꪶρ", "🅷🅴🅻🅿", "​🇭​​🇪​​🇱​​🇵​", "CAN YOU EVEN READ THIS?"];
		for (let i = 0; i < supNumArray.length; ++i) {
			if (numClicked == supNumArray[i]) {
				homedesc.innerHTML = supQuoteArray[i];
			}
		}
	}
}

	// Jumpscare User
/*window.addEventListener("load", function() {
	if (Math.random() < 0.01 || (Math.random() < 0.05 && this.localStorage.rv2_theme == "spinetingler")) {
		jumpscare = document.createElement("img");
		jumpscare.src = "https://static.wikia.nocookie.net/freddy-fazbears-pizza/images/b/b9/FNAF2OldFoxyJumpscare.gif/revision/latest/";
		jumpscare.id = "jumpscare";
		document.body.appendChild(jumpscare);
		console.log("Did I get'cha?");
	}
});*/