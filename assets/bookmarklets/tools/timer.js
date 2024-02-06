javascript:(function() {
	var counter, count, max_count;
	function start_timer() {
		null != counter && clearInterval(counter);
		var t = timer_input.value.split(":"), e = parseInt(t[0]), r = parseInt(t[1]);
		max_count = count = 60 * e + r, timer_text.style.color = "black", rad_timer.style.backgroundColor = "white", timer_progress_bar.style.width = "0%", counter = setInterval(timer, 1e3);
	}
	function timer() {
		--count, timer_progress_bar.style.width = 100 - count / max_count * 100 + "%";
		var t = Math.floor(count / 60), e = "" + count, r = 0.25 * max_count;
		count < 0.1 * max_count ? rad_timer.style.backgroundColor = "red":count < r && (rad_timer.style.backgroundColor = "yellow"), count <= 0 ? (timer_text.textContent = "Time's Up!", timer_text.style.color = "red", rad_timer.style.backgroundColor = "white", clearInterval(counter)):timer_text.textContent = t + ":" + e.padStart(2, "0");
	}
	function dragElement(e) {
		var r = 0, o = 0, n = 0, i = 0;
		function t(t) {
			(t = t || window.event).preventDefault(), n = t.clientX, i = t.clientY, document.onmouseup = d, document.onmousemove = m;
		}
		function m(t) {
			(t = t || window.event).preventDefault(), r = n - t.clientX, o = i - t.clientY, n = t.clientX, i = t.clientY, e.style.top = e.offsetTop - o + "px", e.style.left = e.offsetLeft - r + "px";
		}
		function d() {
			document.onmouseup = null, document.onmousemove = null;
		}
		document.getElementById(e.id + "header") ? document.getElementById(e.id + "header").onmousedown = t:e.onmousedown = t;
	}
	rad_timer = document.createElement("div"), rad_timer.id = "rad_timer", rad_timer.style = "position: absolute; left: 100px; top: 100px; z-index: 1000000; background: white; padding: 5px; border-radius: 3px; border: 1px solid black;", timer_text = document.createElement("div"), timer_text.id = "rad_timerheader", timer_text.style = "width: auto;", timer_text.textContent = "Time's Up!", timer_text.style.cursor = "move", timer_input = document.createElement("input"), timer_input.id = "timer_input", timer_input.style = "width:100px;", timer_input.value = "0:30", timer_button = document.createElement("button"), timer_button.id = "timer_button", timer_button.style = "", timer_button.textContent = "Go!", timer_button.onclick = start_timer, timer_close=document.createElement("div"), timer_close.id = "timer_close", timer_close.style = "position: absolute; right: 5px; top: 0; cursor: pointer;", timer_close.textContent = "%E2%98%92", timer_close.onclick = function() {
		document.body.removeChild(rad_timer), null != counter && clearInterval(counter);
	}, timer_progress_bar = document.createElement("span"), timer_progress_bar.id = "timer_progress_bar", timer_progress_bar.style = "width: 100%; height: 100%; background-color: black; display: block;", timer_progress = document.createElement("div"), timer_progress.id = "timer_progress", timer_progress.style = "width: 100%; height: 5px; background-color: beige; margin-top: 3px;", timer_progress.appendChild(timer_progress_bar), rad_timer.appendChild(timer_text), rad_timer.appendChild(timer_input), rad_timer.appendChild(timer_button), rad_timer.appendChild(timer_close), rad_timer.appendChild(timer_progress), document.body.appendChild(rad_timer), timer_button.onclick = start_timer, dragElement(document.getElementById("rad_timer"));
})();