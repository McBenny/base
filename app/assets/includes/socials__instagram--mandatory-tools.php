<?php
/**
 * This file is required to embed and Instragam flow.
 * If you intend to use one, you MUST insert this at the very end of the page, after the javascript calls.
 *
 * @source:	https://instagram.com/developer/
 * @time:	20150804
 *
 *  1) Register
 *  Instagram will assign you an OAuth client_id and client_secret for each of your applications.
 * 
 *  2) Authenticate
 *  Have our user authenticate and authorize your application with Instagram.
 * 
 *  3) Start making requests!
 *  Make requests to our API Endpoints with your authenticated OAuth credentials.
 */

/**
 * Insert this block at the very end of the page, after the javascript calls.
 * It doesn't generates anything in the page.
 * 
 * The following parameters must be deleted from this file and inserted into the calling page.
 * None of these parameters is mandatory as there are default values into the mechanic.
 *
 * Warning:
 * 	The 'client_id' parameter MUST be set here:
 *  	- /app/assets/config.php#$socials['instagram']['client_id']		preferred
 * 		- with your instagram local datas ($imLocalData['client_id'])	last chance
 */

// Parameters to be moved into the calling page
$imLocalData = array(
//	'client_id' => '96b797d00ead490f8a471e7663ded25d',	//	The client ID generated on intagram.com
	'tagname' => 'airfrance',							//	The tag you're looking for
	'action' => 'like',				//						LIKE | recommend
	'url' => 'http://www.yahoo.fr',	//		
	'layout' => 'standard',			//						STANDARD | button | button_count | box_count
	'width' => 380,					//						works only with 'layout' = 'standard'
															//	450 | min-width = 225
															//	height = 35 | height = 80 (with faces)
	'faces' => 'false',				//						false
	'font' => 'segoe ui',			//						LUCIDA GRANDE | arial | segoe ui | tahoma | trebuchet ms | verdana
	'share' => 'false',				//						false
	'color' => 'light'				//						LIGHT / dark
);


/*
//uncompiled source to be modified then compressed and copied/pasted below

<script type="text/javascript">
</script>
 */

if ((isset($socials['instagram']) && is_array($socials['instagram'])  && !empty($socials['instagram']['client_id'])) || !empty($imLocalData['client_id']) ) {
	$imData = array(
		'url' => isset($fbLocalData['url']) ? $fbLocalData['url'] : "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]",
		'layout' => isset($fbLocalData['layout']) ? $fbLocalData['layout'] : 'icon_link',
		'font' => isset($fbLocalData['font']) ? $fbLocalData['font'] : 'lucida grande',
		'color' => isset($fbLocalData['color']) ? $fbLocalData['color'] : 'light'
	);
?>
<script type="text/javascript">
_base.vars.socials.instagram.client_id = '<?php echo $socials['instagram']['client_id']; ?>';
_base.vars.socials.instagram.tagname = '<?php echo $socials['instagram']['tagname']; ?>';
</script>
<?php
}
else {
	if ($devvars['dev']) {
?>
<script type="text/javascript">console.info('Parameters missing for Instagram flow: client_id and/or tagname.');</script>
<?php
	}
}
unset($imLocalData, $imData);
