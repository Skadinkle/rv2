javascript:void(() => {
	try {
		prompt('Encoded text:', btoa(prompt('Encode text as base64:') ?? (function() {
			throw null;
		}())));
	} catch(e) {
		e && alert(e);
	}
})();