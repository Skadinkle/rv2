	// Edit Credits Member Page
function onCreditsMember(name) {

		// Load Credits Member Page
	onSettingsMenu("settings_creditsmember");

		// Get Credits Page Elements
	const member_name = document.getElementById("member-name");
	const member_desc1 = document.getElementById("member-desc1");
	const member_desc2 = document.getElementById("member-desc2");
	const member_link1 = document.getElementById("member-link1");
	const member_link2 = document.getElementById("member-link2");
	const member_link3 = document.getElementById("member-link3");
	const member_link4 = document.getElementById("member-link4");
	const member_link5 = document.getElementById("member-link5");

		// Add Member Directories
	const scadaddleElementArray = ["Scadaddle", "sup i is the manager man dude", "this is mistake", "Github", "The Index", "Youtube", "", "", "github.com/Skadinkle/", "school-chromebook663.github.io/", "www.youtube.com/@scadaddle9226", "", "", "initial", "initial", "initial", "none", "none"];
	const czarElementArray = ["The Czar Bomba", "a kilt-wearing tyrant", "yodelayheehoo", "", "", "", "", "", "", "", "", "", "", "none", "none", "none", "none", "none"];
	const pesElementArray = ["Pes", "loser says funny things", "yeah", "o-efwvrpxafiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiickkk", "", "", "", "", "sites.google.com/hhcsdstudents.org/o-efwvrpxafiiiiiiiiiiiiiiiiiii/home", "", "", "", "", "initial", "none", "none", "none", "none"];
	const mrspringsElementArray = ["mr springs", "local dumb found on youtube", "he do the funni", "Youtube (Main)", "Youtube(Alt)", "", "", "", "www.youtube.com/@mrsprings6006", "www.youtube.com/@Springbois-iu7re", "", "", "", "initial", "initial", "none", "none", "none"];
	const jackElementArray = ["Jack", "The Twisted One, very odd per say, and knows where you live and sleep at all times, also im good friend unless you stab me in the back like a dumb mother f****r...", "dont you regret life welp i do and now i lurk on the internet yay always waiting for you...", "Buy Me a Coffee", "Discord", "Patreon", "SCHOOL RESOURCES", "Youtube", "www.buymeacoffee.com/28rvds2gdnx", "discord.com/users/@TheTwistedOne#3211", "www.patreon.com/TheTwistedOne", "sites.google.com/hhcsdstudents.org/school-resources", "www.youtube.com/@TTO1980", "initial", "initial", "initial", "initial", "initial"];

		// Show Corresponding Member
	const memberElementArray = [member_name, member_desc1, member_desc2, member_link1, member_link2, member_link3, member_link4, member_link5];
	for (let i = 0; i < memberElementArray.length; ++i) {

			// Select Member Data
		let elem = memberElementArray[i];
		elem.style.display = "initial";
		if (name == "scadaddle") {
			memberDataArray = [...scadaddleElementArray];
		}
		if (name == "czar") {
			memberDataArray = [...czarElementArray];
		}
		if (name == "pes") {
			memberDataArray = [...pesElementArray];
		}
		if (name == "mrsprings") {
			memberDataArray = [...mrspringsElementArray];
		}
		if (name == "jack") {
			memberDataArray = [...jackElementArray];
		}

			// Load Data into Credits
		elem.innerHTML = memberDataArray[i];
		if (i > 2) {
			elem.href = "https://" + memberDataArray[i + 5];
			elem.style.display = memberDataArray[i + 10];
		}
	}
	document.getElementById("member-img").src = "./../assets/credits/" + name + ".png";
}