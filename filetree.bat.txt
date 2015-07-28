REM - Creates the default file tree of a project
REM - ------------------------------------------
ECHO - Starting...
mkdir _documents
mkdir _design
	cd _design
	mkdir _sources
	mkdir _work
	cd ..
mkdir app
	cd app
	mkdir assets
		cd assets
		mkdir css
			cd css
			mkdir fonts
			mkdir images
			cd ..
		mkdir images
		mkdir includes-html
		cd ..
	cd ..
