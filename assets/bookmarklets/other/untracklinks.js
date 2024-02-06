javascript:(function untrack() {
	'use strict';
	const parameterPatterns = ['utm_[^=]*', 'gclid', 'dclid', '_ga', '_gl',  'fbclid', '__cft__(([|\\[)[^=]*)?', '__tn__', '__eep__',  'igshid', 'ig_rid',  'twclid',  'msclkid',  'mc_eid',  '__hsfp', '__hssc', '__hstc', '_hsenc', 'hsCtaTracking',  '__s',  'mkt_tok',  'ml_subscriber', 'ml_subscriber_hash',  'oly_anon_id', 'oly_enc_id',  'omnisendContactID',  'obOrigUrl', 'outbrainclickid',  '__cf_chl_jschl_tk__', '__cf_chl_captcha_tk__',  'rb_clickid',  's_cid', 'ss_[^=]*',  'vero_conv', 'vero_id',  'wickedid',  'yclid', 'ymclid', '_openstat',  'zanpid' ];
	const hrefRegexp = new RegExp('[?&](' + parameterPatterns.join('|') + ')=');
	const parameterRegexp = new RegExp('^(' + parameterPatterns.join('|') + ')$');
	const uriPatternsForWhichToDeleteAllParameters = [   /https?:\/\/(www\.)?nytimes\.com\/[^?]*\.html/,   /https?:\/\/(www\.)?tiktok\.com\/[^?]*\/video\/\d+/,   /https?:\/\/(www\.)?twitter\.com\/.*/, ];
	const hrefRegexpForWhichToDeleteAllParameters = new RegExp('(?:' + uriPatternsForWhichToDeleteAllParameters .map(regexp => regexp.toString().replace(/^\/(.*)\/[^\/]*$/, '$1')) .join('|') + ')\\?');
	const linkRedirectors = {
		'a[href^="https://l.facebook.com/l.php?"], a[href^="https://lm.facebook.com/l.php?"]': a => {
			a.href = new URLSearchParams(new URL(a.href).search)?.get('u') ?? a.href;
		}, 'a[href^="https://l.instagram.com/?"]': a => {
			a.href = new URLSearchParams(new URL(a.href).search)?.get('u') ?? a.href;
		}, 'a[href^="https://www.google."][href*="/url?"], a[href^="http://www.google."][href*="/url?"], a[href^="/url?"]': a => {
			if (a.getAttribute('href').indexOf('/url?') === 0 && !a.hostname.match(/^www\.google\.(com?\.)?[^.]+$/)) {
				return;
			}
			const usp = new URLSearchParams(new URL(a.href).search);
			a.href = usp.get('url') ?? usp.get('q') ?? a.href;
		}, 'a[href^="https://translate.google."][href*="/website?"][href*="u="]': a => {
			const usp = new URLSearchParams(new URL(a.href).search);
			a.href = usp.get('u') ?? a.href;
		}, 'a[href^="https://www.youtube.com/redirect?"][href*="q="]': a => {
			let targetUri = new URLSearchParams(new URL(a.href).search)?.get('q');
			if (!targetUri) {
				return;
			}
			if (!targetUri.match(/^[^\/]+:/)) {
				targetUri = `https://${targetUri}`;
			}
			a.href = targetUri;
		}, 'a[href^="https://t.co/"], a[href^="http://t.co/"]': a => {
			let possibleUri = a.textContent;
			if (a.dataset.testid === 'UserUrl' && possibleUri.indexOf('%E2%80%A6') === -1) {
				if (possibleUri.indexOf('/') === -1) {
					possibleUri += '/';
				}
				if (!possibleUri.match(/^https?:\/\//)) {
					possibleUri = `${a.protocol}//${possibleUri}`;
				}
			}
			possibleUri = possibleUri.replace(/(^%E2%80%A6|%E2%80%A6$)/g, '');
			if (!possibleUri.match(/^https?:\/\//)) {
				return;
			}
			a.href = a.textContent = possibleUri;
		}, 'a[href^="https://www.linkedin.com/redir/redirect?"]': a => {
			a.href = new URLSearchParams(new URL(a.href).search)?.get('url') ?? a.href;
		}, 'a[href^="https://www.linkedin.com/signup/cold-join?"][href*="session_redirect="]': a => {
			a.href = new URLSearchParams(new URL(a.href).search)?.get('session_redirect') ?? a.href;
		}, 'a[href^="https://flight.beehiiv.net/v2/clicks/eyJ"]': a => {
			const parts = a.pathname.split('.');
			try {
				const originalUrl = JSON.parse(atob(parts[1].replaceAll('_', '/').replaceAll('-', '+'))).url;
				if (originalUrl) {
					a.href = originalUrl;
				}
			}
			catch (e) {
				console.log('untrack: error while decoding URL for link: ', a, e);
			}
		}, 'a[href*="app.link"][href*="fallback_url"]': a => {
			a.href = new URLSearchParams(new URL(a.href).search)?.get('$fallback_url') ?? a.href;
		}, 'a[href^="https://out.reddit.com/"][href*="url="]': a => {
			a.href = new URLSearchParams(new URL(a.href).search)?.get('url') ?? a.href;
		}, 'a[href^="https://api.ffm.to/sl/e/c/"][href*="cd="]': a => {
			try {
				const originalUrl = JSON.parse(atob(new URL(a.href).searchParams.get('cd').replaceAll('_', '/').replaceAll('-', '+'))).destUrl;
				if (originalUrl) {
					if (a.textContent.trim() === a.href) {
						a.textContent = originalUrl;
					}
					a.href = originalUrl;
				}
			}
			catch (e) {
				console.log('untrack: error while decoding URL for link: ', a, e);
			}
		}, 'a[href^="https://urldefense.proofpoint.com/v2/url?"][href*="u="]': a => {
			try {
				const originalUrl = decodeURIComponent(new URL(a.href).searchParams.get('u').replaceAll('_', '/').replaceAll('-', '%'));
				if (originalUrl) {
					if (a.textContent.trim() === a.href) {
						a.textContent = originalUrl;
					}
					a.href = originalUrl;
				}
			}
			catch (e) {
				console.log('untrack: error while decoding URL for link: ', a, e);
			}
		}, 'a[href^="https://disq.us/url?"][href*="url="], a[href^="http://disq.us/url?"][href*="url="]': a => {
			let originalUrl = new URLSearchParams(new URL(a.href).search)?.get('url');
			if (originalUrl) {
				originalUrl = originalUrl.replace(/:[^:\/]+$/, '');
				a.href = originalUrl;
			}
		}, 'a[data-xxx-jan-original-href]': a => {
			if (a.href !== a.dataset.xxxJanOriginalHref) {
				a.href = a.dataset.xxxJanOriginalHref;
			}
		}
	};
	function cleanQueryString(queryString) {
		return new URLSearchParams( Array.from(new URLSearchParams(queryString)) .filter(([key, value]) => !key.match(parameterRegexp)) ).toString();
	}
	function cleanQueryStringForHrefAttribute(element) {
		try {
			const textEqualsUrl = element.textContent.trim() === element.href.trim();
			const oldUrl = new URL(element.href);
			const newUrl = new URL(element.href);
			newUrl.search = cleanQueryString(oldUrl.search);
			if (oldUrl.toString() !== newUrl.toString()) {
				element.href = newUrl; if (textEqualsUrl) {
					element.textContent = newUrl;
				}
			}
		}
		catch (e) {}
	}
	function execute(document) {
		const oldUrl = new URL(document.location);
		const newUrl = new URL(document.location);
		newUrl.search = cleanQueryString(oldUrl.search);
		if (oldUrl.toString() !== newUrl.toString()) {
			document.defaultView.history.replaceState({}, document.title, newUrl);
		}
		document.querySelectorAll('.OUTBRAIN').forEach(element => {
			element.querySelectorAll('a').forEach(a => {
				Array.from(a.attributes).forEach(attribute => {
					if (attribute.name.match(/^on/i)) {
						a.removeAttribute(attribute.name);
					}
				});
				const usp = new URLSearchParams(a.search);
				Array.from(usp).forEach(([name, value]) => {
					if (value.match(/^\$.*\$$/)) { usp.delete(name);
					}
				});
				a.search = usp.toString();
			});
			element.outerHTML = element.outerHTML;
		});
		document.querySelectorAll('[data-text-ad] a[href]').forEach(a => {
			if (a.dataset.xxxJanOriginalHref) {
				return;
			}
			let isGoogleAd = Object.entries(a.dataset).some( ([name, value]) => value.indexOf('https://www.googleadservices.com/pagead') === 0 || value.indexOf('https://www.google.com/aclk') === 0 );
			if (isGoogleAd) {
				a.dataset.xxxJanOriginalHref = a.href;
			}
		});
		Object.entries(linkRedirectors).forEach( ([selector, callback]) => document.querySelectorAll(selector).forEach(element => callback(element)) );
		const allAHrefs = Array.from(document.querySelectorAll('a[href]'));
		allAHrefs .filter(a => a.href.match(hrefRegexpForWhichToDeleteAllParameters)) .forEach(a => a.search = '');
		allAHrefs .filter(a => a.href.match(hrefRegexp)) .forEach(a => cleanQueryStringForHrefAttribute(a));
		new MutationObserver(mutations => {
			mutations.forEach(mutation => {
				cleanQueryStringForHrefAttribute(mutation.target);
				Object.entries(linkRedirectors).forEach( ([selector, callback]) => {
					mutation.target.matches(selector) && callback(mutation.target);
				});
			});
		}).observe(document, {
			attributes: true, attributeFilter: ['href'], subtree: true
		});
		if (typeof skimlinksAPI !== 'undefined') {
			document.querySelectorAll('a[href]').forEach(a => {
				if (a.dataset.xxxJanOriginalHref) {
					return;
				}
				a.dataset.xxxJanOriginalHref = a.href;
			});
		}
		document.querySelectorAll('a[href]').forEach(a => {
			const normalizedDomainName = a.href.replace(/^https?:\/\/(?:www\.)?([^/]+).*/, '$1');
			const textContainersToCheck = Array.from(a.querySelectorAll('*'));
			textContainersToCheck.unshift(a);
			for (let i = textContainersToCheck.length - 1; i >= 0; i--) {
				const textContainer = textContainersToCheck[i];
				const normalizedInnerText = textContainer.textContent.replace(/^(?:https?:\/\/)?(?:www\.)?([^/]+).*/, '$1');
				if (normalizedDomainName === normalizedInnerText) {
					textContainer.textContent = a.href;
					break;
				}
			}
		});
		try {
			Array.from(document.querySelectorAll('frame, iframe, object[type^="text/html"], object[type^="application/xhtml+xml"]')).forEach( elem => {
				try {
					execute(elem.contentDocument);
				}
				catch (e) {}
			});
		}
		catch (e) {}
	}
	execute(document);
})();