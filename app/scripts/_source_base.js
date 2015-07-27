//é

$(document).ready(function () {
//	base.is_touch_device();
//	base.getAvailWidth();
	base.handleBasicBehaviours();
	base.handleAjax();
	base.forms.placeHolder();
	base.forms.autoSize();
	base.emailDeObfuscator(['emails']);
});

$(window)
	.load(function () {
		base.contentReplacement();
		base.handleIE6();
//		base.splitLst(idElt, classElt, classLi, nbLst);
//	}).resize(function () {
//		base.getAvailWidth();
	});


var touchDevice = false,
de1281aPlus = true,
de1025a1280 = false,
de641a1024 = false,
de0a640 = false,
console = (console === undefined) ? { log: function (logMsg) { } } : console,
base = function () {
/* Modernizr 2.0.6 (Custom Build: csscolumns | input(attr) | touch events ) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-csscolumns-input-iepp-cssclasses-testprop-testallprops-domprefixes-load
 */
//	window.Modernizr = function (a,b,c) {function A(){e.input=function(a){for(var b=0,c=a.length;b<c;b++)p[a[b]]=a[b]in k;return p}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "))}function z(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+m.join(c+" ")+c).split(" ");return y(d,b)}function y(a,b){for(var d in a)if(j[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function x(a,b){return!!~(""+a).indexOf(b)}function w(a,b){return typeof a===b}function v(a,b){return u(prefixes.join(a+";")+(b||""))}function u(a){j.cssText=a}var d="2.0.6",e={},f=b.documentElement,g=b.head||b.getElementsByTagName("head")[0],h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=Object.prototype.toString,m="Webkit Moz O ms Khtml".split(" "),n={},o={},p={},q=[],r,s={}.hasOwnProperty,t;!w(s,c)&&!w(s.call,c)?t=function(a,b){return s.call(a,b)}:t=function(a,b){return b in a&&w(a.constructor.prototype[b],c)},n.csscolumns=function(){return z("columnCount")};for(var B in n)t(n,B)&&(r=B.toLowerCase(),e[r]=n[B](),q.push((e[r]?"":"no-")+r));e.input||A(),u(""),i=k=null,e._version=d,e._domPrefixes=m,e.testProp=function(a){return y([a])},e.testAllProps=z;return e}(this,this.document);

/* Modernizr 2.5.3 (Custom Build: CSS columns | Input Attributes) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-csscolumns-input-testprop-testallprops-domprefixes
 */
//	window.Modernizr=function(a,b,c){function w(a){i.cssText=a}function x(a,b){return w(prefixes.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b){for(var d in a)if(i[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function B(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}function C(a,b,c){var d=a.charAt(0).toUpperCase()+a.substr(1),e=(a+" "+m.join(d+" ")+d).split(" ");return y(b,"string")||y(b,"undefined")?A(e,b):(e=(a+" "+n.join(d+" ")+d).split(" "),B(e,b,c))}function D(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)q[c[d]]=c[d]in j;return q.list&&(q.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),q}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "))}var d="2.5.3",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j=b.createElement("input"),k={}.toString,l="Webkit Moz O ms",m=l.split(" "),n=l.toLowerCase().split(" "),o={},p={},q={},r=[],s=r.slice,t,u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=s.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(s.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(s.call(arguments)))};return e}),o.csscolumns=function(){return C("columnCount")};for(var E in o)v(o,E)&&(t=E.toLowerCase(),e[t]=o[E](),r.push((e[t]?"":"no-")+t));return e.input||D(),w(""),h=j=null,e._version=d,e._domPrefixes=n,e._cssomPrefixes=m,e.testProp=function(a){return A([a])},e.testAllProps=C,e}(this,this.document);

/* Modernizr 2.6.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csscolumns-input-cssclasses-testprop-testallprops-domprefixes
 */
//	window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}function E(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)r[c[d]]=c[d]in k;return r.list&&(r.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),r}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "))}var d="2.6.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.csscolumns=function(){return D("columnCount")};for(var F in p)w(p,F)&&(u=F.toLowerCase(),e[u]=p[F](),s.push((e[u]?"":"no-")+u));return e.input||E(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document);

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csscolumns-input-cssclasses-testprop-testallprops-domprefixes
 */
	window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}function E(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)r[c[d]]=c[d]in k;return r.list&&(r.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),r}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.csscolumns=function(){return D("columnCount")};for(var F in p)w(p,F)&&(u=F.toLowerCase(),e[u]=p[F](),s.push((e[u]?"":"no-")+u));return e.input||E(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document);

/*
	This function adds a 'touch' class in the html tag if a touch device is detected
*/
	var is_touch_device = function () {
		try {
			if (!$('html').hasClass('chrome')) {
				document.createEvent("TouchEvent");
				$('html').addClass('touch');
				touchDevice = true;
				return true;
			}
		} catch (e) {
			return false;
		}
	},

/*
	Determinates the width of the browser window
	Must be launched in $(document).ready() and relaunched in $(window).resize()
*/
	getAvailWidth = function () {
		if (matchMedia) {
			if (window.matchMedia("(min-width: 1281px)").matches) {
				de1281aPlus = true;
			} else {
				de1281aPlus = false;
				if (window.matchMedia("(min-width: 1025px)").matches) {
					de1025a1280 = true;
				} else {
					de1025a1280 = false;
					if (window.matchMedia("(min-width: 641px)").matches) {
						de641a1024 = true;
					} else {
						de641a1024 = false;
						de0a640 = true;
					}
				}
			}
//		} else {
//console.log('Pas matchmedia');
		}
//console.log($(window).width(), 'de1281aPlus:' + de1281aPlus, 'de1025a1280:' + de1025a1280, 'de641a1024:' + de641a1024, 'de0a640:' + de0a640);
	},

/*
	This function return the value of "data-" attribute or the default provided value
*/
	findData = function (elt, param, parDefaut) {
		return elt.data(param) !== undefined ? elt.data(param) : parDefaut;
	},

/*
	Extract a Url from a background-image value
*/
	extractUrl = function (input) {
		return input.replace(/"/g,"").replace(/url\(|\)$/ig, "");
	},

/*
	Basic texts in various languages...
*/
	trads = {
		'fr':	{
			'fermer':	'Fermer',
			'confirm':	'Etes-vous sûr de vouloir effectuer cette action ?',
			'loading':	'Chargement en cours, veuillez patienter...'
		},
		'en':	{
			'fermer':	'Close',
			'confirm':	'Are you sure to execute this action?',
			'loading':	'Loading, please wait...'
		}
	},

/*
	Égalisation de tailles de colonnes
*/
	columnizer = function ($myArea, $myColumn) {
		$($myArea).each(function () {
			var hauteur = 0;
			$(this).find($myColumn).each(function () {
				hauteur = $(this).height() < hauteur ? hauteur : $(this).height();
			});
			$(this).find($myColumn).height(hauteur);
		});
	},


/*
	This function handles ajax' type form calls
*/
	handleAjax = function (ajaxClassNames) {
		var selectorString = '',
		separator = '',
		i = 0;
		ajaxClassNames = ajaxClassNames !== undefined ? ajaxClassNames : ['discreet'];
		for (i; i < ajaxClassNames.length; i++) {
			selectorString += separator + 'form.' + ajaxClassNames[i];
			separator = ', ';
		}
		$(selectorString).each(function () {
			$(this).on('submit', function () {
				sablier();
				var monForm = $(this).attr('id'),
				actionFile = $(this).attr('action'),
				fields = $(this).serialize();
				$('#' + monForm).find('.infoMsg').fadeTo(1, 1).hide();
				$.ajax({
					type:		"POST",
					url:		actionFile,
					data:		fields + '&ajax=1',
					dataType:	"json",
					success:	function (data) {
								sablier();
								var errNull, errHS, errErr, errCAPTCHA;
								if (data.etat == 'null') {
									errNull = $('#' + monForm).find('.errNull');
									errNull
										.show('fast', function () {
											window.setTimeout(function () {
												$('.line').removeClass('missing');
												for (var i in data.url) {
													if (data.url[i] === 0) {
														$('#' + i).parent('.line').addClass('missing');
														$('#'+i).val('').focus();
													}
												}
												window.setTimeout(function () {
													if (errNull.css('opacity') == 1) {
														errNull.fadeTo(800, 0.05).slideUp(1000);
													}
												}, 2000);
											}, 1000);
										})
										.on('click', function () {
											$(this).fadeTo(800, 0.05).slideUp(1000);
										});
								} else if (data.etat == 'HS') {
									$('#' + monForm + ' .hs').show('fast', function () {
										window.setTimeout(function () {
											$('#' + monForm + ' .hs').fadeOut('slow');
										}, 3000);
									});
									errHS = $('#' + monForm).find('.errHS');
									errHS
										.show('fast', function () {
											window.setTimeout(function () {
												$('.line').removeClass('missing');
												for (var i in data.url) {
													if (data.url[i] === 0) {
														$('#' + i).parent('.line').addClass('missing');
														$('#'+i).val('').focus();
													}
												}
												window.setTimeout(function () {
													if (errHS.css('opacity') == 1) {
														errHS.fadeTo(800, 0.05).slideUp(1000);
													}
												}, 2000);
											}, 1000);
										})
										.on('click', function () {
											$(this).fadeTo(800, 0.05).slideUp(1000);
										});
								} else if (data.etat == 'err') {
									$('#' + monForm + ' .err').show('fast', function () {
										window.setTimeout(function () {
											$('#' + monForm + ' .err').fadeOut('slow');
										}, 3000);
									});
									errErr = $('#' + monForm).find('.errErr');
									errErr
										.show('fast', function () {
											window.setTimeout(function () {
												if (errErr.css('opacity') == 1) {
													errErr.fadeTo(800, 0.05).slideUp(1000);
												}
											}, 3000);
										})
										.on('click', function () {
											$(this).fadeTo(800, 0.05).slideUp(1000);
										});
								} else if (data.etat == 're') {
									$('#' + monForm + ' .errCAPTCHA').show('fast', function () {
										window.setTimeout(function () {
											$('#' + monForm + ' .errCAPTCHA').fadeOut('slow');
										}, 3000);
									});
									errCAPTCHA = $('#' + monForm).find('.errCAPTCHA');
									errCAPTCHA
										.show('fast', function () {
											window.setTimeout(function () {
												if (errCAPTCHA.css('opacity') == 1) {
													errCAPTCHA.fadeTo(800, 0.05).slideUp(1000);
												}
											}, 3000);
										})
										.on('click', function () {
											$(this).fadeTo(800, 0.05).slideUp(1000);
										});
								} else if (data.etat == 'ok') {
// Sortie positive
									if (data.url == 31) {
										window.location.href = data.infoAdmin;
									} else if (data.url == 47) {
Object.size = function (obj) {
	var size = 0, key;
	for (key in obj) {
		if (obj.hasOwnProperty(key)) {
			size++;
		}
	}
	return size;
};
										nbElts = Object.size(data) - 2;
										mesData = data;
										var maListe = '<ul>';
										for (var i = 0; i < nbElts; i++) {
//											maListe += '<li>' + mesData[i].nom + '</li>';
											maListe += '<li>' + mesData[0].nom + '</li>';
										}
										maListe += '</ul>';
										$('#distributeurs').append(maListe);
									} else {
// Pour intercepter le formulaire s'il est recopié dans un pop-in
										var dansPopIn = $('.pp_pic_holder').length > 0 ? '.pp_pic_holder ' : '';
										$(dansPopIn + '#' + monForm).last().find('.ok').show('fast', function () {
											$(this).siblings('fieldset, .legende').hide();
// Fermeture automatique de pop-in
											if (data.url == 22) {
												window.setTimeout(function () {$('.pp_close').click();}, 3000);
											}
// Redirection automatique
											if (typeof redirect != 'undefined') {
												leLnk = $(this).find('[data-rel="redirectURL"]').attr('href');
												window.setTimeout(function () {location.href = leLnk;}, redirect);
											}
										});
									}
								}
							},
					error:		function (data) {
								sablier();
								var err404, errMail, errAjax;
								if (data.status == '404') {
									err404 = $('#' + monForm).find('.err404');
									err404
										.show('fast', function () {
											window.setTimeout(function () {
												if (err404.css('opacity') == 1) {
													err404.fadeTo(800, 0.05).slideUp(1000);
												}
											}, 5000);
										})
										.on('click', function () {
											$(this).fadeTo(800, 0.05).slideUp(1000);
										});
								} else if (data.responseText.indexOf('function.mail') > 0) {
									errMail = $('#' + monForm).find('.errMail');
									errMail
										.slideDown('slow', function () {
											window.setTimeout(function () {
												if (errMail.css('opacity') == 1) {
													errMail.fadeTo(800, 0.05).slideUp(1000);
												}
											}, 3000);
										})
										.on('click', function () {
											clearTimeout();
											$(this).fadeTo(800, 0.05).slideUp(1000);
										});
								} else{
									errAjax = $('#' + monForm).find('.errAjax');
									errAjax
										.show('fast', function () {
											window.setTimeout(function () {
												if (errAjax.css('opacity') == 1) {
													errAjax.fadeTo(800, 0.05).slideUp(1000);
												}
											}, 5000);
										})
										.on('click', function () {
											$(this).fadeTo(800, 0.05).slideUp(1000);
										});
								}
							}
				});
				return false;
			});
		});
	},


/*
	This function handles the IE6 alert message
*/
	handleIE6 = function () {
		var hideClass = 'closed';
		if ($.cookie('ie6AlertMsg') != 'off') {
			$('.ie6, .ie7').find('#ie6').each(function () {
				var ctnr = this;
				$(ctnr).on('mouseenter', function () {
					$(this).toggleClass('hover');
				}).on('mouseleave', function () {
					$(this).toggleClass('hover');
				});
				$('<span />')
					.attr('class', 'close')
					.text(trads[$('html').attr('lang')].fermer)
					.on('click', function () {
						$(ctnr).addClass(hideClass);
						$.cookie('ie6AlertMsg', 'off');
					})
					.appendTo('.ctnt', ctnr);
			});
		} else {
			$('.ie6, .ie7').find('#ie6').addClass(hideClass);
		}
	},


/*
	This function handles a placeholder behaviour for browser
	that don't support in natively
*/
	placeHolder = function () {
		if (!Modernizr.input.placeholder) {
			$('[placeholder]').each(function () {
				var monChamp = $(this);
				monChamp
					.addClass('placeholder')	// IE
					.on('focus', function () {
						if (monChamp.val() == monChamp.attr('placeholder') || '') {
							monChamp.val('');
						}
					})
					.on('blur', function () {
						if (monChamp.val() === '') {
							monChamp.val(monChamp.attr('placeholder'));
						}
					})
					.blur()
					.parents('form')
						.on('submit', function () {
							if (monChamp.val() == monChamp.attr('placeholder')) {
								monChamp.val('');
							}
						});
			});
		} else {
			return true;
		}
	},


/*
	This function handles autosizing of textareas during typing
*/
	autoSize = function (autosizeClassNames) {
		var selectorString = '',
		separator = '',
		i = 0;
		autosizeClassNames = typeof autosizeClassNames != 'undefined' ? autosizeClassNames : ['autoSize'];
		for (i; i < autosizeClassNames.length; i++) {
			selectorString += separator + 'textarea.' + autosizeClassNames[i];
			separator = ', ';
		}
		$(selectorString).each(function () {
			var tArea = $(this);
			$(tArea)
				.data({
					'default':	$(this).val(),
					'w':		$(this).width(),
					'ttransform':	$(this).css('text-transform'),
					'lheight':	$(this).css('line-height'),
					'wspacing':	$(this).css('word-spacing'),
					'ffamily':	$(this).css('font-family'),
					'fsize':	$(this).css('font-size'),
					'fweight':	$(this).css('font-weight'),
					'lspacing':	$(this).css('letter-spacing'),
					'wrap':		$(this).css('word-wrap')
				})
				.after('<div />')
				.next()
					.css({
						position:		'absolute',
						left:			'-9999em',
						width:			$(tArea).data('w'),
						'text-transform':	$(tArea).data('ttransform'),
						'line-height':		$(tArea).data('lheight'),
						'word-spacing':		$(tArea).data('wspacing'),
						'font-family':		$(tArea).data('ffamily'),
						'font-size':		$(tArea).data('fsize'),
						'font-weight':		$(tArea).data('fweight'),
						'letter-spacing':	$(tArea).data('lspacing'),
						'word-wrap':		$(tArea).data('wrap')
					})
					.text($(tArea).data('default'))
					.data('newH', $(tArea).next().height());
			$(tArea)
				.css('min-height', $(tArea).next().data('newH'))
				.on('keyup blur', function () {
					var content = $(tArea).val().replace(/\n/g, '<br />').replace(/(\s) /g, '$1&nbsp;');
					$(tArea).next()
						.html(content + "<br /> &nbsp; ")
						.data('newH', $(tArea).next().height())
						.end()
						.css('min-height', $(tArea).next().data('newH'));
				});
		});
	},

/*
	Gestion d'une navigation "flottante"
*/
	floatingElt = $('#floatingBar'),
	floatingEltStart = floatingElt.length == 1 ? floatingElt.offset().top : 0,
	floatDecalage = $('header').height(),
	floatingEltFixed = false,
	floatElt = function () {
		floatingElt.parent().height(floatingElt.outerHeight(true));
		var scrollTop = $(window).scrollTop() + floatDecalage,
		toFix = scrollTop > floatingEltStart;
		if (toFix && !floatingEltFixed) {
			floatingElt.css({
				position:	'fixed',
				top:		floatDecalage
			});
			floatingEltFixed = true;
		} else if (!toFix && floatingEltFixed) {
			floatingElt.css({
				position:	'relative',
				top:		'auto'
			});
			floatingEltFixed = false;
		}
	},
/*
	Gestion d'une navigation "fantôme"
*/
	ghostStart = $('header').outerHeight(),
//	ghostNav = $('#ghostNav'),
	ghostNavHeight = 75,
	ghostNav = function () {
		var scrollTop = $(window).scrollTop();
		if (scrollTop > ghostStart) {
			if (scrollTop < ghostStart + ghostNavHeight) {
				ghostNav.height(scrollTop - ghostStart);
			} else {
				ghostNav.height(ghostNavHeight);
			}
		} else {
			ghostNav.height(0);
		}
	},

/*
	This function splits lists
*/
	splitLst = function (nomElt, classElt, classLi, nbLst) {
		if (!window.Modernizr.csscolumns) {
			var newLsts = '',
			nbElts = 0,
			i = 1,
			mesLis = $('#' + nomElt + '0 li.' + classLi);
			for (i; i <= nbLst; i++) {
				classElt = i == nbLst ? classElt + ' last-child' : classElt;
				newLsts += '<ul id="' + nomElt + i + '" class="' + classElt + '"><\/ul>';
			}
			$(newLsts).insertAfter('#' + nomElt + '0');
			nbElts = Math.ceil(mesLis.length / nbLst) - 1;
			mesLis.clone().appendTo('#' + nomElt + '1');
			for (i = 1; i < nbLst; i++) {
				$('#' + nomElt + i + ' li.' + classLi + ':gt(' + nbElts + ')').clone().appendTo('#' + nomElt + (i + 1));
				$('#' + nomElt + i + ' li.' + classLi + ':gt(' + nbElts + ')').remove();
			}
			$('#' + nomElt + '0').remove();
		}
	},

// Public elements :
	return {
		is_touch_device:	is_touch_device,
		getAvailWidth:		getAvailWidth,
		extractUrl:		extractUrl,
		columnizer:		columnizer,
		handleAjax:		handleAjax,
		handleIE6:		handleIE6,
//		floatElt:		floatElt,
//		ghostNav:		ghostNav,
		forms:			{
						placeHolder:	placeHolder,
						autoSize:	autoSize
					},
		splitLst:		splitLst,
	};
}();
