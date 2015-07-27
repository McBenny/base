//é

var customData = {},
//hDispo = $(window).height(),
//lDispo = $(window).width(),
customFunctions = function () {
/*
	Basic texts in various languages...
*/
	var trads = {
		"fr":	{
		}
	},

/*
	This function finishes design
*/
	finishDesign = function () {
		var design = "<span class=\"design\" />";

// Égalisation de la taille des listes en pied de page
//		base.columnizer("#sitemap", ".col");

/*
		if ($.browser.msie == true && $.browser.version == 7) {
			initIE7();
		}
*/
		return true;
	},

/*
	Faux parallax
*/
	fakeParallax = function () {
		var touchDevice = touchDevice !== undefined ? touchDevice : null;
		if (touchDevice !== undefined && !touchDevice) {
// Cas des bandeaux hauts
			$(".soloImg").find(".bandeau").css("top", -scrollTop * 0.33 );
		}
	},

/*
	This function intercepts natural behaviour to enhance user experience
*/
	enhanceBehaviour = function () {

// Rend le LI contenant le A réactif
//		base.enlargeClick("nav > ul > li");

		var scrollToElt = function (elt, delay) {
			$(document).on("mousewheel DOMMouseScroll", function (e) {
				e.preventDefault();
			});
			var documentBody = $.browser.chrome || $.browser.safari ? document.body : document.documentElement,
			decalage = $("header").height() + $("#floatingBar").height() - 1;
			$(documentBody).animate({scrollTop: $(elt).offset().top - decalage}, delay, "easeOutExpo", function () {
				$(document)
					.off("mousewheel DOMMouseScroll");
			});
		};

// ByPass du clic sur une ancre par un scroll
		$(".scrollToElt").on("click", function (e) {
			var elt = $(this),
			lAncre = elt.attr("href");
			elt.parents("ul").find('li').removeClass("current");
			elt.parent("li").addClass("current");
			scrollToElt(lAncre, 2000);
			e.preventDefault();
		});

// Actions Panier et parcours
		$('#panier')
// Retrait d'une unité d'un article
			.find(".modifMoins").each(function () {
				$(this).on("click", function (e) {
					if (!$(this).hasClass("disabled")) {
						base.sablier();
						var leMin = $(this).attr("data-min"),
						lIncrement = $(this).attr("data-qte"),
						laQte = $(this).siblings(".qte").val();
						if (laQte - lIncrement >= leMin) {
							$(this).siblings(".qte").val(laQte - lIncrement);
							$(this).parents("form").submit();
						}
					}
					e.preventDefault();
				});
			})
			.end()
// Ajout d'une unité d'un article
			.find(".modifPlus").each(function () {
				$(this).on("click", function (e) {
					if (!$(this).hasClass("disabled")) {
						base.sablier();
						var leMax = $(this).attr("data-max"),
						lIncrement = $(this).attr("data-qte"),
						laQte = $(this).siblings(".qte").val();
						if (parseInt(laQte) + parseInt(lIncrement) <= leMax) {
							$(this).siblings(".qte").val(parseInt(laQte) + parseInt(lIncrement));
							$(this).parents("form").submit();
						}
					}
					e.preventDefault();
				});
			})
			.end()
// Suppression d'un article
			.find(".supprBtn").each(function () {
				$(this).on("click", function (e) {
					$(this).parents("form").submit();
					e.preventDefault();
				});
		});
		return true;
	},

	initIE7 = function () {
		return true;
	},

/*
	This function unmasks the page
*/
	unMask = function () {
		$("#mask").delay(250).fadeOut(250);
	},

/*
	This function inits PrettyPhoto plugin
*/
	initPrettyPhoto = function () {
		if ($.prettyPhoto !== undefined) {
			$(".gallery a[data-rel^='prettyPhoto']")
				.prettyPhoto(
					{
						theme: "light_rounded",
						opacity: 0.6,
						overlay_gallery: false,
						default_width: "100%",
						default_height: "100%",
//						changepicturecallback:	function () {	// Fires at pop-in opening, kinda callback...
//										return true;
//									},
//						callback: function () {
//									return true;
//								},
						social_tools: "",
						deeplinking: false	// to avoid #!prettyPhoto/0/ in the url
					}
				);
		}
	},

/*
	This function inits Cycle plugin
*/
	initCycle = function () {
		if ($.fn.cycle !== undefined) {
			$(".cycle").cycle({
				fx: "turnUp",
				speed: 1500,
				timeout: 5000,
				pause: 1
			});
		}
	},

/*
	This function inits MagnificPopUp plugin
*/
	initMFP = function () {
		if ($.fn.magnificPopup !== undefined) {
			$(".mfp").magnificPopup({
				type: "iframe",
				delegate: "a",
				gallery: {
							enabled:	true
						},
				iframe: {
					patterns: {
						dailymotion: {
							index: "dailymotion.com",
							id: function(url) {
									var m = url.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
									if (m !== null) {
										if (m[4] !== undefined) {
											return m[4];
										}
										return m[2];
									}
									return null;
								},
							src: "http://www.dailymotion.com/embed/video/%id%"
						}
					}
				}
			});
		}
	};

// Public elements :
	return {
		finishDesign: finishDesign,
		enhanceBehaviour: enhanceBehaviour,
//		fakeParallax: fakeParallax,
		unMask: unMask,
		jQueryPlugins: {
						initPrettyPhoto: initPrettyPhoto,
						initCycle: initCycle,
						initMFP: initMFP
					}
	};
}();

$(document).ready(function () {
//	$("body").queryLoader2();
	customFunctions.enhanceBehaviour();
});

$(window).load(function () {
	customFunctions.finishDesign();
	customFunctions.jQueryPlugins.initPrettyPhoto();
//	customFunctions.jQueryPlugins.initCycle();
//	customFunctions.jQueryPlugins.initMFP();
});

/*
$(window).scroll(function() {
	scrollTop = $(this).scrollTop();
	customFunctions.fakeParallax();
	customFunctions.floatingNav();
});
*/
