javascript:(function() { 
	var repeatCount = 0;
	console.log(getNodes(document));
	var elements = document.querySelectorAll("*");
	var spinElements = [];
	var elements = getNodes(document);
	for (var i = 3; i < elements.length; i++) {
		/* console.log(elements[i]); */
		if (elements[i].parentNode != null) {
			if (elements[i].nodeType == 3 && elements[i].parentNode.className != "spin" && elements[i].parentNode.tagName.toLowerCase() != "style") {
				/* console.log(elements[i]); */
				if (elements[i].parentNode != null) {
					var chars = elements[i].textContent.split("");
					var j = "";
					for (var cn = 0; cn < chars.length; cn++) {
						if((chars[cn].charCodeAt(0) == 32)) {
							/* j = j + chars[cn]; */
						} else {
							j = j + chars[cn];
							var replacementNode = document.createElement("span");
							replacementNode.innerHTML = j;
							replacementNode.style.display = "inline-block";
							replacementNode.style.color = "red";
							replacementNode.style.color = "hsl(" + Math.random() * 360 + ",100%,50%)";
							replacementNode.style.transform = "rotate(" + (Math.random() * 30 - 15) + "deg)";
							/* replacementNode.style.color = "red"; */
							elements[i].parentNode.insertBefore(replacementNode, elements[i]);
							spinElements = spinElements.concat([replacementNode]);
							j = "";
						}
					}
					var replacementNode = document.createElement("span");
					replacementNode.innerHTML = j;
					replacementNode.style.display = "inline-block";
					replacementNode.style.color = "red";
					replacementNode.style.color = "hsl(" + Math.random() * 360 + ",100%,50%)";
					replacementNode.style.transform = "rotate(" + (Math.random() * 30 - 15) + "deg)";
					/* replacementNode.style.color = "red"; */
					elements[i].parentNode.insertBefore(replacementNode, elements[i]);
					spinElements = spinElements.concat([replacementNode]);
				}
				elements[i].parentNode.removeChild(elements[i]);
			}
		}
		/* console.log(elements[i].nodeType); */
	}
	elements = spinElements;
	var intId;
	function getNodes(node) {
		var list = [node];
		if (node.hasChildNodes()) {
			list = [];
			for (var i = 0; i < node.childNodes.length; i++) {
				list = list.concat(getNodes(node.childNodes[i]));
			}
		}
		return list;
	}
	var counter = 0;
	function whattorep() {
		for (var i = 0; i < elements.length; i++) {
			var ce = elements[i];
			/* console.log(ce.nodeName.toLowerCase());
			if(elements[i].nodeType == 1) { */
				elements[i].style.display = "inline-block";
				elements[i].style.transform = "rotate(" + counter + "deg)"; /* playing around with styling is sooo fun.
				elements[i].style.color="hsl(" + Math.random() * 100 + "%, 100%, 50%)"; */
				elements[i].style.color = "hsl(" + (counter) + ", 100%, 50%)";
			/* } */
		}
		counter += 10;
		repeatCount += 10;
		if (repeatCount > 359) {
			stoprep();
		}
	}
	function stoprep() {
		clearInterval(intId);
		for (var i = 0; i < elements.length; i++) {
			var ce = elements[i];
			/* if(ce.type.toLowerCase() == 'text') {
				if(elements[i].nodeType == 1) { */
					ce.style.transform = ""; /* playing around with styling is sooo fun. */
					ce.style.color = ""; /* playing around with styling is sooo fun. */
					ce.style.display = "inline";
					ce.style.display = "inline-block";
					ce.style.color = "hsl(" + Math.random() * 360 + ",100%,50%)";
					ce.style.transform = "rotate(" + (Math.random() * 30 - 15) + "deg)";
				/*}
			}*/
		}
	}
	function runBookmarklet(target) {
		counter = 0;
		repeatCount = 0;
		intId = setInterval(whattorep, 1);	
	};
	runBookmarklet();
})();