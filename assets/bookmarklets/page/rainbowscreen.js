javascript:var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.createTemplateTagFirstArg = function(a) {
	return a.raw = a;
};
$jscomp.createTemplateTagFirstArgWithRaw = function(a, b) {
	a.raw = b;
	return a;
};
var incrementingNum = 0, colors = "red orange yellow green blue purple pink".split(" ");
setInterval(function() {
	6 <= incrementingNum ? incrementingNum = 0:incrementingNum++;
	for(var a = document.querySelectorAll("div"), b = 0; b < a.length; b++)a[b].style.backgroundColor = colors[incrementingNum], a[b].style.transition = "background-color 1s";
}, 1E3);