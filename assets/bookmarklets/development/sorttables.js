javascript:(function sort() {
	'use strict'; const localeCompareOptions = {
		usage: 'sort', sensitivity: 'base', numeric: true
	};
	const regexpForThousandsWithCommas = /^(\d{1,3}(?:,\d{3})+(?:\.\d+)?)$/;
	const regexpForThousandsWithPeriods = /^(\d{1,3}(?:\.\d{3})+(?:,\d+)?)$/;
	const regexpForThousandsWithSpaces = /^(\d{1,3}(?:\s\d{3})+(?:,\d+)?)$/;
	const regexpForDecimalsWithPeriod = /^(\d+(?:\.\d+)?)$/;
	const regexpForDecimalsWithComma = /^(\d+,\d+)$/; 
	const regexpForDateWithYearAndNumber = /\b(?:1[7-9][0-9]{2}|2[0-1][0-9]{2})\b.*[^0-9][0-9]{1,2}(?:[^0-9]|$)/;
	const regexpForDateWithNumberAndYear = /(?:^|[^0-9])[0-9]{1,2}[^0-9].*\b(?:1[7-9][0-9]{2}|2[0-1][0-9]{2})\b/;
	function isNumeric(value) {
		return !isNaN(value - parseFloat(value));
	}
	function extractTextContent(element, forceExtraction) {
		extractTextContent.cachedElements = extractTextContent.cachedElements || [];
		if (extractTextContent.cachedElements.indexOf(element) > -1) {
			return element.xxxJanTextContent;
		}
		extractTextContent.cachedElements.push(element);
		return element.xxxJanTextContent = Array.from(element.childNodes).map(node => {
			if (node instanceof HTMLImageElement || (node instanceof HTMLInputElement && node.type === 'image')) {
				if (node.hasAttribute('alt')) {
					return node.alt;
				}
				if (node.hasAttribute('title')) {
					return node.title;
				}
				if (node.hasAttribute('src')) {
					return node.src;
				}
			}
			if (node instanceof HTMLInputElement && (node.type === 'radio' || node.type === 'checkbox')) {
				return (node.checked ? '1' : '0') + node.value;
			}
			if (node instanceof HTMLInputElement || node instanceof HTMLTextAreaElement) {
				return node.value;
			}
			if (node instanceof HTMLSelectElement) {
				return node.options[node.selectedIndex] ? node.options[node.selectedIndex].label || node.options[node.selectedIndex].value : node.textContent;
			}
			if (node instanceof HTMLElement) {
				return extractTextContent(node, forceExtraction);
			}
			return node.textContent;
		}).join('');
	}
	function splitByNumbers(text) {
		splitByNumbers.cache = splitByNumbers.cache || {};
		if (splitByNumbers.cache[text]) {
			return splitByNumbers.cache[text];
		}
		let chunks = [];
		const coarseChunks = text.split(/([0-9]+(?:[0-9,.\s]*[0-9])?)/);
		coarseChunks.forEach((coarseChunk, i) => {
			if (i % 2 === 0) {
				return chunks.push(coarseChunk);
			}
			let number = undefined;
			let matches;
			if ((matches = coarseChunk.match(regexpForThousandsWithCommas))) {
				number = coarseChunk.trim().replace(/,/g, '');
			} else if ((matches = coarseChunk.match(regexpForThousandsWithPeriods))) {
				number = coarseChunk.trim().replace(/[,.]/g, char => char === ',' ? '.' : '');
			} else if ((matches = coarseChunk.match(regexpForThousandsWithSpaces))) {
				number = coarseChunk.trim().replace(/[,\s]/g, char => char === ',' ? '.' : '');
			} else if ((matches = coarseChunk.match(regexpForDecimalsWithPeriod))) {
				number = coarseChunk.trim();
			} else if ((matches = coarseChunk.match(regexpForDecimalsWithComma))) {
				number = coarseChunk.trim().replace(',', '.');
			}
			if (i === 1) {
				if ((matches = chunks[0].match(/(-|%E2%88%92|%E2%80%90)\s{0,3}$/)) && !text.match(/\.[^0-9.]+\s*$/)) {
					chunks[0] = chunks[0].slice(0, matches[0].length); number = (-number).toString();
				} else if ((matches = chunks[0].match(/^(\s*)(?:-|%E2%88%92|%E2%80%90)(\s{0,2}.{0,3}\s{0,2})$/))) {
					chunks[0] = matches[1] + matches[2]; number = (-number).toString();
				}
			}
			if (number !== undefined) {
				return chunks.push(number);
			}
			return chunks.push(coarseChunk);
		});
		return splitByNumbers.cache[text] = chunks;
	}
	function determineContentType(text, forceDetermination) {
		determineContentType.cache = determineContentType.cache || {};
		if (!forceDetermination && determineContentType.cache[text]) {
			return determineContentType.cache[text];
		}
		if (isNumeric(text)) {
			return determineContentType.cache[text] = 'number';
		}
		if (text.match(/^\s*https?:\/\//)) {
			return determineContentType.cache[text] = 'url';
		}
		let matches;
		if ( (matches = text.match(/^\s*(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\s*(\S|$)/)) && parseInt(matches[1], 10) < 256 && parseInt(matches[2], 10) < 256 && parseInt(matches[3], 10) < 256 && parseInt(matches[4], 10) < 256 ) {
			return determineContentType.cache[text] = 'ipv4';
		}
		if (text.match(regexpForDateWithYearAndNumber) || text.match(regexpForDateWithNumberAndYear)) {
			const date = new Date(text);
			const timestamp = date.getTime();
			if (!isNaN(timestamp)) {
				return determineContentType.cache[text] = 'date';
			}
		}
		return determineContentType.cache[text] = 'text';
	}
	function determineLocale(element) {
		if (element.lang) {
			return element.lang;
		}
		determineLocale.cachedElements = determineLocale.cachedElements || [];
		if (determineLocale.cachedElements.indexOf(element) > -1) {
			return element.xxxJanLocale;
		}
		determineLocale.cachedElements.push(element);
		const closestAncestorWithLang = element.closest('[lang]');
		if (closestAncestorWithLang) {
			return element.xxxJanLocale = closestAncestorWithLang.lang;
		}
		return element.xxxJanLocale = '';
	}
	function calculateSortKey(text, contentType, forceCalculation) {
		calculateSortKey.cache = calculateSortKey.cache || {};
		if (!forceCalculation && calculateSortKey.cache[text]) {
			return calculateSortKey.cache[text];
		}
		let matches;
		if (!contentType) {
			contentType = determineContentType(text, forceCalculation);
		}
		if (contentType === 'number') {
			const trimmedText = text.trim();
			let number = parseFloat(trimmedText);
			if (trimmedText.match(/^-?\s*0+/)) {
				const precision = number > 0 ? -1e-10 : 1e-10;
				number += precision * (trimmedText.length - number.toString().length);
			}
			return calculateSortKey.cache[text] = number;
		}
		if (contentType === 'url') {
			if ((matches = text.match(/^\s*(https?:\/\/)(?:www\.)?([^\/]+)(.*)/))) {
				const scheme = matches[1] === 'http://' ? 'r'  : 's'; const host = matches[2];
				const path = matches[3] || '';
				return calculateSortKey.cache[text] = host + scheme + path;
			}
		}
		if (contentType === 'ipv4') {
			const parts = text.split('.');
			return calculateSortKey.cache[text] = 0 + parseInt(parts[3]) + parseInt(parts[2]) * 256 + parseInt(parts[1]) * 256 * 256 + parseInt(parts[0]) * 256 * 256 * 256;
		}
		if (contentType === 'date') {
			if (text.length >= 8) {
				const date = new Date(text);
				const timestamp = date.getTime();
				if (!isNaN(timestamp)) {
					return calculateSortKey.cache[text] = date.toISOString();
				}
			}
		}
		return calculateSortKey.cache[text] = text;
	}
	function rowSorterAsc(row1, row2, colIndex, contentType) {
		const cell1 = row1.cells[colIndex];
		const cell2 = row2.cells[colIndex];
		if (!cell1 && cell2) {
			return -1;
		} else if (cell1 && !cell2) {
			return 1;
		}
		const cell1TextContent = extractTextContent(cell1);
		const cell2TextContent = extractTextContent(cell2);
		const cell1SortKey = calculateSortKey(cell1TextContent, contentType);
		const cell2SortKey = calculateSortKey(cell2TextContent, contentType);
		const locale = determineLocale(cell1) || determineLocale(cell2) || undefined;
		if (cell1TextContent === '' && cell2TextContent === '') {
			return cell1.innerHTML.localeCompare(cell2.innerHTML, locale, localeCompareOptions);
		}
		if (contentType === 'number' || contentType === 'ipv4') {
			const cell1SortKeyIsNumber = !isNaN(cell1SortKey) && typeof cell1SortKey === 'number';
			const cell2SortKeyIsNumber = !isNaN(cell2SortKey) && typeof cell2SortKey === 'number';
			if (cell1SortKeyIsNumber && cell2SortKeyIsNumber) {
				if (cell1SortKey === cell2SortKey) {
					return 0;
				} else if (cell1SortKey < cell2SortKey) {
					return -1;
				} else {
					return 1;
				}
			}
			if (cell1SortKeyIsNumber && !cell2SortKeyIsNumber) {
				return -1;
			} else if (!cell1SortKeyIsNumber && cell2SortKeyIsNumber) {
				return 1;
			} else {
				return cell1TextContent.localeCompare(cell2TextContent, locale, localeCompareOptions);
			}
		}
		if (contentType === 'date' || contentType === 'url') {
			return cell1SortKey.localeCompare(cell2SortKey, locale, localeCompareOptions);
		}
		const cell1Chunks = splitByNumbers(cell1TextContent);
		const cell2Chunks = splitByNumbers(cell2TextContent);
		let minNumChunks = Math.min(cell1Chunks.length, cell2Chunks.length);
		let i;
		for (let i = 0; i < minNumChunks; i++) {
			const chunk1 = cell1Chunks[i];
			const chunk2 = cell2Chunks[i];
			let localeComparison;
			if (chunk1 === chunk2 || (localeComparison = chunk1.trim().localeCompare(chunk2.trim(), locale, localeCompareOptions)) === 0) {
				continue;
			}
			if (i % 2 === 1 && isNumeric(chunk1) && isNumeric(chunk2)) {
				const float1 = parseFloat(chunk1);
				const float2 = parseFloat(chunk2);
				if (float1 === float2) {
					return chunk1.localeCompare(chunk2, locale, localeCompareOptions);
				}
				return float1 < float2 ? -1 : 1;
			}
			return localeComparison;
		}
		return cell1TextContent.localeCompare(cell2TextContent, locale, localeCompareOptions);
	}
	function rowSorterDesc(row1, row2, colIndex, contentType) {
		return rowSorterAsc(row2, row1, colIndex, contentType);
	}
	function clearCaches() {
		splitByNumbers.cache = {};
		calculateSortKey.cache = {};
		determineContentType.cache = {};
		(extractTextContent.cachedElements || []).forEach(element => delete element.xxxJanTextContent);
		extractTextContent.cachedElements = [];
		(determineLocale.cachedElements || []).forEach(element => delete element.xxxJanLocale);
		determineLocale.cachedElements = [];
	}
	function execute(document) {
		Array.from(document.querySelectorAll('table')).forEach(table => {
			if (!table.tBodies.length || !table.tBodies[0].rows.length) {
				return;
			}
			const headerRow = table.tHead && table.tHead.rows[0] && table.tHead.rows[0].cells.length ? table.tHead.rows[0] : table.tBodies[0].rows[0];
			const sortingIndicators = [];
			Array.from(headerRow.cells).forEach((headerCell, colIndex) => {
				if (!headerCell.xxxJanSortingIndicator) {
					const sortingIndicator = document.createElementNS('http://www.w3.org/1999/xhtml', 'span');
					sortingIndicator.textContent = '%E2%96%9A';
					sortingIndicators.push(sortingIndicator);
					if (getComputedStyle(headerCell).position === 'static') {
						headerCell.style.position = 'relative';
					}
					sortingIndicator.setAttribute('style', `display: inline-block; position: absolute; right: 0; top: 0; min-width: 1.5em; min-height: 3ex; text-align: right; opacity: 0.5; text-shadow: -2px 2px 4px black, 2px 2px 4px white; cursor: pointer; `);
					const onFocus = _ => sortingIndicator.style.opacity = 1;
					const onBlur = _ => sortingIndicator.style.opacity = 0.5;
					['focus', 'mouseenter'].forEach(eventName => sortingIndicator.addEventListener(eventName, onFocus));
					['blur', 'mouseleave'].forEach(eventName => sortingIndicator.addEventListener(eventName, onBlur));
					sortingIndicator.tabIndex = 0;
					headerCell.xxxJanSortingIndicator = headerCell.appendChild(sortingIndicator);
				}
				const handler = function (event) {
					headerCell.xxxJanSortingDirection = headerCell.xxxJanSortingDirection === 'asc' ? 'desc' : 'asc';
					sortingIndicators.forEach(indicator => indicator.textContent = '%E2%96%9A');
					headerCell.xxxJanSortingIndicator.textContent = headerCell.xxxJanSortingDirection === 'asc' ? '%E2%96%B2' : '%E2%96%BC';  Array.from(table.tBodies).forEach(tBody => {
						const skipFirstRow = headerRow.closest('tbody') === tBody;
						if (tBody.rows.length === (skipFirstRow ? 1 : 0)) {
							return;
						}
						if (!headerCell.xxxJanContentType) {
							const numRowsToCheck = Math.min(tBody.rows.length, 50);
							const countersPerContentType = {};
							let rowIndex;
							for (rowIndex = (skipFirstRow ? 1 : 0);
							rowIndex < numRowsToCheck; rowIndex++) {
								const cell = tBody.rows[rowIndex].cells[colIndex];
								if (!cell) {
									continue;
								}
								const contentType = determineContentType(extractTextContent(cell));
								countersPerContentType[contentType] = countersPerContentType[contentType] ? countersPerContentType[contentType] + 1 : 1;
							}
							const mostCommonContentType = Object.entries(countersPerContentType) .sort((a, b) => a[1] === b[1] ? 0 : (a[1] < b[1] ? -1 : 1)) .pop()[0];
							headerCell.xxxJanContentType = mostCommonContentType;
						}
						const rowSorter = headerCell.xxxJanSortingDirection === 'asc' ? rowSorterAsc : rowSorterDesc;
						let sortedRows = Array.from(tBody.rows) .slice(skipFirstRow ? 1 : 0) .sort((row1, row2) => rowSorter(row1, row2, colIndex, headerCell.xxxJanContentType));
						sortedRows.forEach((row, sortedRowIndex) => {
							row.parentNode.insertBefore(row, row.parentNode.rows[sortedRowIndex + 1] || null);
						});
					});
					clearCaches();
				};
				headerCell.addEventListener('click', handler);
				headerCell.addEventListener('keypress', event => (event.code === 13 || event.keyCode === 13) && handler(event));
			});
		});
		try {
			Array.from(document.querySelectorAll('frame, iframe, object[type^="text/html"], object[type^="application/xhtml+xml"]')).forEach( elem => {
				try {
					execute(elem.contentDocument)
				}
				catch (e) {}
			});
		}
		catch (e) {}
	}
	execute(document);
})();