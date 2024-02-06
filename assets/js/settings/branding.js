	// Change Icon Based on Settings
function onSelectBranding(page) {

	if (page === "bing") {
		onHeadChange("Bing", "https://www.bing.com/sa/simg/favicon-trans-bg-blue-mg-png.png?adlt=strict");
	}

	if (page === "calculator") {
		onHeadChange("calculator.apps.chrome", "weh");
	}

	if (page === "chrome_web_store") {
		if (windowFilename == "index.html") {
			onHeadChange("Chrome Web Store", "https://ssl.gstatic.com/chrome/webstore/images/icon_48px.png");
		} else if (windowFilename == "settings.html") {
			onHeadChange("Chrome Web Store - My items", "https://ssl.gstatic.com/chrome/webstore/images/icon_48px.png");
		} else {
			onHeadChange("Chrome Web Store - Extensions", "https://ssl.gstatic.com/chrome/webstore/images/icon_48px.png");
		}
	}

	if (page === "clever") {
		if (windowFilename == "index.html") {
			onHeadChange("Clever | Log in", "https://assets.clever.com/launchpad/2693f135b/favicon.ico?1");
		} else if (windowFilename == "settings.html") {
			onHeadChange("Privacy policy | Clever", "https://www.clever.com/wp-content/uploads/2023/06/cropped-Favicon-512px-32x32.png");
		} else if (windowFilename == ".debug.html") {
			onHeadChange("Page not found – Clever", "https://www.clever.com/wp-content/uploads/2023/06/cropped-Favicon-512px-32x32.png");
		} else {
			onHeadChange("Clever | Portal", "https://assets.clever.com/launchpad/2693f135b/favicon.ico?1");
		}
	}

	if (page === "cursive") {
		if (windowFilename == "index.html") {
			onHeadChange("Cursive", "https://cursive.apps.chrome/assets/icon_192.png");
		} else if (windowFilename == ".debug.html") {
			onHeadChange("404 Not Found", "weh");
		} else{
			onHeadChange("Note - Cursive", "https://cursive.apps.chrome/assets/icon_192.png");
		}
	}

	if (page === "desmos") {
		if (windowFilename == ".debug.html") {
			onHeadChange("Desmos | Error 404: Page not found", "https://www.desmos.com/favicon.ico");
		} else {
			onHeadChange("Desmos | Graphing Calculator", "https://www.desmos.com/assets/img/apps/graphing/favicon.ico");
		}
	}

	if (page === "google") {
		if (windowFilename == "settings.html") {
			onHeadChange("Search Settings", "https://www.google.com/favicon.ico");
		} else if (windowFilename == ".debug.html") {
			onHeadChange("Error 404 (Not Found)!!1", "https://www.google.com/favicon.ico");
		} else {
			onHeadChange("Google", "https://www.google.com/favicon.ico");
		}
	}

	if (page === "google_classroom") {
		if (windowFilename == "settings.html") {
			onHeadChange("Classroom Settings", "https://ssl.gstatic.com/classroom/favicon.png");
		} else if (windowFilename == ".debug.html") {
			onHeadChange("Error 404 (Not Found)!!1", "https://www.google.com/favicon.ico");
		} else {
			onHeadChange("Home", "https://ssl.gstatic.com/classroom/favicon.png");
		}
	}

	if (page === "google_docs") {
		if (windowFilename == "index.html" || windowFilename == "settings.html") {
			onHeadChange("Google Docs", "https://ssl.gstatic.com/docs/documents/images/kix-favicon-2023q4.ico");
		} else if (windowFilename == ".debug.html") {
			onHeadChange("Not Found", "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png");
		} else {
			onHeadChange("Untitled document - Google Docs", "https://ssl.gstatic.com/docs/documents/images/kix-favicon-2023q4.ico");
		}
	}

	if (page === "google_drive") {
		if (windowFilename == "settings.html") {
			onHeadChange("Settings - Google Drive", "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png");
		} else if (windowFilename == ".debug.html") {
			onHeadChange("Not Found", "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png");
		} else {
			onHeadChange("My Drive - Google Drive", "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png");
		}
	}

	if (page === "google_forms") {
		if (windowFilename == "index.html" || windowFilename == "settings.html") {
			onHeadChange("Google Forms", "https://ssl.gstatic.com/docs/spreadsheets/forms/forms_icon_2023q4.ico");
		} else if (windowFilename == ".debug.html") {
			onHeadChange("Not Found", "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png");
		} else {
			onHeadChange("Untitled form - Google Forms", "https://ssl.gstatic.com/docs/spreadsheets/forms/forms_icon_2023q4.ico");
		}
	}

	if (page === "google_sheets") {
		if (windowFilename == "index.html" || windowFilename === "settings.html") {
			onHeadChange("Google Sheets", "https://ssl.gstatic.com/docs/spreadsheets/spreadsheets_2023q4.ico");
		} else if (windowFilename == ".debug.html") {
			onHeadChange("Not Found", "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png");
		} else {
			onHeadChange("Untitled spreadsheet - Google Sheets", "https://ssl.gstatic.com/docs/spreadsheets/spreadsheets_2023q4.ico");
		}
	}

	if (page === "google_sites") {
		if (windowFilename == "index.html") {
			onHeadChange("Google Sites", "https://ssl.gstatic.com/atari/images/public/sites-favicon-2023q4.ico");
		} else if (windowFilename == ".debug.html") {
			onHeadChange("Not Found", "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png");
		} else {
			onHeadChange("Untitled site - Google Sites", "https://ssl.gstatic.com/atari/images/public/sites-favicon-2023q4.ico");
		}
	}

	if (page === "google_slides") {
		if (windowFilename == "index.html" || windowFilename === "settings.html") {
			onHeadChange("Google Slides", "https://ssl.gstatic.com/docs/presentations/images/favicon-2023q4.ico");
		} else if (windowFilename == ".debug.html") {
			onHeadChange("Not Found", "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png");
		} else {
			onHeadChange("Untitled presentation - Google Slides", "https://ssl.gstatic.com/docs/presentations/images/favicon-2023q4.ico");
		}
	}

	if (page === "ixl") {
		if (windowFilename == "settings.html") {
			onHeadChange("Profile and settings", "https://www.ixl.com/ixl-favicon.png");
		} else if (windowFilename == ".debug.html") {
			onHeadChange("Sorry, page not found", "https://www.ixl.com/ixl-favicon.png");
		} else {
			onHeadChange("IXL | Dashboard", "https://www.ixl.com/ixl-favicon.png");
		}
	}

	if (page === "kahoot") {
		if (windowFilename == "index.html") {
			onHeadChange("Enter Game PIN - Kahoot!", "https://assets-cdn.kahoot.it/controller/v2/favicon.ico");
		} else if (windowFilename == "settings.html") {
			onHeadChange("Edit profile - Settings - Kahoot!", "https://assets-cdn.kahoot.it/builder/v2/favicon.ico");
		} else if (windowFilename == ".debug.html") {
			onHeadChange("Page not found | Kahoot!", "https://kahoot.com/wp-content/themes/kahoot2017/assets/img/favicon/favicon.ico");
		} else {
			onHeadChange("Kahoot!", "https://assets-cdn.kahoot.it/controller/v2/favicon.ico");
		}
	}

	if (page === "kami") {
		if (windowFilename == "settings.html") {
			onHeadChange("Kami - Settings", "https://web.kamihq.com/web/images/icon19.png");
		} else if (windowFilename == ".debug.html") {
			onHeadChange("web.kamihq.com/web/error", "https://web.kamihq.com/web/images/icon19.png");
		} else {
			onHeadChange("Kami", "https://web.kamihq.com/web/images/icon19.png");
		}
	}

	if (page === "progressbook") {
		if (windowFilename == "index.html") {
			onHeadChange("Sign In - ProgressBook", "https://pa.omeresa.net/Content/Images/favicon.ico");
		} else if (windowFilename == "settings.html") {
			onHeadChange("Activities - ProgressBook", "https://pa.omeresa.net/Content/Images/favicon.ico");
		} else if (windowFilename == ".debug.html") {
			onHeadChange("Error - ProgressBook", "https://pa.omeresa.net/Content/Images/favicon.ico");
		} else {
			onHeadChange("Planner - ProgressBook", "https://pa.omeresa.net/Content/Images/favicon.ico");
		}
	}

	if (page === "savvas_easybridge") {
		if (windowFilename == "index.html") {
			onHeadChange("Savvas Sign In", "https://sso.rumba.pk12ls.com/sso/favicon.ico");
		} else if (windowFilename == "settings.html") {
			onHeadChange("Savvas EasyBridge", "https://savvasrealize.com/favicon/favicon.ico");
		} else if (windowFilename == ".debug.html") {
			onHeadChange("Savvas EasyBridge", "https://easybridge-dashboard-web.savvaseasybridge.com/assets/savvas.ico");
		} else {
			onHeadChange("Savvas EasyBridge", "https://easybridge-dashboard-web.savvaseasybridge.com/assets/savvas.ico");
		}
	}

	if (page === "savvas_realize") {
		if (windowFilename == "index.html") {
			onHeadChange("Savvas Sign In", "https://sso.rumba.pk12ls.com/sso/favicon.ico");
		} else {
			onHeadChange("Savvas Realize", "https://www.savvasrealize.com/dashboard/assets/favicon/favicon.png");
		}
	}

	if (page === "schoolinks") {
		if (windowFilename == "index.html") {
			onHeadChange("Log in - SchooLinks", "https://app.schoolinks.com/assets-alpha/favicon.ico?7a54d0b7628e328ec629");
		} else if (windowFilename == "settings.html") {
			onHeadChange("Account Settings - SchooLinks", "https://app.schoolinks.com/assets-alpha/favicon.ico?7a54d0b7628e328ec629");
		} else {
			onHeadChange("SchooLinks", "https://app.schoolinks.com/assets-alpha/favicon.ico?7a54d0b7628e328ec629");
		}
	}

		// Save Branding Type
	localStorage.rv2_branding = page;
}

	// Set Default Value if None Set
if (localStorage.rv2_branding === undefined) {
	localStorage.rv2_branding = "clever";
}

	// Apply Option
onSelectBranding(localStorage.rv2_branding);