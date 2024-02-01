javascript:
var opt = 1;
alert("Keyboard commands: C = color picker. U = pen up. D = pen down. S = size. O = opacity. Reload to clear.");
var pen = 'none';
var size = 10;
function repeat(event) {
	(function() {
		var color = document.createElement('div');
		var body = document.getElementsByTagName('body')[0];
		body.appendChild(color);
		color.style.position = 'fixed';
		color.style.bottom = '0px';
		color.style.right = '0px';
		color.style.margin = '0px';
		color.style.paddingTop = '0px';
		color.style.width = '1366px';
		color.style.height = '20px';
		color.style.zIndex=10000;
		color.style.opacity=0.8;
		color.style.color = 'white';
		color.style.backgroundColor = 'black';
		color.style.border = '0px solid black';
		color.style.textAlign = 'center';
		color.style.cursor = 'pointer';
		color.id = 'color';
		color.style.display = 'circle';
		color.innerText = 'By dragonmaster73101';
		document.getElementById('me').addEventListener('click', function() {
			window.open('https://github.com/dragon731012');
		});
	}());
}
function mousemove(event) {
	var x = event.clientX;
	var y = event.clientY;
	x = x - 9 - size;
	y = y - 12 - size;
	(function() {
		var elem = document.createElement('div');
		var body = document.getElementsByTagName('body')[0];
		body.appendChild(elem);
		elem.style.position = 'fixed';
		elem.style.top = '' + y + 'px';
		elem.style.left = '' + x + 'px';
		elem.style.margin = '10px';
		elem.style.paddingTop = '10px';
		elem.style.width = '' + size + 'px';
		elem.style.height = '' + size + 'px';
		elem.style.zIndex = 10000;
		elem.style.opacity = opt;
		elem.style.color = '' + clr + '';
		elem.style.backgroundColor = '' + clr + '';
		elem.style.border = '0px solid white';
		elem.style.textAlign = 'center';
		elem.id = 'paint';
		elem.style.display = '' + pen + '';
		elem.innerText = '';
	}());
}
window.addEventListener("keydown", function(event) {
	if (event.key == "c") {
		clr = prompt("What color do you want? Must be very broad, and with no caps or special characters. Ex: blue.");
		elem.style.display = 'block';
	}
});
window.addEventListener("keydown", function(event) {
	if (event.key == "s") {
		size = prompt("What size do you want? No caps, letters, or special characters. Ex: 10.");
		elem.style.display = 'block';
	}
});
window.addEventListener("keydown", function(event) {
	if(event.key == "u") {
		pen = 'none';
	}
});
window.addEventListener("keydown", function(event) {
	if(event.key=="d") {
		pen='circle';
	}
});
window.addEventListener("keydown", function(event) {
	if(event.key=="o") {
		opt = prompt("What do you want the opacity to be? 1 to 0. 1 = none. 0 = a lot.");
	}
});
window.addEventListener('mousemove', mousemove);
repeat();