<?php
/* é */
/*
	http://www.w3schools.com/html5/html5_audio.asp
	Support formats :
		IE		ffx		Opera	Chrome	Safari
	Ogg	-		3.5+	10.5+	3+		-
	MP3	-		-		-		3+		3+
	Wav	-		3.5+	10.5+	-		3+
*/
// Parameters to be moved into the calling page
$paramsAudio = array(
	'controls' => true,
	'autoplay' => false,
	'loop' => false,
	'preload' => false,
	'src' => array(
				'mp3' => 'img/tmp/song.mp3',
				'ogg' => 'img/tmp/song.ogg'
			),
	'alt' => $audio__unsupported
);

$audioControls = isset($paramsAudio['controls']) && $paramsAudio['controls'] ? ' controls="controls"' : null;
$audioAutostart = isset($paramsAudio['autoplay']) && $paramsAudio['autoplay'] ? ' autoplay="autoplay"' : null;
$audioPreload = isset($paramsAudio['preload']) && $paramsAudio['preload'] ? ' preload="preload"' : null;
$audioLoop = isset($paramsAudio['loop']) && $paramsAudio['loop'] ? ' loop="loop"' : null;
$audioSRC = '';
$audioSRC .= isset($paramsAudio['src']['mp3']) && is_file($paramsAudio['src']['mp3']) ? "\t<source src=\"".$paramsAudio["src"]["mp3"]."\" type=\"audio/mpeg\"></source>\n" : null;
$audioSRC .= isset($paramsAudio['src']['ogg']) && is_file($paramsAudio['src']['ogg']) ? "\t<source src=\"".$paramsAudio["src"]["ogg"]."\" type=\"audio/ogg\"></source>\n" : null;
$audioSRC .= isset($paramsAudio['src']['wav']) && is_file($paramsAudio['src']['wav']) ? "\t<source src=\"".$paramsAudio["src"]["wav"]."\" type=\"audio/x-wav\"></source>\n" : null;
$audioAlt = isset($paramsAudio['alt']) && $paramsAudio['alt'] != '' ? $paramsAudio['alt'] : null;

if ($audioSRC) {
?>
<audio <?php echo $audioControls.$audioAutostart.$audioPreload.$audioLoop; ?>>
<?php echo $audioSRC; ?>
	<?php echo $audioAlt; ?>

</audio>
<?php
}
