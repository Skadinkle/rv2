javascript:(function dumphtml() {
	var stringifiers = {};
	stringifiers[Node.ELEMENT_NODE] = function handleElementNode(node) {
		return node.outerHTML;
	};
	stringifiers[Node.ATTRIBUTE_NODE] = function handleAttributeNode(node) {
		if (typeof console !== 'undefined' && console.debug) {
			console.debug('dump: unexpected ATTRIBUTE_NODE');
		}
		return '<!-- Unhandled ATTRIBUTE_NODE -->';
	};
	stringifiers[Node.TEXT_NODE] = function handleTextNode(node) {
		var tempDiv = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
		tempDiv.textContent = node.textContent;
		return tempDiv.innerHTML;
	};
	stringifiers[Node.CDATA_SECTION_NODE] = function handleCdataSectionNode(node) {
		return '<![CDATA[' + node.textContent + ']]>';
	};
	stringifiers[Node.ENTITY_REFERENCE_NODE] = function handleEntityReferenceNode(node) {
		if (typeof console !== 'undefined' && console.debug) {
			console.debug('dump: unexpected ENTITY_REFERENCE_NODE');
		}
		return '<!-- Unhandled ENTITY_REFERENCE_NODE -->';
	};
	stringifiers[Node.ENTITY_NODE] = function handleEntityNode(node) {
		if (typeof console !== 'undefined' && console.debug) {
			console.debug('dump: unexpected ENTITY_NODE');
		}
		return '<!-- Unhandled ENTITY_NODE -->';
	};
	stringifiers[Node.PROCESSING_INSTRUCTION_NODE] = function handleProcessingInstructionNode(node) {
		if (typeof console !== 'undefined' && console.debug) {
			console.debug('dump: unexpected PROCESSING_INSTRUCTION_NODE');
		}
		return '<!-- Unhandled PROCESSING_INSTRUCTION_NODE -->';
	};
	stringifiers[Node.COMMENT_NODE] = function handleCommentNode(node) {
		return '<!--' + node.data + '-->';
	};
	stringifiers[Node.DOCUMENT_NODE] = function handleDocumentNode(node) {
		if (typeof console !== 'undefined' && console.debug) {
			console.debug('dump: unexpected DOCUMENT_NODE');
		}
		return '<!-- Unhandled DOCUMENT_NODE -->';
	};
	stringifiers[Node.DOCUMENT_TYPE_NODE] = function handleDocumentTypeNode(node) {
		var docTypeParts = ['DOCTYPE', node.name];
		if (node.publicId) {
			docTypeParts.push('PUBLIC', node.publicId);
		}
		if (node.systemId) {
			docTypeParts.push(node.systemId);
		};
		return '<!' + docTypeParts.join(' ') + '>';
	};
	stringifiers[Node.DOCUMENT_FRAGMENT_NODE] = function handleDocumentFragmentNode(node) {
		if (typeof console !== 'undefined' && console.debug) {
			console.debug('dump: unexpected DOCUMENT_FRAGMENT_NODE');
		}
		return '<!-- Unhandled DOCUMENT_FRAGMENT_NODE -->';
	};
	stringifiers[Node.NOTATION_NODE] = function handleNotationNode(node) {
		if (typeof console !== 'undefined' && console.debug) {
			console.debug('dump: unexpected NOTATION_NODE');
		}
		return '<!-- Unhandled NOTATION_NODE -->';
	};
	var htmlParts = [];
	var baseHref;
	if (document.documentElement.nodeName.toUpperCase() === 'HTML' && !document.querySelector('base[href]')) {
		baseHref = document.createElementNS('http://www.w3.org/1999/xhtml', 'base');
		baseHref.href = document.location; document.head.appendChild(baseHref);
	}
	Array.prototype.slice.call(document.childNodes).forEach(function (node) {
		if (stringifiers[node.nodeType]) {
			htmlParts.push(stringifiers[node.nodeType](node));
		}
	});
	if (baseHref) {
		baseHref.parentNode.removeChild(baseHref);
	}
	var html = htmlParts.join('\n');
	var newWindow;
	if ((newWindow = window.open(''))) {
		newWindow.document.open();
		newWindow.document.write('<plaintext>' + html);
		newWindow.document.close();
	}
})();