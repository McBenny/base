<?php
$path = '.';
$dev = isset($_GET['dev']) && $_GET['dev'] == 1 ? true : false;

require($path.'/config.php');

require($path.'/lng-fr/translations.php');

include ($path.'/includes/head__html.php');

$head__title = 'Home page';
/*
$head__style = '
		a {color: inherit;}
		.inactive {color: #999; text-decoration: none; cursor: default;}
';
*/
include ($path.'/includes/head__head.php');

/*
$foot__js__prepend = array(
 	$path.'/scripts/script-before.js'
);
$foot__js__append = array(
 	$path.'/scripts/script-after.js'
);
*/
?>

<body id="top">
<?php 
if ($dev) {
	include ($path.'/includes/-test-table-of-content.php');
}
?>


<?php /* include ($path.'/includes/header.php'); ?>

<?php include ($path.'/includes/headband.php'); ?>

<?php include ($path.'/includes/footer.php'); ?>

<?php include ($path.'/includes/foot__javascripts.php');*/ ?>

</body>
</html>
