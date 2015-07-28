# Base

This repository is intended to house some init files to any new project.

##Embeds
This project includes:

* jQuery (1.x),
* inuit.css (5.x)
* php templating and includes

##Developing tools
The project is being powered by:

* **nodejs**,
* **Bower**,
* **NPM**,
* and then ***Brunch***.

##What's really inside?

###Templating - HTML
There are only two pages included:

* the homepage,
* a 404 page.

But there are plenty of includes available:

* `<HEAD>` section with:
	* *Stylesheets* imports,
* a **headband**,
* a **main header**,
* a **navigation**,
* a **pagination** template,
* a **YouTube player**,
* `<FOOTER>` section with:
	* *Javascript* imports,
	* *Google Analytics* call.

######All these includes are plain HTML, enhanced with a bit of PHP, to handle the inclusions and to insert some text variables. They sometimes use *inuit.css* class names to get styled.

###Scripting - Javascript
**jQuery** is embeded in its latest 1.x version.  
A full bunch of other scripts is provided:

* **base.js**:
	* contains a console handler (if it lacks in the browser),
	* some generic variables,
	* a translations object, to store common used words in different languages.
* **helpers.js** contains some useful small functions that you will use elsewhere:
	* a *findData* function,
	* an *hourGlass manager*,
	* a *touch device detector*,
	* an advanced *Get-Url vars* function,
	* an *image preloader*,
	* *trim functions*.
* **[functions.js](/app/scripts/functionals/base.js)** stores more advanced functions that could be handy:
	* pop-up, print, close, history, favorites handler,
	* a *size-egalizer* for rows and columns,
	* a *click-enlarger* to react on a full area as on the small link contained,
	* a *smooth scroll* function,
	* a *ghost bar manager*,
	* everything to *insert an iframe or a flash* doc,
	* a *mailto encoder/decoder*.

######All those scripts can be activated on demand but be a little careful, some depends on others (especially on *base* and *helpers*).


###Styling - CSS/Sass
**[inuit.css](https://github.com/csswizardry/inuit.css)** is embeded in its last version (not *inuitcss*).  
This framewok provides a handfull of handy classes and styles that do just the minimum to set up the design: no colors, no sizes, no "visible styles", just grids, responsive tools, layout classes etc.  
In addition to **inuit.css**, many style files are provided to organize your styling:

* Some functional files:
	* for variables,
	* for overriding *inuit.css*,
	* some helpers,
	* some handy functions,
	* a few mixins.
* *Basic* styles,
* *Structure* styles,
* *header* and *footer* styles,
* Styles for *navigation*, *pagination*, *search*,
* *Titles* and *forms* styles,
* *Social networks* and *plugins* related styles.

######All these files are here as a guide, everything can be overriden, upscaled, changed, etc.
