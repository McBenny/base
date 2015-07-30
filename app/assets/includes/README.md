#A little bit of help...

##Socials

###Facebook
The facebook API changes often so if this help is out of date, please be forgiving.

####Like button
The Like button is the quickest way for people to share content with their friends.  
A single click on the Like button will 'like' pieces of content on the web and share them on Facebook.  
You can also display a Share button next to the Like button to let people add a personal message and customize who they share with.

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

Examples:

* Default parameters:  
![](/_documents/readme-components/socials__facebook--like-btn--1.png)

* Customized 1:  
![](/_documents/readme-components/socials__facebook--like-btn--2.png)
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
* Customized 2:  
![](/_documents/readme-components/socials__facebook--like-btn--3.png)
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
The Share button lets people add a personalized message to links before sharing on their timeline, in groups, or to their friends via a Facebook Message.

| Parameter 	| Values                                                           	| Description                                                                	|
|-----------	|------------------------------------------------------------------	|----------------------------------------------------------------------------	|
| url       	| **the current URL if left empty**, any URL                       	| The URL that will be shared.                                               	|
| layout    	| **icon_link**, icon, link, button, button_count, box_count       	| The type of display, try them to see the differences.                      	|
| font      	| **lucida grande**, arial, segoeui, tahoma, trebuchet ms, verdana 	| The font used for text.                                                    	|
| color     	| **light**, dark                                                  	| The general theme of the display. "Dark" reads better on dark backgrounds. 	|

Examples:

* Default parameters:  
![](/_documents/readme-components/socials__facebook--share-btn--1.png)

* Customized 1:  
![](/_documents/readme-components/socials__facebook--share-btn--2.png)
```
$fbLocalData = array(
	'url' => 'http://www.yahoo.fr',
	'layout' => 'button_count',
	'font' => 'tahoma',
	'color' => 'light'
);
```
* Customized 2:  
![](/_documents/readme-components/socials__facebook--share-btn--3.png)
```
$fbLocalData = array(
	'url' => 'http://www.yahoo.fr',
	'layout' => 'link',
	'font' => 'arial',
	'color' => 'dark'
);
```

####Comments block
The Comments plugin lets people comment on content on your site using their Facebook account.  
If people wish to they can share this activity to their friends and friends of friends in News Feed as well.  
It also contains built-in moderation tools and special social relevance ranking.

Examples:

* Default parameters:  
![](/_documents/readme-components/socials__facebook--comments-block--1.png)

* Customized 1:  
![](/_documents/readme-components/socials__facebook--comments-block--2.png)
```
$fbLocalData = array(
	'url' => 'http://www.yahoo.fr',
	'numberPosts' => 2,
	'count' => true,
	'order' => 'time',
	'width' => 300,
	'font' => 'tahoma',
	'color' => 'light'
);
```
* Customized 2:  
![](/_documents/readme-components/socials__facebook--comments-block--3.png)
```
$fbLocalData = array(
	'url' => 'http://www.yahoo.fr',
	'numberPosts' => 2,
	'count' => false,
	'width' => 470,
	'font' => 'arial',
	'color' => 'dark'
);
```

###Twitter

###Instagram