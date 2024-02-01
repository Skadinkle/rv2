javascript:alert("Slope, slope intercept, point slope, and standard form finder.\nNotes: two - make a +");
var x1 = prompt('What is the X-coordinate of the first point?');
var y1 = prompt('What is the Y-coordinate of the first point?');
var x2 = prompt('What is the X-coordinate of the second point?');
var y2 = prompt('What is the Y-coordinate of the second point?');
var st = y2 - y1;
var sb = x2 - x1;
alert('The slope of the line is ' + st + '/' + sb + '.');
alert('Point slope form is y-' + y1 + '=' + st + '/' + sb + '(x-' + x1 + ')');
var left = 0;
var right = st / sb * x1 - y1;
alert('The slope intercept form is y=' + st + '/' + sb + 'x- ' + right + '.');
var e = st / sb;
var l = e%1;
(function() {
	if (e > 0) {
		e = e *-1;
		if (l != 1) {
			e = e *sb;
			right = right * sb;
			alert("The standard form is - " + e + "x+" + sb + "y= - " + right + ".");
		}
	} else if (l != 1) {
		e = e * sb;
		right = right * sb;
		if (e > 0) {
			e = e * -1;
		}
		alert("The standard form is - " + e + "x+y=" + right + ".");
	} else {
		alert("The standard form is - " + e + "x+y=" + right + ".");
	}
})();