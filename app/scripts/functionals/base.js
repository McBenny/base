/*
																			  
																			  
	BBBBBBBBBBBBBBBBB                                                         
	B::::::::::::::::B                                                        
	B::::::BBBBBB:::::B                                                       
	BB:::::B     B:::::B                                                      
	  B::::B     B:::::B  aaaaaaaaaaaaa      ssssssssss       eeeeeeeeeeee    
	  B::::B     B:::::B  a::::::::::::a   ss::::::::::s    ee::::::::::::ee  
	  B::::BBBBBB:::::B   aaaaaaaaa:::::ass:::::::::::::s  e::::::eeeee:::::ee
	  B:::::::::::::BB             a::::as::::::ssss:::::se::::::e     e:::::e
	  B::::BBBBBB:::::B     aaaaaaa:::::a s:::::s  ssssss e:::::::eeeee::::::e
	  B::::B     B:::::B  aa::::::::::::a   s::::::s      e:::::::::::::::::e 
	  B::::B     B:::::B a::::aaaa::::::a      s::::::s   e::::::eeeeeeeeeee  
	  B::::B     B:::::Ba::::a    a:::::assssss   s:::::s e:::::::e           
	BB:::::BBBBBB::::::Ba::::a    a:::::as:::::ssss::::::se::::::::e          
	B:::::::::::::::::B a:::::aaaa::::::as::::::::::::::s  e::::::::eeeeeeee  
	B::::::::::::::::B   a::::::::::aa:::as:::::::::::ss    ee:::::::::::::e  
	BBBBBBBBBBBBBBBBB     aaaaaaaaaa  aaaa sssssssssss        eeeeeeeeeeeeee  
																			  
																			  
																			  
																			  
																			  
																			  
																			  
*/
		/* 
			888888    db    88""Yb 88     888888      dP"Yb  888888      dP""b8  dP"Yb  88b 88 888888 888888 88b 88 888888 
			  88     dPYb   88__dP 88     88__       dP   Yb 88__       dP   `" dP   Yb 88Yb88   88   88__   88Yb88   88   
			  88    dP__Yb  88""Yb 88  .o 88""       Yb   dP 88""       Yb      Yb   dP 88 Y88   88   88""   88 Y88   88   
			  88   dP""""Yb 88oodP 88ood8 888888      YbodP  88          YboodP  YbodP  88  Y8   88   888888 88  Y8   88   
		 */
/**
 * 		- Handling environment	FIND_ENV
 * 			.Console			FIND_CONSOLE
 * 			.Variables			FIND_VARS
 * 		- Functions				FIND_FUNCTIONS
 * 			.Find data 			FIND_DATA
 * 		- Public return 		FIND_PUBLIC
 * 		
 */

/**
 *  This file is dependent on: jquery
 */
(function ($) {



//	FIND_ENV
/*
	 /$$$$$$$$                      /$$                                                                   /$$    
	| $$_____/                     |__/                                                                  | $$    
	| $$       /$$$$$$$  /$$    /$$ /$$  /$$$$$$   /$$$$$$  /$$$$$$$  /$$$$$$/$$$$   /$$$$$$  /$$$$$$$  /$$$$$$  
	| $$$$$   | $$__  $$|  $$  /$$/| $$ /$$__  $$ /$$__  $$| $$__  $$| $$_  $$_  $$ /$$__  $$| $$__  $$|_  $$_/  
	| $$__/   | $$  \ $$ \  $$/$$/ | $$| $$  \__/| $$  \ $$| $$  \ $$| $$ \ $$ \ $$| $$$$$$$$| $$  \ $$  | $$    
	| $$      | $$  | $$  \  $$$/  | $$| $$      | $$  | $$| $$  | $$| $$ | $$ | $$| $$_____/| $$  | $$  | $$ /$$
	| $$$$$$$$| $$  | $$   \  $/   | $$| $$      |  $$$$$$/| $$  | $$| $$ | $$ | $$|  $$$$$$$| $$  | $$  |  $$$$/
	|________/|__/  |__/    \_/    |__/|__/       \______/ |__/  |__/|__/ |__/ |__/ \_______/|__/  |__/   \___/  
																												 
																												 
																												 
*/
//	FIND_CONSOLE
		/*
			 dP""b8  dP"Yb  88b 88 .dP"Y8  dP"Yb  88     888888 
			dP   `" dP   Yb 88Yb88 `Ybo." dP   Yb 88     88__   
			Yb      Yb   dP 88 Y88 o.`Y8b Yb   dP 88  .o 88""   
			 YboodP  YbodP  88  Y8 8bodP'  YbodP  88ood8 888888 
		*/
/**
 * @description Protect window.console method calls, e.g. console is not defined on IE unless dev tools are open, and IE doesn't define console.debug
 * @author [Vinicius Moraes - http://stackoverflow.com/users/2274855/vin%c3%adcius-moraes]	http://stackoverflow.com/questions/3326650/console-is-undefined-error-for-internet-explorer/1691694
 */
(function () {
	var method,
		methods = [
			"assert", "clear", "count", "debug", "dir", "dirxml", "error",
			"exception", "group", "groupCollapsed", "groupEnd", "info", "log",
			"markTimeline", "profile", "profileEnd", "table", "time", "timeEnd",
			"timeStamp", "trace", "warn"
		],
		length = methods.length,
		noop = function () {
			return true;
		},
		console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());



var base = function () {
//	FIND_VARS
		/*
			Yb    dP    db    88""Yb 88    db    88""Yb 88     888888 .dP"Y8 
			 Yb  dP    dPYb   88__dP 88   dPYb   88__dP 88     88__   `Ybo." 
			  YbdP    dP__Yb  88"Yb  88  dP__Yb  88""Yb 88  .o 88""   o.`Y8b 
			   YP    dP""""Yb 88  Yb 88 dP""""Yb 88oodP 88ood8 888888 8bodP' 
		*/
	var vars = {
		html: $("html")
	},





//	FIND_FUNCTIONS
/*
	 /$$$$$$$$                              /$$     /$$                              
	| $$_____/                             | $$    |__/                              
	| $$    /$$   /$$ /$$$$$$$   /$$$$$$$ /$$$$$$   /$$  /$$$$$$  /$$$$$$$   /$$$$$$$
	| $$$$$| $$  | $$| $$__  $$ /$$_____/|_  $$_/  | $$ /$$__  $$| $$__  $$ /$$_____/
	| $$__/| $$  | $$| $$  \ $$| $$        | $$    | $$| $$  \ $$| $$  \ $$|  $$$$$$ 
	| $$   | $$  | $$| $$  | $$| $$        | $$ /$$| $$| $$  | $$| $$  | $$ \____  $$
	| $$   |  $$$$$$/| $$  | $$|  $$$$$$$  |  $$$$/| $$|  $$$$$$/| $$  | $$ /$$$$$$$/
	|__/    \______/ |__/  |__/ \_______/   \___/  |__/ \______/ |__/  |__/|_______/ 
	                                                                                 
	                                                                                 
	                                                                                 
*/
//	FIND_DATA
		/*
			888888 88 88b 88 8888b.      8888b.     db    888888    db    
			88__   88 88Yb88  8I  Yb      8I  Yb   dPYb     88     dPYb   
			88""   88 88 Y88  8I  dY      8I  dY  dP__Yb    88    dP__Yb  
			88     88 88  Y8 8888Y"      8888Y"  dP""""Yb   88   dP""""Yb 
		*/
/**
 *	@description This function returns the value of "data-" attribute or the default provided value if not found
 *	@author  [Benoit Adam]
 *	@param 	 {jQuerySelector} elt 		  the tag where to find the data attribute
 *	@param 	 {string} 		  param 	  the data attribute to parse
 *	@param 	 {string} 		  [byDefault] the default value to return if the data attribute is not found or empty
 *	@returns {string} 					  the value of the data attribute found or the default value passed
 */
	findData = function (elt, param, byDefault) {
		return elt.data(param) !== undefined ? elt.data(param) : byDefault;
	};





//	FIND_PUBLIC
		/*
			88""Yb 888888 888888 88   88 88""Yb 88b 88 
			88__dP 88__     88   88   88 88__dP 88Yb88 
			88"Yb  88""     88   Y8   8P 88"Yb  88 Y88 
			88  Yb 888888   88   `YbodP' 88  Yb 88  Y8 
		*/
	return {
		vars: vars,
		findData: findData()
	};
};
//	END OF "BASE"



})(jQuery);
