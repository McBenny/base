#A little bit of help...

##Socials

###Facebook
The facebook API changes often so if this help is out of date, please be forgiving.

####Like button
| Parameter 	| Values                                                           	| Description                                                                                                                                    	|
|-----------	|------------------------------------------------------------------	|------------------------------------------------------------------------------------------------------------------------------------------------	|
| action    	| **like**, recommend                                              	| The term that will be displayed                                                                                                                	|
| url       	| **the current URL if left empty**, any URL                       	| The URL that will be "liked" or "recommended"                                                                                                  	|
| layout    	| **standard**, buton, button_count, box_count                     	| The type of display, try them to see the differences.                                                                                          	|
| width     	| **450**, any number                                              	| This works only if the layout is set to "**standard**". The minimum width is 225. Note that height is 35px, 80px with **faces** set to *true*. 	|
| faces     	| **false**, true                                                  	| Shall it display the faces of those you liked the page?                                                                                        	|
| font      	| **lucida grande**, arial, segoeui, tahoma, trebuchet ms, verdana 	| The font used for text.                                                                                                                        	|
| share     	| **false**, true                                                  	| Shall it also display a share button.                                                                                                          	|
| color     	| **light**, dark                                                  	| The general theme of the display. "Dark" reads better on dark backgrounds.                                                                     	|

examples:
![](/_documents/readme-components/socials__facebook--like-btn.png)
1. Default parameters
2. Customized 1:
```
$fbLocalData = array(
	'action' => 'recommend',
	'url' => 'http://www.yahoo.fr',
	'layout' => 'standard',
	'width' => 150,
	'faces' => 'true',
	'font' => 'segoe ui',
	'share' => 'true'
);
```
3. Customized 2:
```
$fbLocalData = array(
	'action' => 'recommend',
	'url' => 'http://www.yahoo.fr',
	'layout' => 'button_count',
	'faces' => 'true',
	'font' => 'segoe ui',
	'share' => 'true',
	'color' => 'dark'
);
```


####Share button

####Comments block

###Twitter

###Instagram