# Base

This repository is intended to house some init files to any new project.

##Embeds
This project includes:

* jQuery (1.x),
* inuit.css (5.x)
* php templating and includes

##Developing tools
The project is being powered by:

* **nodejs**, **Bower**, **NPM**,
* and then ***Brunch***.

##What's really inside?

###Templating - HTML
There are only two pages included:

* the [homepage](/app/assets/index.php),
* a [404 page](/app/assets/404.php).

But there are plenty of [includes](/app/assets/includes/) available:

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
**jQuery** is embedded in its latest 1.x version.  
A full bunch of other scripts full handy stuff is provided.

A linting utility, **ESLint**, is also included to help you cleanup your javascript code.

###Styling - CSS/Sass
**[inuit.css](https://github.com/csswizardry/inuit.css)** is embedded in its last version (not *inuitcss*).  
This framewok provides a handfull of handy classes and styles that do just the minimum to set up the design: no colors, no sizes, no "visible styles", just grids, responsive tools, layout classes etc.  
In addition to **inuit.css**, many [style files](/app/scss/) are provided to organize your styling.

##How to use it?
Ok, I'm convinced, I want to use your thingy, what shall I do now?

###Installation
[RTFM](https://en.wikipedia.org/wiki/RTFM "Wikipedia knows.")! => [Manual](installation.md).

###Configuration
There are several configuration files to set up and drive a new project, have a look at who they are, where they are and how to customize them.

* [Configure your project](configuration.md)

###Usage
Once you have installed the full project, all ou need to do is launch **Brunch**, and work!
```
brunch watch --server
```
