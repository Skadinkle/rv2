javascript:(function rmi() {
	let processed = new Set();
	function isEmpty(node) {
		return !node || (!node.childElementCount && (typeof node.textContent !== 'string' || node.textContent.trim() === ''));
	}
	(function execute(document) {
		if (!document || typeof document.querySelectorAll !== 'function' || processed.has(document)) {
			return;
		}
		processed.add(document);
		Array.from(document.querySelectorAll('iframe:not(#xxxJanConsole)')).forEach(iframe => {
			let shouldDelete = false;
			try {
				shouldDelete = iframe.contentDocument === null || iframe.src === '';
			}
			catch (e) {
				shouldDelete = true;
			}
			if (shouldDelete) {
				console.log('rm IFRAMEs: found suspicious IFRAME to delete: ', iframe);
				let parentNode = iframe.parentNode; iframe.remove();
				while (parentNode && isEmpty(parentNode)) {
					console.log('rm IFRAMEs: found empty parent node to delete: ', parentNode);
					let oldParentNode = parentNode; parentNode = parentNode.parentNode; oldParentNode.remove();
				}
			} else {
				console.log('rm IFRAMEs: found non-suspicious IFRAME to recurse into: ', iframe);
				execute(iframe.contentDocument);
			}
		});
	})
	(document);
})();