	// Change Video In Player
function onChangeVideo(src, type) {
	var video_div = document.getElementById("video-div");

		// Regular Videos
	if (type == undefined && type == null) {
		video_div.innerHTML = '<video id="video-player" controls="auto" autoplay height="auto" poster="./../../assets/icons/transparent.gif" preload="none"><source id="video-source" src="https://' + src + '" type="video/mp4"></video>';
	}

		// Special Files
	if (type == "drive") {
		video_div.innerHTML = '<iframe id="video-player" src="https://drive.google.com/file/d/' + src +'/preview"></iframe>';
	}
}