	// Correct Footer Each Second
onUpdateFooter("chicken sandwich");
window.setInterval(onUpdateFooter, 1000);

	// Update the Footer Content
function onUpdateFooter(updateType) {

		// Get Footer Info
	var footerVersion = "v2.0 Alpha";
	var footerGithub = "<a href='https://github.com/Skadinkle/rv2'>Github</a>";
	var footerDiscord = "<a href='https://discord.gg/fvnFvTwgaA'>Discord</a>"
	var footerForm = "<a href='https://forms.gle/7VkWcQj1Sue1Zdit9'>Submit a Site</a>";
	var footerPadding = "<a id='footer-padding'> || </a>"
	var curDate = new Date();
	var year = curDate.getFullYear();
	var curHour = curDate.getHours();
	var curMin = curDate.getMinutes();
	var curSec = curDate.getSeconds();
	var curPeriod = "AM";

		// Convert Time to Better Format
	if (curHour > 11) {
		curPeriod = "PM";
	}
	if (curHour > 12) {
		curHour = curHour - 12;
	}
	if (curHour == 0) {
		curHour = 12;
	}
	if (curMin < 10) {
		curMin = "0" + curMin
	}
	if (curSec < 10) {
		curSec = "0" + curSec;
	}

		// Add Time to String
	var time = curHour + ":" + curMin + ":" + curSec + "" + curPeriod;

		// Replace Previous Content
	if (updateType == undefined && updateType == null) {
		var footTime = document.getElementById("footer-time");
		footTime.innerHTML = time;
	} else {
		var footer = document.getElementsByTagName("footer")[0];
		if (footer == null) {
			footer = document.createElement("footer");
			document.body.appendChild(footer);
		}
		footer.innerHTML = "<a id='footer-time'>" + time + "</a>" + footerPadding + "<a id='footer-brand'>RATS " + footerVersion + " " + year + "</a>" + footerPadding + footerGithub + footerPadding + footerDiscord + footerPadding + footerForm;
	}
}