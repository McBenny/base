/*
	                                                                                                                                                               
	                                                                                                                                                               
	FFFFFFFFFFFFFFFFFFFFFF                                                               tttt            iiii                                                      
	F::::::::::::::::::::F                                                            ttt:::t           i::::i                                                     
	F::::::::::::::::::::F                                                            t:::::t            iiii                                                      
	FF::::::FFFFFFFFF::::F                                                            t:::::t                                                                      
	  F:::::F       FFFFFFuuuuuu    uuuuuunnnn  nnnnnnnn        ccccccccccccccccttttttt:::::ttttttt    iiiiiii    ooooooooooo   nnnn  nnnnnnnn        ssssssssss   
	  F:::::F             u::::u    u::::un:::nn::::::::nn    cc:::::::::::::::ct:::::::::::::::::t    i:::::i  oo:::::::::::oo n:::nn::::::::nn    ss::::::::::s  
	  F::::::FFFFFFFFFF   u::::u    u::::un::::::::::::::nn  c:::::::::::::::::ct:::::::::::::::::t     i::::i o:::::::::::::::on::::::::::::::nn ss:::::::::::::s 
	  F:::::::::::::::F   u::::u    u::::unn:::::::::::::::nc:::::::cccccc:::::ctttttt:::::::tttttt     i::::i o:::::ooooo:::::onn:::::::::::::::ns::::::ssss:::::s
	  F:::::::::::::::F   u::::u    u::::u  n:::::nnnn:::::nc::::::c     ccccccc      t:::::t           i::::i o::::o     o::::o  n:::::nnnn:::::n s:::::s  ssssss 
	  F::::::FFFFFFFFFF   u::::u    u::::u  n::::n    n::::nc:::::c                   t:::::t           i::::i o::::o     o::::o  n::::n    n::::n   s::::::s      
	  F:::::F             u::::u    u::::u  n::::n    n::::nc:::::c                   t:::::t           i::::i o::::o     o::::o  n::::n    n::::n      s::::::s   
	  F:::::F             u:::::uuuu:::::u  n::::n    n::::nc::::::c     ccccccc      t:::::t    tttttt i::::i o::::o     o::::o  n::::n    n::::nssssss   s:::::s 
	FF:::::::FF           u:::::::::::::::uun::::n    n::::nc:::::::cccccc:::::c      t::::::tttt:::::ti::::::io:::::ooooo:::::o  n::::n    n::::ns:::::ssss::::::s
	F::::::::FF            u:::::::::::::::un::::n    n::::n c:::::::::::::::::c      tt::::::::::::::ti::::::io:::::::::::::::o  n::::n    n::::ns::::::::::::::s 
	F::::::::FF             uu::::::::uu:::un::::n    n::::n  cc:::::::::::::::c        tt:::::::::::tti::::::i oo:::::::::::oo   n::::n    n::::n s:::::::::::ss  
	FFFFFFFFFFF               uuuuuuuu  uuuunnnnnn    nnnnnn    cccccccccccccccc          ttttttttttt  iiiiiiii   ooooooooooo     nnnnnn    nnnnnn  sssssssssss    
	                                                                                                                                                               
	                                                                                                                                                               
	                                                                                                                                                               
	                                                                                                                                                               
	                                                                                                                                                               
	                                                                                                                                                               
	                                                                                                                                                               
*/
		/* 
			888888    db    88""Yb 88     888888      dP"Yb  888888      dP""b8  dP"Yb  88b 88 888888 888888 88b 88 888888 
			  88     dPYb   88__dP 88     88__       dP   Yb 88__       dP   `" dP   Yb 88Yb88   88   88__   88Yb88   88   
			  88    dP__Yb  88""Yb 88  .o 88""       Yb   dP 88""       Yb      Yb   dP 88 Y88   88   88""   88 Y88   88   
			  88   dP""""Yb 88oodP 88ood8 888888      YbodP  88          YboodP  YbodP  88  Y8   88   888888 88  Y8   88   
		 */
/**
 * 		- Design related		FIND_DESIGN
 * 			.Basic behaviours	FIND_BEHAVIOUR
 * 		 	.Size egalizer		FIND_SIZEEGALIZER
 * 		- Interactivity			FIND_INTERACTIVITY
 * 			.Enlarge click		FIND_ENLARGECLICK
 * 			.Scroll to elt 		FIND_SCROLLTO
 * 		- Replacements			FIND_REPLACE
 * 		
 */

/**
 *  This file is dependent on: jquery
 */
(function ($) {



//	FIND_DESIGN
/*
	 /$$$$$$$                      /$$                                                 /$$             /$$                     /$$
	| $$__  $$                    |__/                                                | $$            | $$                    | $$
	| $$  \ $$  /$$$$$$   /$$$$$$$ /$$  /$$$$$$  /$$$$$$$           /$$$$$$   /$$$$$$ | $$  /$$$$$$  /$$$$$$    /$$$$$$   /$$$$$$$
	| $$  | $$ /$$__  $$ /$$_____/| $$ /$$__  $$| $$__  $$ /$$$$$$ /$$__  $$ /$$__  $$| $$ |____  $$|_  $$_/   /$$__  $$ /$$__  $$
	| $$  | $$| $$$$$$$$|  $$$$$$ | $$| $$  \ $$| $$  \ $$|______/| $$  \__/| $$$$$$$$| $$  /$$$$$$$  | $$    | $$$$$$$$| $$  | $$
	| $$  | $$| $$_____/ \____  $$| $$| $$  | $$| $$  | $$        | $$      | $$_____/| $$ /$$__  $$  | $$ /$$| $$_____/| $$  | $$
	| $$$$$$$/|  $$$$$$$ /$$$$$$$/| $$|  $$$$$$$| $$  | $$        | $$      |  $$$$$$$| $$|  $$$$$$$  |  $$$$/|  $$$$$$$|  $$$$$$$
	|_______/  \_______/|_______/ |__/ \____  $$|__/  |__/        |__/       \_______/|__/ \_______/   \___/   \_______/ \_______/
	                                   /$$  \ $$                                                                                  
	                                  |  $$$$$$/                                                                                  
	                                   \______/                                                                                   
*/
//	FIND_BEHAVIOUR
		/*
			88""Yb    db    .dP"Y8 88  dP""b8          88""Yb 888888 88  88    db    Yb    dP 88  dP"Yb  88   88 88""Yb 
			88__dP   dPYb   `Ybo." 88 dP   `" ________ 88__dP 88__   88  88   dPYb    Yb  dP  88 dP   Yb 88   88 88__dP 
			88""Yb  dP__Yb  o.`Y8b 88 Yb      """""""" 88""Yb 88""   888888  dP__Yb    YbdP   88 Yb   dP Y8   8P 88"Yb  
			88oodP dP""""Yb 8bodP' 88  YboodP          88oodP 888888 88  88 dP""""Yb    YP    88  YbodP  `YbodP' 88  Yb 
		*/
/**
 * @description This function handles basic behavior enhancements...
 * @author  [Benoit Adam]
 * @returns {null}
 *	1)	Opens a new window: <a href="path/to/file.html" class="jsHook popUp" data-target="myWindow" data-width="200" data-height="200" data-other="scrollbars=0">Click!!</a>
 *	2)	Opens the link out of any frame: <a href="path/to/file.html" class="jsHook winTop">click!</a>
 *	3)	Closes a window: <a href="#" class="jsHook closeWin">close</a>
 *	4)	Opens a confirm dialog box: <a href="yes-page.html" class="jsHook confirm" data-message="Are you sure?">ask a question</a>
 *	5)	Goes back in the history: <a href="#" class="jsHook goBack">rewind</a>
 *	6)	Prints the current page: <a href="#" class="jsHook print">print</a>
 *	7)	Adds the current page in the favorites list of the browser
 *		a) Handling Firefox versions under 23. From v23, add rel="sidebar" into the link tag, no JS required
 *		b) Handling Internet Explorer
 *		c) Handling Opera
 *		d) Handling webkit-based browser (Safari / Chrome)
 */
	var handleBasicBehaviours = function () {
		$("a.jsHook")
/* 1 */		.filter(".popUp").off("click").on("click", function (e) {
				e.preventDefault();
				var myElt = $(this),
					eltU = myElt.attr("href"),
					eltW = base.findData(myElt, "width", null),
					eltH = base.findData(myElt, "height", null),
					eltT = base.findData(myElt, "target", null),
					eltO = base.findData(myElt, "other", null),
					params = eltW ? ",width=" + eltW : null;
				params += eltH ? ",height=" + eltH : null;
				params += eltO ? "," + eltO : null;
				window.open(eltU, eltT, params);
			}).end()
/* 2 */		.filter(".winTop").off("click").on("click", function (e) {
				var myElt = $(this),
					eltU = myElt.attr("href");
				window.top.location.href = eltU;
				e.preventDefault();
			}).end()
/* 3 */		.filter(".closeWin").off("click").on("click", function (e) {
				window.close();
				e.preventDefault();
			}).end()
/* 4 */		.filter(".confirm").off("click").on("click", function (e) {
				var myElt = $(this),
					eltU = myElt.attr("href"),
					eltM = base.findData(myElt, "message", "Question?");
				if (window.confirm(eltM)) {
					window.location.href = eltU;
				}
				e.preventDefault();
			}).end()
/* 5 */		.filter(".goBack").on("click", function (e) {
				window.history.back();
				e.preventDefault();
				return false;
			}).end()
/* 6 */		.filter(".print").on("click", function (e) {
				window.print();
				e.preventDefault();
			}).end()
/* 7 */		.filter(".addFav").on("click", function (e) {
	/* a */		if (window.sidebar) {
					window.sidebar.addPanel(document.title, window.location.href, "");
				} else {
	/* b */			if (window.external && ("AddFavorite" in window.external)) {
						window.external.AddFavorite(location.href, document.title);
					} else {
	/* c */				if (window.opera && window.print) {
							this.title = document.title;
							return true;
						}
	/* d */				window.alert("Appuyez sur " + (navigator.userAgent.toLowerCase().indexOf("mac") !== -1 ? "Commande/Cmd" : "CTRL") + " + D pour bookmarker cette page.");
					}
				}
				e.preventDefault();
			});
	},



//	FIND_SIZEEGALIZER
		/*
			.dP"Y8 88 8888P 888888          888888  dP""b8    db    88     88 8888P 888888 88""Yb 
			`Ybo." 88   dP  88__   ________ 88__   dP   `"   dPYb   88     88   dP  88__   88__dP 
			o.`Y8b 88  dP   88""   """""""" 88""   Yb  "88  dP__Yb  88  .o 88  dP   88""   88"Yb  
			8bodP' 88 d8888 888888          888888  YboodP dP""""Yb 88ood8 88 d8888 888888 88  Yb 
		*/
/**
 * @description This function egalizes the height or width of several blocks to the height or width of the tallest or widest inside a container
 * @author  [Benoit Adam]
 * @param   {jQuerySelector} $myCtnr			  the surrounding container of the blocks to egalize
 * @param   {jQuerySelector} $myBlocks			  the blocks to egalize
 * @param   {string} 		 [dir = "", "h", "w"] the direction of egalization : not supplied or "h" : heights, "w" : widths
 * @returns {null}
 * 	1)	For each container...
 *  	a) myH : will receive the maximum height of the elements,
 *  	b) myW : will receive the maximum width of the elements
 *  2)	In case no direction or Height (default option) is passed as parameter :
 *  	a) Allways keep the biggest height amongst elements to egalize contained in the container,
 *  	b) Affects the maximum height found to all the elements of the container
 *  3)	In case a direction other than "h" has been passed as a parameter :
 *  	a) Allways keep the biggest width amongst elements to egalize contained in the container,
 *  	b) Affects the maximum width found to all the elements of the container
 */
	sizesEgalizer = function (myCtnr, myBlocks, dir) {
/* 1 */	$(myCtnr).each(function () {
	/* a */	var myH = 0,
	/* b */		myW = 0;
/* 2 */		if (dir === undefined || dir === "h") {
	/* a */		$(this).find(myBlocks).each(function () {
					myH = $(this).outerHeight() < myH ? myH : $(this).outerHeight();
				});
	/* b */		$(this).find(myBlocks).outerHeight(myH);
/* 3 */		} else {
	/* a */		$(this).find(myBlocks).each(function () {
					myW = $(this).outerWidth() < myW ? myW : $(this).outerWidth();
				});
	/* b */		$(this).find(myBlocks).outerWidth(myW);
			}
		});
	},




//	FIND_INTERACTIVITY
/*
	 /$$$$$$             /$$                                              /$$     /$$            /$$   /$$              
	|_  $$_/            | $$                                             | $$    |__/           |__/  | $$              
	  | $$   /$$$$$$$  /$$$$$$    /$$$$$$   /$$$$$$  /$$$$$$   /$$$$$$$ /$$$$$$   /$$ /$$    /$$ /$$ /$$$$$$   /$$   /$$
	  | $$  | $$__  $$|_  $$_/   /$$__  $$ /$$__  $$|____  $$ /$$_____/|_  $$_/  | $$|  $$  /$$/| $$|_  $$_/  | $$  | $$
	  | $$  | $$  \ $$  | $$    | $$$$$$$$| $$  \__/ /$$$$$$$| $$        | $$    | $$ \  $$/$$/ | $$  | $$    | $$  | $$
	  | $$  | $$  | $$  | $$ /$$| $$_____/| $$      /$$__  $$| $$        | $$ /$$| $$  \  $$$/  | $$  | $$ /$$| $$  | $$
	 /$$$$$$| $$  | $$  |  $$$$/|  $$$$$$$| $$     |  $$$$$$$|  $$$$$$$  |  $$$$/| $$   \  $/   | $$  |  $$$$/|  $$$$$$$
	|______/|__/  |__/   \___/   \_______/|__/      \_______/ \_______/   \___/  |__/    \_/    |__/   \___/   \____  $$
	                                                                                                           /$$  | $$
	                                                                                                          |  $$$$$$/
	                                                                                                           \______/ 
*/
//	FIND_ENLARGECLICK
		/*
			888888 88b 88 88        db    88""Yb  dP""b8 888888           dP""b8 88     88  dP""b8 88  dP 
			88__   88Yb88 88       dPYb   88__dP dP   `" 88__   ________ dP   `" 88     88 dP   `" 88odP  
			88""   88 Y88 88  .o  dP__Yb  88"Yb  Yb  "88 88""   """""""" Yb      88  .o 88 Yb      88"Yb  
			888888 88  Y8 88ood8 dP""""Yb 88  Yb  YboodP 888888           YboodP 88ood8 88  YboodP 88  Yb 
		*/
/**
 * @description This function enlarges the clickability to the container of a link
 * @author  [Benoit Adam]
 * @param   {jQuerySelector} $selector the container that contains the anchor and that will receive the click event
 * @param   {boolean} 		[mode]     If "true" is passed, the classes of the anchor are copied to the container
 * @returns {null}
 */
	enlargeClick = function ($selector, mode) {
		$($selector).each(function () {
			var $this = $(this),
				lnk = $this.find("a").attr("href"),
				title = $this.find("a").attr("title"),
				classes = mode !== undefined && mode ? $this.find("a").attr("class") : null;
			$this
				.attr("title", title)
				.addClass(classes)
				.on("click", function () {
					if (classes && classes.indexOf("popUp") > -1) {
						window.open(lnk, "");
					} else {
						window.location.href = lnk;
					}
				});
		});
	},



//	FIND_SCROLLTO
		/*
			.dP"Y8  dP""b8 88""Yb  dP"Yb  88     88              888888  dP"Yb  
			`Ybo." dP   `" 88__dP dP   Yb 88     88     ________   88   dP   Yb 
			o.`Y8b Yb      88"Yb  Yb   dP 88  .o 88  .o """"""""   88   Yb   dP 
			8bodP'  YboodP 88  Yb  YbodP  88ood8 88ood8            88    YbodP  
		*/
/**
 * @description This function scrolls smoothly the page to the anchor
 * @requires jquery.easing.1.3
 * @author [Benoit Adam]
 * @returns {null}
 * 	1) Au clic sur l'élément
 * 	2) Identification des éléments
 * 		a) récupération du lien ou du "pseudo-lien"
 * 	3) Désactivation du scroll molette et du scroll touch
 *  4) Animation jusqu'à l'ancre visée,
 *  	4.1) Avec effet "easing",
 *  	4.2) Réactivation des scroll molette et touch,
 *  	4.3) Mise à jour de l'URL
 */
	scrollToElt = function () {
/* 1 */	$(".jsHook.scrollToElt").on("click", function (e) {
/* 2 */		var elt = $(this),
	/* a */		lnk = elt.attr("href") !== undefined ? elt.attr("href") : elt.data("href"),
				documentBody = $("html, body");
/* 3 */		$(document).on("mousewheel DOMMouseScroll", function (f) {
				f.preventDefault();
			});
/* 4 */		$(documentBody).animate(
				{
					scrollTop: $(lnk).offset().top
				},
				{
					duration: 2000,
/*4.1*/				easing: "easeOutExpo",
					complete: function () {
/*4.2*/					$(document).off("mousewheel DOMMouseScroll");
/*4.3*/					window.location.hash = lnk;
					}
				}
			);
			e.preventDefault();
		});
	},





//	FIND_REPLACE
/*
	 /$$$$$$$                      /$$                                                                   /$$             
	| $$__  $$                    | $$                                                                  | $$             
	| $$  \ $$  /$$$$$$   /$$$$$$ | $$  /$$$$$$   /$$$$$$$  /$$$$$$  /$$$$$$/$$$$   /$$$$$$  /$$$$$$$  /$$$$$$   /$$$$$$$
	| $$$$$$$/ /$$__  $$ /$$__  $$| $$ |____  $$ /$$_____/ /$$__  $$| $$_  $$_  $$ /$$__  $$| $$__  $$|_  $$_/  /$$_____/
	| $$__  $$| $$$$$$$$| $$  \ $$| $$  /$$$$$$$| $$      | $$$$$$$$| $$ \ $$ \ $$| $$$$$$$$| $$  \ $$  | $$   |  $$$$$$ 
	| $$  \ $$| $$_____/| $$  | $$| $$ /$$__  $$| $$      | $$_____/| $$ | $$ | $$| $$_____/| $$  | $$  | $$ /$$\____  $$
	| $$  | $$|  $$$$$$$| $$$$$$$/| $$|  $$$$$$$|  $$$$$$$|  $$$$$$$| $$ | $$ | $$|  $$$$$$$| $$  | $$  |  $$$$//$$$$$$$/
	|__/  |__/ \_______/| $$____/ |__/ \_______/ \_______/ \_______/|__/ |__/ |__/ \_______/|__/  |__/   \___/ |_______/ 
	                    | $$                                                                                             
	                    | $$                                                                                             
	                    |__/                                                                                             
*/
/*
	This function handles iframe and flash replacements

---------> iframes
	code:
		JS:	base.contentReplacement();
		HTML:
			<div class="iframeCtnr">
				<span class="eltData" data-url="http://www.domain.com" data-width="800" data-height="600"><a href="http://www.domain.com">get the content</a></span>
			</div>
	If URL is not supplied, not replacement is done.
	If width and height are not supplied, their values are set to "100%"
	"iframeCtnr" is the default called class but you can customize it. Several class names can be used at the same time.
	code:
		JS:	base.contentReplacement({iframe:["myIframe"]});
		JS:	base.contentReplacement({iframe:["myIframe", "myOtherIframeClass"]});
		HTML:	<div class="myIframe">...


---------> flash
	code:
		JS:	base.contentReplacement();
		HTML:
			<div class="flashCtnr">
				<span class="eltData accessibility" data-url="path/to/the/file.swf" data-wmode="opaque" data-width="w" data-height="h">path/to/the/file.swf</span>
			</div>
	If URL is not supplied, not replacement is done.
	If wmode is not supplied, its value is set to "transparent"
	If width and height are not supplied, their values are set to "100%"
	"flashCtnr" is the default called class but you can customize it. Several class names can be used at the same time.
	code:
		JS:	base.contentReplacement({flash:["myFlash"]});
		JS:	base.contentReplacement({flash:["myFlash", "myOtherFlashClass"]});
		HTML:	<div class="myFlash">...
*/
	contentReplacement = function (params) {
		var iframeClassNames = typeof params === "object" && params.iframe !== undefined ? params.iframe : ["iframeCtnr"],
		flashClassNames = typeof params === "object" && params.flash !== undefined ? params.flash : ["flashCtnr"],
		selectorStringBuilder = function (lesClasses) {
			var selectorString = "",
			separator = "",
			i = 0;
			for (i; i < lesClasses.length; i++) {
				selectorString += separator + "." + lesClasses[i];
				separator = ", ";
			}
			return selectorString;
		},
		iframeSelectorString = selectorStringBuilder(iframeClassNames),
		flashSelectorString = selectorStringBuilder(flashClassNames);
		$(iframeSelectorString).each(function () {
			var myElt = $(this).find(".eltData"),
			eltU = base.findData(myElt, "url", false),
			eltW = base.findData(myElt, "width", "100%"),
			eltH = base.findData(myElt, "height", "100%");
			if (eltU) {
				$("*", this).remove();
				$(this)
					.width(eltW)
					.height(eltH)
					.html("<iframe src=\"" + eltU + "\" width=\"" + eltW + "\" height=\"" + eltH + "\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe>");
			}
		});
		$(flashSelectorString).each(function () {
			var myElt = $(this).find(".eltData"),
			eltU = base.findData(myElt, "url", false),
			eltM = base.findData(myElt, "wmode", "transparent"),
			eltW = base.findData(myElt, "width", "100%"),
			eltH = base.findData(myElt, "height", "100%");
			if (eltU) {
				$("*", this).remove();
				$(this).media({
					src: eltU,
					width: eltW,
					height: eltH,
					bgColor: "",
					params: {wmode:	eltM},
					attrs: {wmode:	eltM}
				},
				{
					update: false
				});
			}
		});
	};


})(jQuery);
