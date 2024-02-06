javascript:void function() {
	function e(e) {
		var t = e.getBoundingClientRect(), i = window.innerWidth || doc.documentElement.clientWidth, n = window.innerHeight || doc.documentElement.clientHeight, o = function(e,t) {
			return document.elementFromPoint(e,t);
		};
		return t.right < 0 || t.bottom < 0 || t.left > i || t.top > n?!1:e.contains(o(t.left, t.top)) || e.contains(o(t.right, t.top)) || e.contains(o(t.right, t.bottom)) || e.contains(o(t.left, t.bottom));
	}
	function t(e) {
		var t = document.createElement("template");
		return e = e.trim(), t.innerHTML = e, t.content.firstChild;
	}
	var i = "1.3";
	"undefined" == typeof window.isElementVisible && (window.isElementVisible = e),
	document.querySelector("#viewimage_version") || document.body.appendChild(t('<a id="viewimage_version" href="https://d3vr.github.io/viewimage/" style="position:fixed; z-index:999; top: 0; right:0;"><img src="https://d3vr.me/viewimage/version.php?v=' + i + '" height="30"></a>'));
	var n = document.querySelectorAll("#irc_cc>div[data-item-id]");
	n.forEach(function(e) {
		if (isElementVisible(e)) {
			var t = e.dataset.itemId, i = (document.getElementById(t), document.evaluate('//*[text()[contains(.,"' + t + '")]]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue);
			i = i?i.childNodes[0].nodeValue:document.querySelectorAll("[data-item-id='"+t+"']")[1].childNodes[1].childNodes[0].nodeValue,
			window.open(JSON.parse(i).ou);
		}
	})
}();