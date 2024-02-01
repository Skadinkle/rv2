	// Add on Every Page Except Debug
if (windowFilename != ".debug.html") {
	const themeEffectArray = ["snow"];
	for (let i = 0; i < themeEffectArray.length; ++i) {
		onAddAsset("themes/" + themeEffectArray[i], "script");
	}
}