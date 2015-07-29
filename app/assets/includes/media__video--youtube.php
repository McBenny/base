<?php
/**
 * https://developers.google.com/youtube/player_parameters#IFrame_Player_API
 * 2014-09-09
 */
?>
<div id="ytplayer"></div>

<script type="text/javascript">
// Load the IFrame Player API code asynchronously.
var tag = document.createElement("script"),
	firstScriptTag = document.getElementsByTagName("script")[0],
	player,
	playerW = playerW !== undefined ? playerW : (window.innerWidth < 1024 ? 300 : 865),
	playerH = playerH !== undefined ? playerH : (window.innerWidth < 1024 ? null : 487);
tag.src = "https://www.youtube.com/player_api";
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
function onYouTubePlayerAPIReady () {
	player = new YT.Player("ytplayer", {
		height: playerH,
		width: playerW,
		videoId: "<?php echo $idVideo; ?>"
	});
}
</script>
