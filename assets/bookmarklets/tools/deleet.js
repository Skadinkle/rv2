javascript:(function() {
	var T = ( "| 1 m /\\/\\ m |\\/| w \\/\\/ w |/\\| h |-| h |~| u |_| m |v| n |\\| n /\\/ d |) f |= h }{ i ][ j _| j _] k |< k |{ l |_ p |> p [* r |2 v \\/ x >< y `/ a @ a 4 b 8 e 3 g 6 g 9 o 0 s 5 s $ t + t 7" ).split(" "), i, x, t;
	function R(t) {
		t = t.toLowerCase();
		for(i = 0; i < T.length; i += 2)while(t.indexOf(T[i + 1]) != -1)t = t.replace(T[i + 1], T[i]);
		return t;
	}
	function F(n, i) {
		t = n.tagName;
		if(i = n.data)n.data = R(i);
		if(t != "SCRIPT" && t != "STYLE")for(i = 0; x = n.childNodes[i]; ++i)F(x);
	}
	F(document);
})()